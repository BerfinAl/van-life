import {  useEffect } from "react";
import {
  Link,
  useNavigation,
  useLoaderData,
  useActionData,
  Form,
  redirect,
} from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  // happy path
  try {
    const data = await loginUser({ email, password }); // loginUser({email : email, password : password})
    localStorage.setItem("loggedin", true);
    return redirect(pathname, { replace: true });
    // sad path
  } catch (err) {
    return {
      error: err.message,
    };
  }
}

export default function Login() {
  const navigation = useNavigation();
  const errMessage = useActionData();
  const message = useLoaderData();

  const flash = () => {
    toast.warn(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const error = () => {
    toast.error(errMessage, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    message && flash();
  }, []);

  return (
    <div className="login-page container">
      <ToastContainer limit={1} />
      {errMessage && error()}
      <h2 className="login-page-header">Sign in to your account</h2>
      {/* 
      // we dont need to add action. React Router Form's default is whereever
      you set that action in the routes 
      // Which is /login in our case */}
      <Form className="login-form" action="/login" method="post" replace>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
        ></input>

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        ></input>

        <button
          className="login-button"
          disabled={navigation.state === "submitting"}
        >
          {navigation.state === "submitting" ? "Logging in..." : "Sign in"}
        </button>
      </Form>
      <p>
        Don't have an account?
        <Link to="/" className="create-account">
          Create one now
        </Link>
      </p>
    </div>
  );
}

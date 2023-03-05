import { Triangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="container loading">
      <Triangle
        height="60"
        width="60"
        color="#115e59"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

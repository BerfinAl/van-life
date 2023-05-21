import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
  doc,
  getDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCkcAK7ntNMvulhyjtL5gJ1K_k1yj47GBU",
  authDomain: "van-life-1c7db.firebaseapp.com",
  projectId: "van-life-1c7db",
  storageBucket: "van-life-1c7db.appspot.com",
  messagingSenderId: "804553593702",
  appId: "1:804553593702:web:f8e6a050802e6d86fd6ea7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return data;
}

export async function getVan(id) {
const vanRef = doc(db, "vans" , id)
  const vanSnapshot = await getDoc(vanRef);
  return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostVans(id="123") {
  const q = query(vansCollectionRef, where("hostId", "==", id));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return data;
}

export async function getHostVan(id) {
const vanRef = doc(db, "vans" , id)
  const vanSnapshot = await getDoc(vanRef);
  return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}

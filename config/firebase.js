import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKdoPcIzTC2WbTwyWNr0ALXi-sHiqcJH4",
  authDomain: "npmjs-product-auth.firebaseapp.com",
  projectId: "npmjs-product-auth",
  storageBucket: "npmjs-product-auth.appspot.com",
  messagingSenderId: "595462551354",
  appId: "1:595462551354:web:0de3823c2440241945c203",
};

const app = initializeApp(firebaseConfig);
// export const auth = getAuth()

const auth = getAuth(app);

export { auth };

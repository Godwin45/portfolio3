
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQuBhsbbrteb-svoAbwNUaLaP8fdePxsI",
  authDomain: "port2-3b71e.firebaseapp.com",
  projectId: "port2-3b71e",
  storageBucket: "port2-3b71e.appspot.com",
  messagingSenderId: "939180056630",
  appId: "1:939180056630:web:b64749c403d2f95422b897",
  measurementId: "G-1EXKL2Q4HW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
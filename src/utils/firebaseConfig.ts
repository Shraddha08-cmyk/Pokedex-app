import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5l9u9UTyKaDCpzcFwBYFlXaNO0DPF5uw",
    authDomain: "pokedex-app-4ee8a.firebaseapp.com",
    projectId: "pokedex-app-4ee8a",
    storageBucket: "pokedex-app-4ee8a.appspot.com",
    messagingSenderId: "558895888761",
    appId: "1:558895888761:web:cbec6d8085aa01ce3817a8",
    measurementId: "G-R8L308MDY9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");

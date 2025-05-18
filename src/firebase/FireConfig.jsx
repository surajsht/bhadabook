import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: ssrImportMetaKey.env.VITE_FIREBASE_API_KEY,
  authDomain: ssrImportMetaKey.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: ssrImportMetaKey.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: ssrImportMetaKey.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ssrImportMetaKey.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: ssrImportMetaKey.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

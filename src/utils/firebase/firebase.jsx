import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  writeBatch,
  query,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV5Ahgkz4GtzY1b1dTg26v6POFKXDHxio",
  authDomain: "la-bottega-di-sambuco-f31ed.firebaseapp.com",
  projectId: "la-bottega-di-sambuco-f31ed",
  storageBucket: "la-bottega-di-sambuco-f31ed.appspot.com",
  messagingSenderId: "867286174503",
  appId: "1:867286174503:web:b47f87f429e543c4db3702",
};

const app = initializeApp(firebaseConfig);

//Inizializzazione Firestore
const db = getFirestore(app);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getAnelli = async () => {
  const collectionRef = collection(db, "prodotti");
  const querySnapshot = await getDocs(collectionRef);
  const documentData = querySnapshot.docs.find((doc) => doc.id === "anelli");
  const items = documentData ? documentData.data().items : [];
  return items;
};

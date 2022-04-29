import firebase from "./firebase";
import { doc as document, getFirestore, getDoc, setDoc, collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";

const db = getFirestore(firebase);

const doc = path => document(db, path);


export const getDOC = path => getDoc(doc(path));
export const getCollection = path => getDocs(collection(db, path));


export const addDOC = ({ path, ...data }) => addDoc(getCollection(path), data);
export const setDOC = ({ path, merge = true, ...data }) => setDoc(doc(path), data, { merge })
export const removeDOC = (path) => deleteDoc(doc(path))
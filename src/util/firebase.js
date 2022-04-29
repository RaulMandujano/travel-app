import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBtUSPlKF-mmkH6qhO2OuYMQ1nKSuK6sww",
    authDomain: "travelapp-e3a33.firebaseapp.com",
    projectId: "travelapp-e3a33",
    storageBucket: "travelapp-e3a33.appspot.com",
    messagingSenderId: "134876507510",
    appId: "1:134876507510:web:45a85db56229caabe41e57"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
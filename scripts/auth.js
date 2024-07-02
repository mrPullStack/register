// Import Firebase functions
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./app"; // Import the initialized Firebase app from app.js

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Register function
const register = (email, password, firstName, lastName) => {
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            return db.collection('users').doc(user.uid).set({
                email: email,
                firstName: firstName,
                lastName: lastName
            });
        })
        .then(() => {
            console.log('User registered');
        })
        .catch(error => {
            console.error('Error registering user:', error);
        });
};

// Login function
const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log('User logged in:', user);
        })
        .catch(error => {
            console.error('Error logging in:', error);
        });
};

// Logout function
const logout = () => {
    auth.signOut()
        .then(() => {
            console.log('User logged out');
        })
        .catch(error => {
            console.error('Error logging out:', error);
        });
};

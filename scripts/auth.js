// Import Firebase functions
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./app"; // Import the initialized Firebase app from app.js

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Check if username is already taken
const isUsernameTaken = async (username) => {
const usersRef = db.collection('users');
const snapshot = await usersRef.where('username', '==', username).get();
return !snapshot.empty;
};

// Register function
export const register = async (username, email, password, firstName, lastName) => {
    try {
    if (await isUsernameTaken(username)) {
        throw new Error('Username is already taken');
    }
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    await db.collection('users').doc(user.uid).set({
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName
    });
    console.log('User registered');
    return user;
} catch (error) {
    console.error('Error registering user:', error);
    throw error; // Rethrow the error to the caller
}
};

// Login function
const login = async (email, password) => {
    try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log('User logged in:', user);
    return user;
} catch (error) {
    console.error('Error logging in:', error);
    throw error; // Rethrow the error to the caller
    }
};

// Logout function
const logout = async () => {
    try {
    await auth.signOut();
    console.log('User logged out');
} catch (error) {
    console.error('Error logging out:', error);
    throw error; // Rethrow the error to the caller
    } 
};

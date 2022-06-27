// import { initializeApp } from "firebase/app";

// import {
//     getAuth,
//     signInWithRedirect,
//     signInWithPopup,
//     GoogleAuthProvider
// } from 'firebase/auth';

// import {
//     getFirestore,
//     doc,
//     getDoc,
//     setDoc
// } from 'firebase/firestore';


// const firebaseConfig = {
//     apiKey: "AIzaSyCu8xKUBlv20gXPZMsgHqeZnvAjfa-bLcc",
//     authDomain: "crwn-clothing-db-6b0b7.firebaseapp.com",
//     projectId: "crwn-clothing-db-6b0b7",
//     storageBucket: "crwn-clothing-db-6b0b7.appspot.com",
//     messagingSenderId: "276502202270",
//     appId: "1:276502202270:web:c164d63eb76f32c428788f"
// };

// const firebaseApp = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//     prompt: 'select_account',
// });

// export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// export const db = getFirestore();

// export const createUserDocumentFromAuth = async (userAuth) => {
//     const userDocRef = doc(db, 'users', userAuth.uid);

//     const userSnapshot = await getDoc(userDocRef);

//     if(!userSnapshot.exists()){
//         const {displayName, email} = userAuth;
//         const createdAt = new Date();

//         try{
//             await setDoc(userDocRef, {
//                 displayName,
//                 email,
//                 createdAt
//             });
//         }catch(error){
//             console.log('error creating the user', error.message);
//         }
//     }

//     return userDocRef;
// }


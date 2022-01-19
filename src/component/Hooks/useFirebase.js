import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {

    // Google signin and signOut

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {

                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {

            }
        });
    })

    // Email and password signin and signOut
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerEmail = e => {
        setEmail(e.target.value)
    }
    const loginEmail = e => {
        setEmail(e.target.value)
    }
    const registerPassword = e => {
        setPassword(e.target.value)
    }
    const loginPassword = e => {
        setPassword(e.target.value)
    }
    const handleRegistration = e => {

        createUserWithEmailAndPassword(auth, email, password,)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch((error) => {
                setError(error.message);

            });
        e.preventDefault()
    }
    const handleLogIn = e => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch((error) => {
                setError(error.message);

            });
        e.preventDefault()
    }

    return {
        handleGoogleSignIn, user, error, logOut, registerEmail, registerPassword, handleRegistration, handleLogIn, loginEmail, loginPassword
    }
}

export default useFirebase;
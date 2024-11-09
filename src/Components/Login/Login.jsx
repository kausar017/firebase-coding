

import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setuser] = useState(null);

    console.log(user);



    const provaider = new GoogleAuthProvider()
    const handalGoogle = () => {

        signInWithPopup(auth, provaider)
            .then(result => {
                console.log(result.user);
                setuser(result.user)

            })
            .catch(error => {
                console.log('Error', error);
                setuser(null)
            })

    };
    const handlSingOut = () => {
        console.log('hello');
        signOut(auth)
            .then(() => {
                alert('Click the ok button and singout succsessfully')
                setuser(null)
            })

    };


    const gitProvaider =new GithubAuthProvider()



    const handalgit = () => {
        console.log("hello git");
        signInWithPopup(auth, gitProvaider)
            .then(result =>{
                console.log(result.user);
                setuser(result.user)
            } )
            .catch(error => console.log('error', error))
    }



    return (
        <div>
            {
                user ?
                    <button onClick={handlSingOut} className="btn mt-5">Sign out</button>
                    :
                    <>
                        <button onClick={handalGoogle} className="btn mt-5">Login With Google</button>
                        <button onClick={handalgit} className="btn">Login With github</button>
                    </>
            }




            {
                user &&
                <div>
                    <h4 className="mt-4">{user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                    <p>{user.providerId
                    }</p>
                </div>
            }
        </div>
    );
};

export default Login;
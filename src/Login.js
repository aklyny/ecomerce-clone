import React,{useState} from 'react';
import './Login.css'
import {Link,useHistory} from 'react-router-dom';
import {auth} from "./firebase";
const Login = ()=>{
    const history = useHistory();
    const [email,setEmail]  = useState('');
    const [password,setPassword]  = useState('');
    const login = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push('/');
        })
        .catch((e)=>alert(e.message))
    }
    const register = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{

        })
        .catch((e)=>alert(e.message));
    }
    return(
        <div className="login">
           <Link to = "/">
               <img
               className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
           </Link>
           <div className="login__container">
                <h1>Sign In</h1>
                <form>
                  <h5>Email</h5>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                  <h5>Password</h5>
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>  
                  <button onClick={login} className="login__signin">Sign In</button>
                </form>
                <p>
                By creating an account or logging in, you agree to Amazon’s Conditions of Use and Privacy Policy.
                </p>
                <button onClick={register} className="login__register">Create An Account</button>
           </div>
        </div>
    )
}

export default Login;
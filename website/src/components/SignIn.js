import React,{useState,useEffect} from 'react'
import {API} from '../api-service';
import  { useCookies } from 'react-cookie';


function SignIn() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [isLoginView,setIsLoginView] = useState(true);
    
    const [token,setToken]  = useCookies(['user-token']);

    useEffect ( ()=>{
        
        if(token['user-token']) {
            console.log('token =>',token['user-token'])
        }
    },[token])

    const loginClicked = () => {
        API.loginUser({username,password})
        
        .then( resp => {
            setToken('user-token',resp.token)
            console.log("user-token =>", resp.token)
        })
        .catch( error => console.log(error))    
    }
    const registerClicked = () => {
        API.registerUser({username,password})
        .then( () => loginClicked())
        .catch( error => console.log(error))
    }

    const isDisabled = username.length === 0 || password.length === 0;
    
    return (
        <div className="App">
            <header className="App-header">
            {isLoginView ? <h1>SignIn</h1> : <h1>SignUp</h1>}
        </header>
            <div className="login-container">
            
            <label htmlFor="username">Username</label> <br/>
            <input id="username" type="text" placeholder='username' value={username}
            onChange={ evt => setUsername(evt.target.value)}
            /><br/>
            <label htmlFor="password">Password</label><br/>
            <input id="password" type="password" placeholder='password' value={password}
            onChange={ evt => setPassword(evt.target.value)}/><br/>
            { isLoginView ? 
                <button onClick={loginClicked} disabled={isDisabled}>SignIn</button> :
                <button onClick={registerClicked} disabled={isDisabled}>SignUp</button> 
            }    
                {isLoginView ? 
                <p onClick={()=> setIsLoginView(false)}>You don't have account ? SignUp here!</p> : 
                <p onClick={()=> setIsLoginView(true)}>You already have account ? SignIn here!</p>}
                </div>
            </div>
    )
}
export default SignIn

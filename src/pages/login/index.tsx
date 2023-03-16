import { useState, useEffect } from 'react'
import styles from './login.module.css'

function Login() {
    const [emailInput, setEmailInput] = useState<String>('');
    const [passwordInput, setPasswordInput] = useState<String>('');

    const [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        if (loginStatus === true) {
            location.href = '/'
        }
    },[loginStatus])

    const login = async (email: String, password: String) => {
        const reqBody = {
            email,
            password
        }

        const loginApi = await fetch('/api/login',
        {
            method: "POST",
            body: JSON.stringify(reqBody)
        })

        if (loginApi.ok){
            setLoginStatus(true)
        }
    }

    return (
        <div className={styles.page}>
            <div>
                LOGIN
                <br/>

                username: <input type="email" onChange={(e) => setEmailInput(e.target.value)}/>
                <br />
                password: <input type="password" onChange={(e) => setPasswordInput(e.target.value)}/>
                <br />
                <button onClick={() => login(emailInput, passwordInput)}>LOGIN</button>
            </div>
        </div>
    )
        
}

export default Login
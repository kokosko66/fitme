import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserAlt, FaPhoneAlt  } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Login() {

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('Trainee');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:6969/login', { email, password });
            console.log('Login successful:', response.data);
            alert('Login successful');
            navigate('/home');
        } catch (error) {
            console.error('Login error:', error.response.data);
            alert('Invalid credentials');
        }
    }

    const handleSignUp = async () => {
        try {
            const response = await axios.post('http://localhost:6969/signup', { name, email, phone, password, role });
            console.log('Sign up successful:', response.data);
            alert('Sign up successful');
            navigate('/home');
        } catch (error) {
            console.error('Sign up error:', error.response.data);
            alert('Error during sign up');
        }
    };

    return(
        isLogin ? (
            <div>
                <div className="header">
                    <h1>FitMe</h1>
                </div>
                <div className="login-container">
                    <h2>Login</h2>
                    <div>
                        {<MdOutlineEmail/>}
                        <input 
                            type="email" 
                            className="input-field" 
                            placeholder="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <br /><br />
                        {<RiLockPasswordLine/>}
                        <input 
                            type="password" 
                            className="input-field" 
                            placeholder="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <br /><br />
                    </div>
                    <p>
                        Don't have an account?{" "}
                        <a href="#" onClick={() => setIsLogin(false)}>Sign Up</a>
                    </p>
                    <button className="login-button" onClick={handleLogin}>Login</button>
                </div>
            </div>
        ) : (
            <div>
            <div className="header">
                <h1>FitMe</h1>
            </div>
            <div className="login-container">
                <h2>Sign Up</h2>
                <div>
                    {<FaUserAlt/>}
                    <input 
                        type="text" 
                        className="input-field" 
                        placeholder="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br /><br />
                    {<FaPhoneAlt/>}
                    <input 
                        type="text" 
                        placeholder="phone number" 
                        className="input-field" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                    />
                    <br /><br />
                    {<MdOutlineEmail/>}
                    <input 
                        type="email" 
                        className="input-field" 
                        placeholder="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <br /><br />
                    {<RiLockPasswordLine/>}
                    <input 
                        type="password" 
                        className="input-field" 
                        placeholder="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <br /><br />
                    <select 
                        className="select-field" 
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}>
                        <option value="Trainer">Trainer</option>
                        <option value="Trainee">Trainee</option>
                    </select>
                    <br /><br />
                </div>
                <p>
                    Already have an account?{" "}
                    <a href="#" onClick={() => setIsLogin(true)}>Login</a>
                </p>
                <button className="login-button" onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
        )
    );
}
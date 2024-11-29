import './MainPage.css';
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function MainPage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/account');
    }

    return(
        <div className="main-page-container">
            <div className='top-navigation'>
                <h1>FitMe</h1>
                <div className="navbar">
                    <nav>
                        <ul>
                            <li><a href="#"><span>Home</span></a></li>
                            <li><a href="#"><span>Trainers</span></a></li>
                            <li><a href="#"><span>Workouts</span></a></li>
                        </ul>
                    </nav>
                </div>

                <a className='user' href="#" onClick={handleClick}>{<FaUserCircle size={40}/>}</a>
                
            </div>
            <div className="main-area">

            </div>              
        </div>
    );
}
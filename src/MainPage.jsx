import './MainPage.css';
import { FaUserCircle } from "react-icons/fa";

export default function MainPage() {

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

                <a href="#">{<FaUserCircle size={40}/>}</a>
                
            </div>
            <div className="main-area">

            </div>              
        </div>
    );
}
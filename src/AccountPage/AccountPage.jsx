import './AccountPage.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function AccountPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }
    return(
        <div>
            <div className='header-container'>
                <h1>FitMe</h1>
                <a href="#" onClick={handleClick}>{<IoMdArrowRoundBack size={60}/>}</a>
            </div>
        </div>
    );
}
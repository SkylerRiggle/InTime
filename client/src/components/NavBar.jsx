import { useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

   return (
     <div
       className='d-flex justify-content-between p-1 ps-4 pe-4'
       style={{ width: '100%', height: '48pt', boxShadow:'0 -15px 30px black' }}>
      <a href='/'><img src={Logo} alt="Logo.png" height="80pt" /></a>
       
      <div className='d-flex h-100 align-items-center'>
        <a href='/login' className={localStorage.getItem('user') ? 'd-none' : 'btn btn-success m-2'}>Login</a>
        <div className={localStorage.getItem('user') ? 'd-flex' : 'd-none'}>
          <a href={`/${localStorage.getItem('user')}`} className='btn text-white m-2' style={{backgroundColor:"#FF4700"}}>Home</a>
          <div className='btn btn-success m-2' onClick={() => handleLogout()}>Logout</div>
        </div>
      </div>
    </div>
   );
 };
 
 export default NavBar;
 
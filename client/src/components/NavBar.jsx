import Logo from '../images/logo.png';

const NavBar = () => 
 {
   return (
     <div
       className='p-1 ps-4'
       style={{ width: '100%', height: '48pt', boxShadow:'0 -15px 30px black' }}>
       <a href='/'><img src={Logo} alt="Logo.png" height="80pt"/></a>
    </div>
   );
 };
 
 export default NavBar;
 
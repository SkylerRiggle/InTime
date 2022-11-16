import Logo from '../images/logo.png';

const NavBar = () => 
 {
   return (
     <div
       className='d-flex justify-content-between p-1 ps-4 pe-4'
       style={{ width: '100%', height: '48pt', boxShadow:'0 -15px 30px black' }}>
       <a href='/'><img src={Logo} alt="Logo.png" height="80pt" /></a>
       
       <div className='d-flex h-100 align-items-center'>
         <a href='/login' className='btn btn-success m-2'>Login</a>
       </div>
    </div>
   );
 };
 
 export default NavBar;
 
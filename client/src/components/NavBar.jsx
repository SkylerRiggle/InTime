 import Logo from '..//images/navlogo.png';

 const NavBar = () => 
 {
   return (
    <div className='shadow p-1 ps-4 mb-4' style={{width:'100vw', height:'8vh'}}>
        <a href='/'>
            <img 
            src={Logo} 
            alt='Logo' 
            style={{
              height:'11vh', 
              filter:'drop-shadow(0 10px 10px rgba(0,0,0, 0.3))'
            }}/>
        </a>
    </div>
   );
 };
 
 export default NavBar;
 
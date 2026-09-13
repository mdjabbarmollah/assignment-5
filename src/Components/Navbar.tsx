import Navlogo from '../assets/logo-text.png'
import hambargerLogo from '../assets/hamburger.png'
const Navbar = () => {
  return (
   
      <nav className='sticky top-0 bg-white z-50'>
      <div className='flex justify-between container mx-auto px-4 py-[12px] items-center font-semibold'>
        <img className='flex md:hidden items-center ' src={hambargerLogo} alt="" />

        <img src={Navlogo} alt="" />
         
        <ul className=' hidden md:flex gap-6 '>
            <li className='text-[#DB2777] '>Home</li>
        
          <li className='text-[#475569]'>Technologies</li>
          <li className='text-[#475569]'>Projects</li>
          <li className='text-[#475569]' >About</li>
          <li className='text-[#475569]'>Contact</li>
          </ul>
          
        <div className='flex gap-[20px] text-[14px]'>

         
        <button className='  rounded-full h-[39px] px-[20px]'>Sign In</button>
          <button className='bg-pink-500 border rounded-full  text-white h-[39px] px-[20px]'>Sign Up</button>
          </div>
          </div>
      </nav>
    
  );
};

export default Navbar;
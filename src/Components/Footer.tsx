import Navlogo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <footer className='border-t border-[#E5E7EB] bg-white'>
      <div className='container mx-auto px-[30px] pt-[64px] pb-[32px]'>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-[32px] mb-[48px]'>

          <div className='md:col-span-5 max-w-[380px]'>
            <img src={Navlogo} alt="" className='mb-[16px]' />
            <p className='text-[#64748B] text-[14px]  mb-[20px]'>
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className='flex gap-[20px] text-[14px] font-medium text-[#374151]'>
              <span className='cursor-pointer hover:text-[#DB2777]'>GitHub</span>
              <span className='cursor-pointer hover:text-[#DB2777]'>Twitter</span>
              <span className='cursor-pointer hover:text-[#DB2777]'>LinkedIn</span>
            </div>
          </div>

          <div className='md:col-span-2'>
            <h4 className='text-[13px] font-bold tracking-wide  text-[#1E293B] mb-[16px]'>PRODUCT</h4>
            <ul className='flex flex-col gap-[12px] text-[14px] text-[#64748B]'>
              <li className='cursor-pointer hover:text-[#DB2777]'>Home</li>
              <li className='cursor-pointer hover:text-[#DB2777]'>Technologies</li>
              <li className='cursor-pointer hover:text-[#DB2777]'>Projects</li>
            </ul>
          </div>

          <div className='md:col-span-2'>
            <h4 className='text-[13px] font-bold tracking-wide text-[#1E293B] mb-[16px]'>COMPANY</h4>
            <ul className='flex flex-col gap-[12px] text-[14px] text-[#64748B]'>
              <li className='cursor-pointer hover:text-[#DB2777]'>About</li>
              <li className='cursor-pointer hover:text-[#DB2777]'>Contact</li>
              <li className='cursor-pointer hover:text-[#DB2777]'>Careers</li>
            </ul>
          </div>

          <div className='md:col-span-2'>
            <h4 className='text-[13px] font-bold tracking-wide text-[#1E293B] mb-[16px]'>LEGAL</h4>
            <ul className='flex flex-col gap-[12px] text-[14px] text-[#64748B]'>
              <li className='cursor-pointer hover:text-[#DB2777]'>Privacy Policy</li>
              <li className='cursor-pointer hover:text-[#DB2777]'>Terms of Service</li>
            </ul>
          </div>

        </div>

        <div className='border-t border-[#E5E7EB] pt-[24px] flex flex-col md:flex-row justify-between items-center gap-[12px] text-[13px] text-[#94A3B8]'>
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className='flex gap-[24px]'>
            <span className='cursor-pointer hover:text-[#DB2777]'>Privacy</span>
            <span className='cursor-pointer hover:text-[#DB2777]'>Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

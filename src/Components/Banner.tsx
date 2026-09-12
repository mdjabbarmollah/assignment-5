import bannerImage from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <div className="container mx-auto  grid grid-cols-1  md:grid-cols-12 px-[30px] items-center gap-[16px] md:gap-[32px] mt-[48px] mb-[40px] md:mt-[70px] md:mb-[112px]">
      <div className='md:col-span-7 max-w-[606px]'>
      <h2 className='text-[36px] md:text-[48px] lg:text-[60px] font-extrabold'>Build Your Ideal <br />
        <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h2>
      <p className='text-[#475569] mt-[20px] mb-[40px] text-[18px] max-w-[480px]'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
          next project.</p>
        <div className='flex gap-[16px]'>
      <button className= 'bg-gradient-to-r from-[#F97316] to-[#EC4899]  w-[170px] h-[42px] rounded-[8px] text-white text-[14px] '>Explore Technologies</button>
          <button className='bg-white border-[1px] text-[#374151] rounded-[8px]  w-[170px] h-[42px] border-[#E5E7EB] '>Learn More</button>
          </div>
        </div>
      <div className=' md:col-span-5 '>
<img className='w-full max-w-[420px]  mx-auto h-auto ' src={bannerImage} alt="" />
      </div>
      
    </div>
  );
};

export default Banner;
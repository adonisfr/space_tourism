const Home = () => {
  return (
    <div className="bg-[url('assets/home/background-home-mobile.jpg')] bg-cover w-full h-screen">
      <div className="pt-28">
      <div className="px-6 ">
          <div className="flex flex-col gap-5">
            <div className="text-center">
            <p className="text-xs text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</p>
            </div>
            <div className="text-center">
            <p className="font-[Bellefair] text-7xl text-white">SPACE</p>
            </div>
            <div className="text-center text-[15px] tracking-[2.7px]">
            <p className="font-[Barlow] text-[#D0D6F9]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
          </div>
        </div>
    
      <div className=" flex items-center justify-center w-full mt-24 ">
      <div className="flex items-center justify-center bg-white w-[150px] h-[150px] rounded-full">
        <p className="font-[Bellefair] font-normal">EXPLORE</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Home;

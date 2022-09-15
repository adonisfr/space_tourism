import Container from './commun/container';
// import bgHome from '../assets/home/background-home-mobile.jpg';

const Home = () => {
	return (
		<Container
			classContainer="bg-[url('./assets/home/background-home-mobile.jpg')] md:bg-[url('./assets/home/background-home-tablet.jpg')]"
			classBody="px-6 md:mt-20"
		>
			<div className="flex flex-col gap-5 px-6">
				<div className="text-center">
					<p className="text-xs md:text-xl text-[#D0D6F9]">SO, YOU WANT TO TRAVEL TO</p>
				</div>
				<div className="text-center">
					<p className="font-[Bellefair] text-7xl md:text-9xl text-white">SPACE</p>
				</div>
				<div className="flex w-full justify-center">
					<div className="text-center  max-w-md">
						<p className="font-[Barlow] text-[15px] tracking-[2.7px] text-[#D0D6F9]">
							Let’s face it; if you want to go to space, you might as well genuinely go to outer
							space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
							give you a truly out of this world experience!
						</p>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center w-full mt-24  md:mt-32">
				<div className="flex items-center justify-center bg-white w-[150px] md:w-52 h-[150px] md:h-52 rounded-full">
					<p className="font-[Bellefair] font-normal">EXPLORE</p>
				</div>
			</div>
		</Container>
	);
};

export default Home;

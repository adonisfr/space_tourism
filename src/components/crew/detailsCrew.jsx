import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImgUrl } from '../commun/utils';
import { updateCurrentMember } from './slices/crewSlices';

const DetailsCrew = () => {
	const [currectImage, setCurrentImage] = useState('');
	const crewData = useSelector((state) => state.crew.crewData);
	const currentMember = useSelector((state) => state.crew.currentMember);
	const { name, role, bio, images } = currentMember;
	const dispatch = useDispatch();

	useEffect(() => {
		if (images?.webp) {
			const imgUrl = getImgUrl(images.webp);
			setCurrentImage(imgUrl);
		}
	}, [images?.webp, setCurrentImage]);

	const update = (selected) => {
		const currentSelected = crewData[selected];
		dispatch(updateCurrentMember(currentSelected));
	};

	return (
		<div className="flex flex-col flex-grow lg:flex-row lg:min-h-[86vh]">
			<div className="flex flex-col items-center w-full lg:w-3/5 lg:pt-14 lg:pl-12">
				<div className="flex flex-col space-y-5  w-full lg:w-[635px]   ">
					<h1 className="font-barlowCondensed tracking-[4.725px] text-base md:text-xl lg:text-[28px] text-white self-center md:self-start">
						02 MEET YOUR CREW
					</h1>
					<div className="flex justify-center md:hidden">
						<img src={currectImage} className="w-50 h-[223px]" alt="image" />
					</div>
				</div>
				<hr className="w-full border-t-1 border-gray-500  mb-2 md:hidden" />
				<div className="flex justify-center  space-x-3 text-white mt-4 md:hidden">
					{Object.keys(crewData).map((i) => {
						return (
							<button className="w-[10px] h-[10px]" key={i} onClick={() => update(i)}>
								<div
									className={`${role === i ? 'bg-white ' : 'bg-slate-400'} h-full rounded-full`}
								/>
							</button>
						);
					})}
				</div>
				<div className="flex flex-col items-center  lg:w-[635px]  lg:h-96 lg:items-start lg:pt-14 space-y-5 mt-5 text-white">
					<div className="flex flex-col items-center lg:items-start">
						<h5 className="font-bellefair text-[16px] md:text-[24px] lg:text-[32px] text-[#D0D6F9] uppercase">
							{role}
						</h5>
						<h5 className="font-bellefair text-[24px] md:text-[40px] lg:text-[56px] uppercase">
							{name}
						</h5>
					</div>
					<div className="md:w-[560px] lg:w-[544px] ">
						<p className="font-barlow text-[15px] md:text-[16px] lg:text-lg text-center lg:text-start">
							{bio}
						</p>
					</div>
				</div>
				<div className="md:flex justify-center lg:justify-start lg:w-[635px]   lg:pt-6 space-x-3 text-white mt-5 mb-10 hidden">
					{Object.keys(crewData).map((i) => {
						return (
							<button className="w-[15px] h-[15px]" key={i} onClick={() => update(i)}>
								<div
									className={`${role === i ? 'bg-white ' : 'bg-slate-400'} h-full rounded-full`}
								/>
							</button>
						);
					})}
				</div>
			</div>
			<div className="md:flex  justify-center lg:justify-start  lg:w-2/5 hidden  ">
				<img
					src={currectImage}
					className="md:max-h-[532px]  
				md:min-h-[60vh] lg:min-h-full"
					alt="image"
				/>
			</div>
		</div>
	);
};

export default DetailsCrew;

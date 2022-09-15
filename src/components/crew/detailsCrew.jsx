import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentMember } from './slices/crewSlices';

const DetailsCrew = () => {
	const [currectImage, setCurrentImage] = useState('');
	const crewData = useSelector((state) => state.crew.crewData);
	const currentMember = useSelector((state) => state.crew.currentMember);
	const { name, role, bio, images } = currentMember;
	const dispatch = useDispatch();

	useEffect(() => {
		if (images?.png) {
			import(`../.${images.png}`).then((img) => {
				setCurrentImage(img.default);
			});
		}
	}, [images?.png, setCurrentImage]);

	const update = (selected) => {
		const currentSelected = crewData[selected];
		dispatch(updateCurrentMember(currentSelected));
	};

	return (
		<div className="flex flex-col">
			<div className="flex flex-col space-y-5  w-full">
				<h1 className="text-white self-center md:self-start">02 MEET YOUR CREW</h1>
				<div className="flex justify-center md:hidden">
					<img src={currectImage} className="w-50 h-[223px]" />
				</div>
			</div>
			<hr className="w-full border-t-1 border-gray-500  mb-2 md:hidden" />
			<div className="flex justify-center  space-x-3 text-white mt-4 md:hidden">
				{Object.keys(crewData).map((i) => {
					return (
						<button className="w-2 h-2" key={i} onClick={() => update(i)}>
							<div className={`${role === i ? 'bg-white ' : 'bg-slate-400'} h-full rounded-full`} />
						</button>
					);
				})}
			</div>
			<div className="flex flex-col items-center space-y-5 mt-5 text-white">
				<div className="flex flex-col items-center">
					<h5 className="font-[Bellefair] text-[16px] md:text-[24px] text-[#D0D6F9] uppercase">
						{role}
					</h5>
					<h5 className="font-[Bellefair] text-[24px] md:text-[40px] uppercase">{name}</h5>
				</div>
				<div className="md:w-[560px]">
					<p className="font-[Barlow] text-[15px] md:text-[16px] text-center">{bio}</p>
				</div>
			</div>
			<div className="md:flex justify-center  space-x-3 text-white mt-5 mb-10 hidden">
				{Object.keys(crewData).map((i) => {
					return (
						<button className="w-2 h-2" key={i} onClick={() => update(i)}>
							<div className={`${role === i ? 'bg-white ' : 'bg-slate-400'} h-full rounded-full`} />
						</button>
					);
				})}
			</div>
			<div className="md:flex  justify-center border-b-2 border-b-gray-500 hidden">
				<img src={currectImage} className="md:max-h-[532px]" />
			</div>
		</div>
	);
};

export default DetailsCrew;

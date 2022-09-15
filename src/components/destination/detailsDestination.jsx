import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentDestination } from './slices/destinationSlices';

const DetailsDestination = () => {
	const destination = useSelector((state) => state.destination.current);
	const data = useSelector((state) => state.destination.data);
	const dispatch = useDispatch();
	const { name, distance, description, travel, images } = destination;
	const [currentImage, setCurrentImage] = useState('');

	useEffect(() => {
		if (images?.png) {
			import(`../.${images.png}`).then((resp) => {
				setCurrentImage(resp.default);
			});
		}
	}, [images]);

	const update = (selected) => {
		const current = data[selected];
		dispatch(updateCurrentDestination(current));
	};

	return (
		<div className="flex flex-col">
			<div className="flex flex-col  w-full space-y-5 pb-4">
				<h1 className="text-white self-center md:self-start">01 PICK YOUR DESTINATION</h1>
				<img src={currentImage} className="self-center w-44 md:w-[300px]" />
			</div>
			<div className="flex justify-center  space-x-8 text-white">
				{Object.keys(data).map((i) => {
					return (
						<div className="cursor-pointer uppercase" key={i} onClick={() => update(i)}>
							<p className={name === i ? 'underline ' : ''}>{i}</p>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col items-center space-y-5 mt-3 text-white">
				<h1 className=" text-[56px] md:text-[80px] uppercase  font-light font-[Bellefair] ">
					{name}
				</h1>
				<div className="md:w-[532px]">
					<p className="font-[Barlow] text-base text-center">{description}</p>
				</div>
				<hr className="w-full" />
				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 space-y-4 md:space-y-0 items-center">
					<div className="flex flex-col items-center ">
						<h5 className="font-[Barlow Condensed] text-[14px] text-[#D0D6F9]">AVG. DISTANCE</h5>
						<h5 className="text-[28px]">{distance}</h5>
					</div>
					<div className="flex flex-col items-center">
						<h5 className="font-[Barlow Condensed] text-[14px] text-[#D0D6F9]">EST. TRAVEL TIME</h5>
						<h5 className="text-[28px]">{travel}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsDestination;

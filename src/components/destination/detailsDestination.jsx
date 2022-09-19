import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentDestination } from './slices/destinationSlices';

const DetailsDestination = () => {
	const [currentImage, setCurrentImage] = useState('');
	const destination = useSelector((state) => state.destination.current);
	const data = useSelector((state) => state.destination.data);
	const dispatch = useDispatch();
	const { name, distance, description, travel, images } = destination;

	useEffect(() => {
		if (images?.png) {
			import(`../.${images.png}`).then((resp) => {
				setCurrentImage(resp.default);
			});
		}
	}, [images?.png]);

	const update = (selected) => {
		const current = data[selected];
		dispatch(updateCurrentDestination(current));
	};

	return (
		<div className="flex flex-col lg:flex-row">
			<div className="flex flex-col items-center   w-full pb-4 ">
				<div className="flex flex-col lg:w-[540px]  space-y-16 ">
					<h1 className="text-white self-center md:self-start text-base md:text-xl lg:text-[28px] ">
						01 PICK YOUR DESTINATION
					</h1>
					{currentImage && (
						<img
							src={currentImage}
							className="self-center w-44 md:w-[300px] lg:h-[445px] lg:w-[445px]"
						/>
					)}
				</div>
			</div>
			<div className="lg:w-2/3 lg:pt-28">
				<div className="flex justify-center lg:justify-start  space-x-8 text-white ">
					{Object.keys(data).map((i) => {
						return (
							<div className="cursor-pointer uppercase" key={i} onClick={() => update(i)}>
								<p className={name === i ? 'underline ' : ''}>{i}</p>
							</div>
						);
					})}
				</div>
				<div className="flex flex-col items-center lg:items-start space-y-5 mt-3 text-white ">
					<h1 className=" text-[56px] md:text-[80px] uppercase  font-light font-[Bellefair] ">
						{name}
					</h1>
					<div className="md:w-[532px] lg:w-[444px]">
						<p className="font-[Barlow] text-base text-center lg:text-start lg:text-lg">
							{description}
						</p>
					</div>
					<hr className="w-full lg:w-[444px] border-t-1  border-t-gray-500" />
					<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 space-y-4 lg:space-x-12 uppercase md:space-y-0 items-center ">
						<div className="flex flex-col items-center">
							<h5 className="font-[Barlow Condensed] text-[14px] text-[#D0D6F9] lg:self-start">
								AVG. DISTANCE
							</h5>
							<h5 className="text-[28px] lg:self-start">{distance}</h5>
						</div>
						<div className="flex flex-col items-center ">
							<h5 className="font-[Barlow Condensed] text-[14px] text-[#D0D6F9] lg:self-start">
								EST. TRAVEL TIME
							</h5>
							<h5 className="text-[28px] lg:self-start">{travel}</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsDestination;

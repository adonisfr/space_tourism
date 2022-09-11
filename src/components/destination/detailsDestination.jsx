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
				<h1 className="text-white self-center">01 Pick your destination</h1>
				<img src={currentImage} className="self-center" width={170} />
			</div>
			<div className="flex justify-center  space-x-8 text-white">
				{Object.keys(data).map((i) => {
					return (
						<div className="cursor-pointer" key={i} onClick={() => update(i)}>
							<p className={name === i ? 'underline ' : ''}>{i}</p>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col items-center space-y-5 mt-3 text-white">
				<h1 className=" text-5xl font-light font-[Bellefair] ">{name}</h1>
				<p className="font-[Barlow] text-xs text-center">{description}</p>
				<hr className="w-full" />
				<div className="flex flex-col items-center">
					<h5 className="text-[15px] text-[#D0D6F9]">AVG. DISTANCE</h5>
					<h5 className="text-[28px]">{distance}</h5>
				</div>
				<div className="flex flex-col items-center">
					<h5 className="text-[15px] text-[#D0D6F9]">EST. TRAVEL TIME</h5>
					<h5 className="text-[28px]">{travel}</h5>
				</div>
			</div>
		</div>
	);
};

export default DetailsDestination;

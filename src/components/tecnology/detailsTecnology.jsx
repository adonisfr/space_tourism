import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrentTecnology } from './slices/tecnologySlices';

const DetailsTecnology = () => {
	const [currectImage, setCurrentImage] = useState('');
	const dataTecnology = useSelector((state) => state.tecnology.dataTecnology);
	const currentTecnology = useSelector((state) => state.tecnology.currentTecnology);
	const { name, description, images } = currentTecnology;
	const dispatch = useDispatch();

	useEffect(() => {
		if (images?.landscape) {
			import(`../.${images.landscape}`).then((img) => {
				setCurrentImage(img.default);
			});
		}
	}, [images?.landscape, setCurrentImage]);

	const update = (selected) => {
		const current = dataTecnology[selected];
		dispatch(updateCurrentTecnology(current));
	};

	return (
		<div className="flex flex-col">
			<div className="flex flex-col space-y-5  w-full">
				<h1 className="text-white self-center md:self-start md:mb-5 md:ml-8">
					03 SPACE LAUNCH 101
				</h1>
				<div className="flex justify-center ">
					<img src={currectImage} className="w-full h-[170px] md:h-[310px]" />
				</div>
			</div>
			<div className="flex justify-center  space-x-3 text-white mt-4 md:mt-8">
				{Object.keys(dataTecnology).map((i, index) => {
					return (
						<button
							className="w-10 h-10 md:w-14 md:h-14 rounded-full"
							key={i}
							onClick={() => update(i)}
						>
							<div
								className={`${
									name === i ? 'bg-white text-slate-800' : 'bg-slate-400'
								} h-full rounded-full pt-2 md:pt-3`}
							>
								<span className="font-semibold md:text-2xl">{index + 1}</span>
							</div>
						</button>
					);
				})}
			</div>
			<div className="flex flex-col items-center space-y-5 mt-5 text-white px-6">
				<div className="flex flex-col items-center">
					<h5 className="text-[15px] md:text-[16px] text-[#D0D6F9] uppercase">
						THE TERMINOLOGY...
					</h5>
					<h5 className="text-[28px] md:text-[40px] uppercase">{name}</h5>
				</div>
				<p className="font-[Barlow] text-base text-center max-w-[458px]">{description}</p>
			</div>
		</div>
	);
};

export default DetailsTecnology;

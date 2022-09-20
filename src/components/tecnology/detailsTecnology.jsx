import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImgUrl } from '../commun/utils';
import { updateCurrentTecnology } from './slices/tecnologySlices';

const DetailsTecnology = () => {
	const [currectImageLandscape, setCurrentImageLandscape] = useState('');
	const [currectImagePortrait, setCurrentImagePortrait] = useState('');
	const dataTecnology = useSelector((state) => state.tecnology.dataTecnology);
	const currentTecnology = useSelector((state) => state.tecnology.currentTecnology);
	const { name, description, images } = currentTecnology;
	const dispatch = useDispatch();

	useEffect(() => {
		if (images?.landscape) {
			const imgLandscape = getImgUrl(`../.${images.landscape}`);
			const imgPortrait = getImgUrl(`../.${images.portrait}`);
			setCurrentImageLandscape(imgLandscape);
			setCurrentImagePortrait(imgPortrait);
		}
	}, [images?.landscape, setCurrentImageLandscape, setCurrentImagePortrait]);

	const update = (selected) => {
		const current = dataTecnology[selected];
		dispatch(updateCurrentTecnology(current));
	};

	return (
		<>
			<div className="hidden lg:flex w-96 justify-center ">
				<h1 className="font-barlowCondensed tracking-[4.725px] text-[28px] text-white self-center md:self-start md:mb-5 md:ml-8 lg:self-center">
					03 SPACE LAUNCH 101
				</h1>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="flex flex-col lg:pt-10">
					<div className="flex flex-col space-y-5 lg:hidden">
						<h1 className="text-white self-center md:self-start md:mb-5 md:ml-8 lg:self-center">
							03 SPACE LAUNCH 101
						</h1>
						<div className="flex justify-center ">
							<img src={currectImageLandscape} className="w-full h-[170px] md:h-[310px]" />
						</div>
					</div>
					<div className="flex flex-row lg:flex-col justify-center items-center lg:w-48 gap-5 text-white mt-4 md:mt-8">
						{Object.keys(dataTecnology).map((i, index) => {
							return (
								<button
									className="w-10 h-10 md:w-14 md:h-14 lg:h-20 lg:w-20 rounded-full"
									key={i}
									onClick={() => update(i)}
								>
									<div
										className={`${
											name === i ? 'bg-white text-slate-800' : 'bg-slate-400'
										} h-full rounded-full pt-2 md:pt-3 lg:pt-6`}
									>
										<span className="font-semibold md:text-2xl lg:text-[32px]">{index + 1}</span>
									</div>
								</button>
							);
						})}
					</div>
				</div>
				<div className="flex flex-col lg:flex-grow items-center lg:items-start space-y-5 mt-5 lg:pt-11 text-white px-6 lg:px-0 lg:min-w-[400px]">
					<div className="flex flex-col items-center lg:items-start">
						<h5 className="font-barlowCondensed tracking-[2.7px] font-normal text-[15px] md:text-[16px] text-[#D0D6F9] uppercase">
							THE TERMINOLOGY...
						</h5>
						<h5 className="font-bellefair text-[28px] md:text-[40px] lg:text-[56px] uppercase">
							{name}
						</h5>
					</div>
					<p className="font-barlow text-base text-center lg:text-lg lg:text-start max-w-[458px]">
						{description}
					</p>
				</div>
				<div className="lg:flex justify-center hidden ">
					<img src={currectImagePortrait} className="w-[515px] h-[527px]" />
				</div>
			</div>
		</>
	);
};

export default DetailsTecnology;

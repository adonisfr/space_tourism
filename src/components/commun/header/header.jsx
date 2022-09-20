import Drawer from './menu/drawer';
import logo from '../../../assets/shared/logo.svg';
import Menu from '../header/menu/menu';
import MenuItem from './menu/menuItem';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMenuActive } from './menu/slices/menuSlice';
import { setOpenDrawer } from './menu/slices/drawerSlice';

const CustomText = ({ number, text }) => {
	return (
		<>
			<span className="mx-2 font-barlowCondensed text-base tracking-[2.7px] font-bold md:hidden lg:inline">
				{number}
			</span>
			<span>{text}</span>
		</>
	);
};

const Header = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		const tmp = location.pathname.replace('/', '');
		const key = tmp !== '' ? tmp : 'home';
		dispatch(setMenuActive(key));
	}, [location]);

	const onClickItemMenu = (state) => {
		dispatch(setOpenDrawer(state));
	};

	return (
		<nav className="fixed flex justify-between items-center pl-5 w-full h-16 md:h-24 pr-5 md:pr-0 lg:h-24 lg:pl-10 lg:top-10">
			<img src={logo} className="w-8 md:w-12" />
			<div className="hidden md:flex md:h-24 bg-[#979797]/20 backdrop-blur lg:w-[60%] xl:w-[55%] xl:pl-16">
				<Menu>
					<MenuItem href="/" text={<CustomText number="00" text="HOME" />} id="home" />
					<MenuItem
						href="/destinations"
						text={<CustomText number="01" text="DESTINATION" />}
						id="destinations"
					/>
					<MenuItem href="/crew" text={<CustomText number="02" text="CREW" />} id="crew" />
					<MenuItem
						href="/tecnology"
						text={<CustomText number="03" text="TECHNOLOGY" />}
						id="tecnology"
					/>
				</Menu>
			</div>
			<div className="invisible lg:visible absolute my-auto left-36  lg:w-[30%] xl:w-[40%]">
				<hr className=" border-t-1 border-gray-500 " />
			</div>
			<div className="flex md:hidden">
				<Drawer>
					<Menu inline={false}>
						<MenuItem
							href="/"
							text={<CustomText number="00" text="HOME" />}
							id="home"
							className="pl-8"
							onClick={() => onClickItemMenu(false)}
						/>
						<MenuItem
							href="/destinations"
							text={<CustomText number="01" text="DESTINATION" />}
							id="destinations"
							className="pl-8"
							onClick={() => onClickItemMenu(false)}
						/>
						<MenuItem
							href="/crew"
							text={<CustomText number="02" text="CREW" />}
							id="crew"
							className="pl-8"
							onClick={() => onClickItemMenu(false)}
						/>
						<MenuItem
							href="/tecnology"
							text={<CustomText number="03" text="TECHNOLOGY" />}
							id="tecnology"
							className="pl-8"
							onClick={() => onClickItemMenu(false)}
						/>
					</Menu>
				</Drawer>
			</div>
		</nav>
	);
};

export default Header;

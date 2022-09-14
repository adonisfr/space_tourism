import Drawer from './menu/drawer';
import logo from '../../../assets/shared/logo.svg';
import Menu from '../header/menu/menu';
import MenuItem from './menu/menuItem';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMenuActive } from './menu/slices/menuSlice';

const CustomText = ({ number, text }) => {
	return (
		<>
			<span className="mx-2 font-bold">{number}</span>
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

	return (
		<nav className="fixed flex justify-between p-3 w-full ">
			<img src={logo} className="w-10" />
			<div className="hidden lg:flex">
				<Menu>
					<MenuItem href="/" text="HOME" id="home" />
					<MenuItem href="/destinations" text="DESTINATION" id="destination" />
					<MenuItem href="/crew" text="CREW" id="crew" />
					<MenuItem href="/tecnology" text="TECHNOLOGY" id="tecnology" />
				</Menu>
			</div>
			<div className="flex lg:hidden">
				<Drawer>
					<Menu inline={false}>
						<MenuItem
							href="/"
							text={<CustomText number="00" text="HOME" />}
							id="home"
							className="pl-8"
						/>
						<MenuItem
							href="/destinations"
							text={<CustomText number="01" text="DESTINATION" />}
							id="destinations"
							className="pl-8"
						/>
						<MenuItem
							href="/crew"
							text={<CustomText number="02" text="CREW" />}
							id="crew"
							className="pl-8"
						/>
						<MenuItem
							href="/tecnology"
							text={<CustomText number="03" text="TECHNOLOGY" />}
							id="tecnology"
							className="pl-8"
						/>
					</Menu>
				</Drawer>
			</div>
		</nav>
	);
};

export default Header;

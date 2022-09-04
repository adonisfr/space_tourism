import Drawer from './menu/drawer';
import logo from '../../assets/shared/logo.svg';

const Header = () => {
	return (
		<header className="pt-2 px-2 fixed top-0 w-full">
			<nav className="flex justify-between p-3 mx-auto">
				<div className="w-10">
					<img src={logo} />
				</div>
				<div className="hidden space-x-8 lg:flex">
					<a href="#">Menu 1</a>
					<a href="#">Menu 2</a>
					<a href="#">Menu 3</a>
					<a href="#">Menu 4</a>
				</div>
				<div className="flex lg:hidden">
					<Drawer />
				</div>
			</nav>
		</header>
	);
};

export default Header;

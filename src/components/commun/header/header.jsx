import Drawer from './menu/drawer';
import logo from '../../../assets/shared/logo.svg';
import Menu from '../header/menu/menu';

const Header = () => {
	return (
		<header className="fixed top-0 w-full">
			<nav className="flex justify-between p-3 mx-auto">
				<div className="w-10">
					<img src={logo} />
				</div>
				<div className="hidden space-x-8 lg:flex">
					<Menu />
				</div>
				<div className="flex lg:hidden">
					<Drawer />
				</div>
			</nav>
		</header>
	);
};

export default Header;

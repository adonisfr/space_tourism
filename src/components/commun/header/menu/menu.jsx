import propTypes from 'prop-types';
import MenuItem from './menuItem';

const Menu = ({ horizontal }) => {
	return (
		<div className={horizontal ? 'flex' : 'flex flex-col gap-5 font-[Barlow Condensed]'}>
			<MenuItem href="/">
				<span className="mx-2 font-bold">00</span>
				<span>HOME</span>
			</MenuItem>
			<MenuItem href="/destinations">
				<span className="mx-2 font-bold">00</span>
				<span>DESTINATION</span>
			</MenuItem>
			<MenuItem href="/crew">
				<span className="mx-2 font-bold">00</span>
				<span>CREW</span>
			</MenuItem>
			<MenuItem href="/tecnology">
				<span className="mx-2 font-bold">00</span>
				<span>TECHNOLOGY</span>
			</MenuItem>
		</div>
	);
};

Menu.propTypes = {
	horizontal: propTypes.bool
};

Menu.defaultProps = {
	horizontal: true
};

export default Menu;

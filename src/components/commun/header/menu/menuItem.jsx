import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MenuItem = ({ href, text, className, id }) => {
	const active = useSelector((state) => state.menu.active);

	return (
		<li
			className={`w-full flex items-center font-barlowCondensed  tracking-[2.7px] ${
				active === id
					? 'h-full  border-r-4  md:border-y-4 md:border-x-0 md:border-t-transparent border-r-white md:border-b-white'
					: ''
			}`}
		>
			<Link to={href} className="text-white">
				<div className={`w-[254px] md:w-auto ${className}`}>{text}</div>
			</Link>
		</li>
	);
};

MenuItem.propTypes = {
	href: propTypes.string,
	text: propTypes.oneOfType([propTypes.string, propTypes.node]),
	className: propTypes.string,
	id: propTypes.string.isRequired
};

MenuItem.defaultProps = {
	href: '#',
	text: '',
	className: ''
};

export default MenuItem;

import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MenuItem = ({ href, text, className, id }) => {
	const active = useSelector((state) => state.menu.active);

	return (
		<li className={`w-full ${active === id ? 'border-r-4 border-r-white' : ''}`}>
			<Link to={href} className="text-white">
				<div className={className}>{text}</div>
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

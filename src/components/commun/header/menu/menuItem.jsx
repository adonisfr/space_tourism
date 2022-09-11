import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({ href, children }) => {
	return (
		<Link to={href} className="text-white">
			{children}
		</Link>
	);
};

MenuItem.propTypes = {
	href: propTypes.string,
	children: propTypes.oneOfType([propTypes.node, propTypes.string])
};

MenuItem.defaultProps = {
	href: '#'
};

export default MenuItem;

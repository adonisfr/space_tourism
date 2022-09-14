import propTypes from 'prop-types';

const Menu = ({ inline, children }) => {
	return (
		<ul className={inline ? 'inline-flex' : 'font-[Barlow Condensed] space-y-5 '}>{children}</ul>
	);
};

Menu.propTypes = {
	inline: propTypes.bool,
	children: propTypes.node
};

Menu.defaultProps = {
	horizontal: true
};

export default Menu;

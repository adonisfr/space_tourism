import propTypes from 'prop-types';

const Menu = ({ inline, children }) => {
	return (
		<ul
			className={
				inline
					? 'inline-flex space-x-4 lg:space-x-8 items-center px-10 '
					: 'font-[Barlow Condensed] space-y-5 '
			}
		>
			{children}
		</ul>
	);
};

Menu.propTypes = {
	inline: propTypes.bool,
	children: propTypes.node
};

Menu.defaultProps = {
	inline: true
};

export default Menu;

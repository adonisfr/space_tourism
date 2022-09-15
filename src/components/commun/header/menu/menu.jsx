import propTypes from 'prop-types';

const Menu = ({ inline, children }) => {
	return (
		<ul
			className={
				inline
					? 'inline-flex space-x-4 items-center px-10 bg-[#979797]/20'
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

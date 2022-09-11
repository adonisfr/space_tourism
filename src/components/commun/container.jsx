import propTypes from 'prop-types';

const Container = ({ background, className, children }) => {
	return (
		<div className={`bg-cover w-full h-screen`} style={{ backgroundImage: `url(${background})` }}>
			<div className="pt-28">
				<div className={className}>{children}</div>
			</div>
		</div>
	);
};

Container.propTypes = {
	background: propTypes.string,
	className: propTypes.string,
	children: propTypes.oneOfType([propTypes.string, propTypes.node])
};

Container.defaultProps = {
	background: '',
	className: '',
	node: ''
};

export default Container;

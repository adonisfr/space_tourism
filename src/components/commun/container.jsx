import propTypes from 'prop-types';
// style={{ backgroundImage: `url(${background})` }}
const Container = ({ classContainer, classBody, children }) => {
	return (
		<div className={`bg-cover w-full h-screen ${classContainer}`}>
			<div className="pt-28">
				<div className={classBody}>{children}</div>
			</div>
		</div>
	);
};

Container.propTypes = {
	classContainer: propTypes.string,
	classBody: propTypes.string,
	children: propTypes.oneOfType([propTypes.string, propTypes.node])
};

Container.defaultProps = {
	classContainer: '',
	classBody: '',
	node: ''
};

export default Container;

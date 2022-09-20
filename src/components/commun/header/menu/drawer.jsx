import propTypes from 'prop-types';
import hamburger from '../../../../assets/shared/icon-hamburger.svg';
import close from '../../../../assets/shared/icon-close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenDrawer } from './slices/drawerSlice';

const Drawer = ({ children }) => {
	const open = useSelector((state) => state.drawer.open);
	const dispatch = useDispatch();

	const toggle = (state) => {
		dispatch(setOpenDrawer(state));
	};
	return (
		<>
			<div className="mt-2" onClick={() => toggle(!open)}>
				<img src={hamburger} className="cursor-pointer" />
			</div>
			<div
				tabIndex="0"
				className={`absolute flex w-full justify-end right-0 top-0 h-screen  bg-black/10 ${
					open ? '' : 'hidden'
				}`}
				onClick={() => toggle(!open)}
			>
				<div
					tabIndex="1"
					className="w-[254px]  h-screen bg-white"
					style={{ background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(81.5485px)' }}
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="flex flex-row-reverse mt-8 p-4 " onClick={() => toggle(!open)}>
						<img src={close} className="cursor-pointer" />
					</div>
					<div className="pt-4">{children}</div>
				</div>
			</div>
		</>
	);
};

Drawer.propTypes = {
	children: propTypes.oneOfType([propTypes.string, propTypes.node])
};

Drawer.defaultProps = {
	children: ''
};

export default Drawer;

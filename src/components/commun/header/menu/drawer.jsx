import propTypes from 'prop-types';
import { useState } from 'react';
import hamburger from '../../../../assets/shared/icon-hamburger.svg';
import close from '../../../../assets/shared/icon-close.svg';

const Drawer = ({ children }) => {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<div className="mt-2" onClick={() => setToggle(!toggle)}>
				<img src={hamburger} className="cursor-pointer" />
			</div>
			<div
				tabIndex="0"
				className={`absolute flex w-full justify-end right-0 top-0 h-screen  bg-black/10 ${
					toggle ? '' : 'hidden'
				}`}
				onClick={() => setToggle(!toggle)}
			>
				<div
					tabIndex="1"
					className="w-[254px]  h-screen bg-white"
					style={{ background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(81.5485px)' }}
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="flex flex-row-reverse mt-8 p-4 " onClick={() => setToggle(!toggle)}>
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

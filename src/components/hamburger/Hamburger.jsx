import './hamburger.scss';

function Hamburger({ show, func, theme }) {
	return (
		<div
			onClick={() => func(!show)}
			className={`hamburger ${theme === 'dark' && 'hamburger-white'}`}>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default Hamburger;

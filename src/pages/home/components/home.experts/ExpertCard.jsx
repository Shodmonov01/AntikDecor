import { useState } from 'react';

function ExpertCard({ data }) {
	const [openAccordion, setOpenAccordion] = useState(false);
	return (
		<div className='experts__card'>
			<img src={data.image} alt='' />
			<div className='experts__card_content'>
				<h3>{data.name}</h3>
				<p className={`${openAccordion && 'show-body'}`}>{data.about}</p>
				<span onClick={() => setOpenAccordion(true)}>Читать больше</span>
			</div>
		</div>
	);
}

export default ExpertCard;

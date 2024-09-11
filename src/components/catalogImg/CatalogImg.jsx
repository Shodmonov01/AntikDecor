import './catalog.img.scss';

function CatalogImg({ el }) {
	return (
		<figure>
			<img src={el.img} alt={`${el.title}`} />
			<figcaption dangerouslySetInnerHTML={{ __html: el.title }} />
		</figure>
	);
}

export default CatalogImg;

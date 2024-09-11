import { useEffect } from 'react';
import './add.to.cart.btn.scss';

function AddToCartBtn({ product, setDisabledBtn, disabledBtn, func }) {
	useEffect(() => {
		if (localStorage.getItem('cartData')) {
			const data = JSON.parse(localStorage.getItem('cartData'));
			data.map((item) => {
				if (item.id === +product.id) {
					setDisabledBtn(true);
				}
				return '';
			});
		}
	}, []);

	return (
		<button
			disabled={disabledBtn}
			onClick={func}
			className={`add-to-cart-btn ${disabledBtn && 'disabled-btn'}}`}>
			{disabledBtn ? 'Добавлено' : 'В корзину'}
		</button>
	);
}

export default AddToCartBtn;

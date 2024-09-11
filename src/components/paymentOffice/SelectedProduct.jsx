function SelectedProduct({ name, price, discount }) {
	return (
		<tr>
			<td>{name}</td>
			<td>1</td>
			<td>{price}</td>
			<td>{discount} %</td>
			<td>{price * (discount / 100 + 1)}</td>
		</tr>
	);
}

export default SelectedProduct;

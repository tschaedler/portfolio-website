import List from "./List";
import ListItem from "./ListItem";

const ProductGrid = ({ products }) => {
	return (
		<List>
			{products.map((product) => (
				<ListItem key={product.id} product={product} />
			))}
		</List>
	);
};

export default ProductGrid;

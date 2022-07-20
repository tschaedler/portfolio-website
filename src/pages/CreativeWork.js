import ProductGrid from "./../components/ProductGrid";
import { getProducts } from "./../utils/creativeProducts";

const CreativeWork = () => {
	const creativeProducts = getProducts();
	return (
		<div className="pl-20 xl:pl-0">
			<div className="m-10">
				<h1 className="text-[#e6f1ff] text-7xl mb-5">Kurzeinblick</h1>
				<code className="text-blue_vs">
					Hier findest du einen Auszug über meine erstellten Designs
					sowie 3d Modelle.
				</code>
			</div>
			<ProductGrid products={creativeProducts} />
		</div>
	);
};

export default CreativeWork;

import React from "react";

const ListItem = ({ product }) => {
	return (
		<a
			href={product.url}
			target="_blank"
			rel="noopener noreferrer"
			className="bg-slate-100 rounded-xl dark:bg-sky-900/30 drop-shadow-md hover:bg-sky-900 hover:cursor-pointer ease-in duration-500"
		>
			<img
				src={product.image}
				alt=""
				className="bg-slate-100 rounded-t-xl"
			/>
			<div className="p-3 text-[#a2aabc]">
				<p>
					<code className="text-yellow_vs">{product.title}</code>
				</p>
				<p>
					<code className="text-blue_vs">{product.genre}</code>
				</p>
				{product.description}
			</div>
		</a>
	);
};

export default ListItem;

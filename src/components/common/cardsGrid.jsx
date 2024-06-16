// Assuming CardComponent.js and CardsGrid.js are in the same directory
import React from "react";
import CARDS from "../../data/cardData"; // Import the card data

const CardComponent = ({ imageUrl, title, description, tags }) => {
	return (
		<div className="max-w-sm rounded-lg overflow-hidden m-4 bg-slate-50 hover:scale-110  transform transition duration-300   ">
			{/* if image required then this  */}
			{/* <img className="w-full" src={imageUrl} alt={title} /> */}
			<div className="px-8 py-6 ">
				<div className="font-bold text-xl mb-2 text-slate-600">
					{title}
				</div>
				<p className="text-gray-500 text-base">{description}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				{tags.map((tag, index) => (
					<span
						key={index}
						className="inline-block bg-emerald-200 rounded-full px-3 py-1 text-sm font-semibold text-emerald-500 mr-2 mb-2"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};

const CardsGrid = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
				{CARDS.map((card) => (
					<CardComponent key={card.id} {...card} />
				))}
			</div>
		</>
	);
};

export default CardsGrid;

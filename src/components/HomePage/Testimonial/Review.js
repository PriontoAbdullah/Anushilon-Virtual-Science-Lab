import React from 'react';

const Review = (props) => {
	const { quote, name, location, img } = props.reviews;

	return (
		<div className="bg-white w-80 sm:w-90 mx-auto shadow-lg rounded-xl pl-5 pr-3 py-8 mb-5">
			<p className="text-gray-800 text-lg font-body tracking-wide ">
				<span className="font-bold text-indigo-500 text-lg pr-1">“</span>
				{quote}
				<span className="font-bold text-indigo-500 text-lg pl-1">”</span>
			</p>
			{/* Review Footer */}
			<div className="flex items-center mt-5">
				<div className="block relative">
					<img alt="profile" src={img} className="mx-auto object-cover rounded-full h-16 w-16" />
				</div>
				<div className="flex flex-col ml-2 justify-between font-body">
					<span className="font-semibold text-brand-900 text-lg tracking-wide">{name}</span>
					<span className="text-gray-700 text-base flex items-center tracking-wider">{location}</span>
				</div>
			</div>
		</div>
	);
};

export default Review;

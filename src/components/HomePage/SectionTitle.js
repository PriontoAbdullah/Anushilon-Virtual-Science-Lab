import React from 'react';

function SectionTitle({ title, description, space = true }) {
	return (
		<div className={`section-title text-center md:w-3/4 mx-auto 2xl:w-2/4 ${space ? 'mb-12' : null}`}>
			<h2 className="font-display text-3xl font-bold tracking-normal text-brand-900 leading-relaxed md:text-4xl md:leading-normal">
				{title}
			</h2>
			<p className=" text-gray-700 font-body text-xl md:text-2xl mt-3 sm:mt-4">{description}</p>
			<div class="flex mt-5 justify-center">
				<div class="w-16 h-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 inline-flex" />
			</div>
		</div>
	);
}

export default SectionTitle;

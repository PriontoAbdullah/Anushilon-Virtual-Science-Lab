import React from 'react';

function SectionTitle({ title, description, space = 'mb-10' }) {
	return (
		<div className={`section-title text-center w-10/12 md:w-3/4 mx-auto 2xl:w-2/4 ${space}`}>
			<h2 className="font-display text-2xl font-bold tracking-wider text-brand-900 leading-relaxed md:text-3xl md:leading-normal">
				{title}
			</h2>
			<p className="max-w-3xl text-center mx-auto text-gray-700 font-body text-base md:text-lg mt-3 sm:mt-4">{description}</p>
			<div className="flex mt-5 justify-center">
				<div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 inline-flex" />
			</div>
		</div>
	);
}

export default SectionTitle;

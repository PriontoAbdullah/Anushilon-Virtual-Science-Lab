import React from 'react';
import { Link } from 'react-router-dom';

const LabIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6 mr-1"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
			/>
		</svg>
	);
};

const SingleSimulation = ({item}) => {
	return (
		<>
			<Link to="/dashboard" key={item.id}>
				<div className="grid sm:grid-cols-3 p-5 hover:bg-gray-100 shadow-3xl hover:shadow-xl cursor-pointer rounded-lg">
					<div className="relative w-full h-32 max-h-full rounded shadow sm:h-auto">
						<img
							className="absolute object-cover w-full h-full rounded"
							src={item.image.default}
							alt="simulation"
						/>
					</div>
					<div className="flex flex-col mt-3 sm:mt-0 sm:px-5 sm:py-3 sm:col-span-2">
						<p className="flex font-body text-brand-900 text-lg font-semibold ">
							<LabIcon /> {item.title}
						</p>
						<p className="mt-2 font-body text-lg font-medium tracking-wide text-gray-800">{item.name}</p>
					</div>
				</div>
			</Link>
		</>
	);
};

export default SingleSimulation;

import React from 'react';
import { Line } from 'react-chartjs-2';

const formatter = (number) => (number > 999999 ? (number / 1000000).toFixed(1) + 'M' : number);

const buildData = ({ chartData }) => ({
	labels: chartData.labels,
	datasets: [
		{
			label: ' মিটার ব্রিজ ব্যবহার করে কোন তারের আপেক্ষিক রোধ নির্ণয়।',
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
			borderColor: 'rgba(255, 255, 255, 1)',
			pointBackgroundColor: 'rgba(255, 255, 255, 1)',
			data: chartData.data
		}
	]
});

const options = {
	legend: {
		display: false
	},
	scales: {
		yAxes: [
			{
				ticks: {
					fontColor: 'rgba(255, 255, 255, 1)'
				},
				gridLines: {
					display: false
				}
			}
		],
		xAxes: [
			{
				ticks: {
					fontColor: 'rgba(255, 255, 255, 1)'
				},
				gridLines: {
					color: 'rgba(255, 255, 255, .2)',
					borderDash: [ 5, 5 ],
					zeroLineColor: 'rgba(255, 255, 255, .2)',
					zeroLineBorderDash: [ 5, 5 ]
				}
			}
		]
	},
	layout: {
		padding: {
			right: 10
		}
	}
};

const numberToFix = (number, fix) => (number || 0).toFixed(fix);

const StockChart = ({ info }) => {
	const data = buildData(info);

	return (
		<div>
			<div className="rounded shadow-xl overflow-hidden w-screen md:flex" style={{ maxWidth: '1024px' }}>
				<div className="flex w-screen px-5 pb-4 pt-8 bg-dark-brand-900 text-white items-center font-body text-base">
					<Line data={data} options={options} />
				</div>
				<div className="flex w-full p-6 bg-gray-100 text-gray-700 items-center">
					<div className="w-full font-body">
						<button
							className="close-button -mt-10"
							type="button"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-circle-x"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<circle cx="12" cy="12" r="9" />
								<path d="M10 10l4 4m0 -4l-4 4" />
							</svg>
						</button>

						<h3 className="text-lg font-semibold leading-tight text-gray-800">{info.stockFullName}</h3>
						<h6 className="text-base font-medium leading-loose mb-2">
							<span>{info.stockShortName}</span>
						</h6>
						<div className="flex w-full items-end mb-6">
							<span className="block leading-none text-3xl text-gray-800">
								{numberToFix(info.price.current, 3)} Ω
							</span>
							<span className="block leading-5 text-sm ml-4 text-green-500">
								{`${info.price.high - info.price.low < 0 ? '▼' : '▲'} ${(info.price.high -
									info.price.low).toFixed(3)} (${(info.price.high / info.price.low * 100 -
									100).toFixed(3)}%)`}
							</span>
						</div>
						<div className="flex w-full text-xs leading-loose">
							<div className="flex w-5/12">
								<div className="flex-1 pr-3 text-left font-semibold">তারের রোধ, p</div>
								<div className="flex-1 px-3 text-right">{info.price.open.toFixed(3)} Ω</div>
							</div>
							<div className="flex w-7/12">
								<div className="flex-1 px-3 text-left font-semibold">নির্দিষ্ট রোধ, X'</div>
								<div className="flex-1 pl-3 text-right">{formatter(info.price.cap)} Ω</div>
							</div>
						</div>
						<div className="flex w-full text-xs leading-loose">
							<div className="flex w-5/12">
								<div className="flex-1 pr-3 text-left font-semibold">তারের দৈর্ঘ্য, L</div>
								<div className="px-3 text-right">{info.price.high.toFixed(3)} cm</div>
							</div>
							<div className="flex w-7/12">
								<div className="flex-1 px-3 text-left font-semibold">তারের ব্যাসার্ধ, r</div>
								<div className="pl-3 text-right">{info.price.ratio.toFixed(2)} mm</div>
							</div>
						</div>
						<div className="flex w-full text-xs leading-loose">
							<div className="flex w-5/12">
								<div className="flex-1 pr-3 text-left font-semibold">গড় রোধ, X</div>
								<div className="px-3 text-right">{info.price.low.toFixed(3)} Ω</div>
							</div>
							<div className="flex w-7/12">
								<div className="flex-1 px-3 text-left font-semibold">
									স্ক্রু গেজের সর্বনিম্ন গণনা (LC)
								</div>
								<div className="pl-3 text-right">{`${info.price.dividend}`} mm</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StockChart;

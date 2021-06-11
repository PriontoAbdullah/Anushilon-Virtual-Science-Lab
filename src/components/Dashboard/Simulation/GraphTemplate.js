import React from 'react';
import StockChart from '../Charts/StockChart';

const data = {
	stockFullName: 'প্রদত্ত রোধ তারের অজানা রোধ, X = 2.32 Ω',
	stockShortName: 'প্রদত্ত রোধ তারের নির্দিষ্ট রোধ (রোধ ক্ষমতা), ρ = 4.69 Ω m',
	price: {
		current: 2.32,
		open: 2.23,
		low: 2.215,
		high: 2.325,
		cap: 93765011,
		ratio: 20.1,
		dividend: 1.67
	},
	chartData: {
		labels: [
			'পর্যবেক্ষণ ১',
			'',
			'',
			'পর্যবেক্ষণ ২',
			'',
			'',
			'পর্যবেক্ষণ ৩',
			'',
			'',
			'পর্যবেক্ষণ ৪',
			'',
			'',
			'পর্যবেক্ষণ ৫'
		],
		data: [ 2.23, 2.215, 2.22, 2.25, 2.245, 2.27, 2.28, 2.29, 2.3, 2.29, 2.325, 2.325, 2.32 ]
	}
};

const GraphTemplate = () => {
	return (
		<div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
			<StockChart info={data} />
		</div>
	);
};

export default GraphTemplate;

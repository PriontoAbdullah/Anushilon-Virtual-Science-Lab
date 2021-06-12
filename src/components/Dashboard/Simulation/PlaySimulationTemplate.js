import React from 'react';
import Iframe from 'react-iframe';
import useWindowDimensions from '../../../utils/useWindowDimensions';

const PlaySimulationTemplate = () => {
	const { width } = useWindowDimensions();

	let getHeight = width > 1024 ? 450 : 470;

	return (
		<div className="px-4 py-3">
			<Iframe
				url="http://127.0.0.1:5500/ANUSHILON/simulations/html5/phy121.html"
				width="100%"
				height={getHeight}
				className="mx-0 sm:mx-auto"
				display="initial"
				position="relative"
			/>
		</div>
	);
};

export default PlaySimulationTemplate;

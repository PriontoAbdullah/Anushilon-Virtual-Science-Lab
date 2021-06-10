import React from 'react';

// For getting window size & set slider number to show

function getWindowDimensions() {
	const { innerWidth: width } = window;
	return {
		width
	};
}

export default function useWindowDimensions() {
	const [ windowDimensions, setWindowDimensions ] = React.useState(getWindowDimensions());

	React.useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}

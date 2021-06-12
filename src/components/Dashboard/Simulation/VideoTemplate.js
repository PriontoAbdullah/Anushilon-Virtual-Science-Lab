import React from 'react';
import YouTube from 'react-youtube';
import useWindowDimensions from '../../../utils/useWindowDimensions';

const VideoTemplate = (props) => {
	const { width } = useWindowDimensions();

	let getWidth =
		width > 1280
			? 737
			: width > 1024
				? 640
				: width > 680 ? 600 : width > 450 ? 390 : width > 430 ? 360 : width > 400 ? 330 : width > 370 ? 280 : 260;

	let getHeight =
		width > 1280
			? 415
			: width > 1024
				? 360
				: width > 680 ? 338 : width > 450 ? 220 : width > 430 ? 203 : width > 400 ? 168 : width > 370 ? 158 : 146;

	const opts = {
		height: getHeight,
		width: getWidth,
		playerVars: {
			autoplay: 0
		}
	};

	const onReady = (event) => {
		event.target.pauseVideo();
	};

	return (
		<div className="px-4 py-6">
			<YouTube
				videoId={props.videoId}
				opts={opts}
				onReady={onReady}
				className="mx-auto shadow-3xl cursor-pointer"
			/>
		</div>
	);
};

export default VideoTemplate;

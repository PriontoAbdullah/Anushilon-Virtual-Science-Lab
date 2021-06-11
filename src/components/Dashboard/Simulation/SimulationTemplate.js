import { faBook, faDiceD6, faFlask, faPlayCircle, faTasks, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ObservationTemplate from './ObservationTemplate';
import ProcedureTemplate from './ProcedureTemplate';
import TheoryTemplate from './TheoryTemplate';
import VideoTemplate from './VideoTemplate';

const SimulationTemplate = () => {
	const [ openTab, setOpenTab ] = React.useState(1);

	const videoSimulationId = {
		videoId: '0fAqXe1zSUs',
		animationId: 'LA8hYjygyHk'
	};

	return (
		<div>
			<div className="flex flex-wrap">
				<div className="w-full">
					{/* For mobile view */}
					<nav className="block md:hidden rounded font-body w-full mb-3">
						<ol className="list-reset flex flex-wrap tracking-wide text-lg">
							<li>
								<NavLink exact to="/" className="font-medium text-brand-900">
									সিমুলেশন
								</NavLink>
							</li>
							<li>
								<span className="mx-2 font-bold">&gt;</span>
							</li>
							<li>
								<NavLink exact to="/" className="font-medium text-brand-900">
									পদার্থ বিজ্ঞান
								</NavLink>
							</li>
							<li>
								<span className="mx-2 font-bold">&gt;</span>
							</li>
							<li>
								<span className="text-base">
									মিটার ব্রিজ ব্যবহার করে কোন তারের আপেক্ষিক রোধ নির্ণয়।
								</span>
							</li>
						</ol>
					</nav>
					<ul className="flex mb-0 list-none flex-wrap pb-4 flex-row" role="tablist">
						<li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
							<a
								className={` simulation-template  
									${openTab === 1 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(1);
								}}
								data-toggle="tab"
								href="#link1"
								role="tablist"
							>
								<FontAwesomeIcon icon={faBook} className="mr-1" /> তত্ত্ব
							</a>
						</li>
						<li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
							<a
								className={` simulation-template  
                                ${openTab === 2 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(2);
								}}
								data-toggle="tab"
								href="#link2"
								role="tablist"
							>
								<FontAwesomeIcon icon={faTasks} className="mr-1" /> কার্যপ্রণালী
							</a>
						</li>
						<li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
							<a
								className={`simulation-template  
                                ${openTab === 3 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(3);
								}}
								data-toggle="tab"
								href="#link3"
								role="tablist"
							>
								<FontAwesomeIcon icon={faVideo} className="mr-1" /> ভিডিও
							</a>
						</li>
						<li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
							<a
								className={`simulation-template  
									${openTab === 4 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(4);
								}}
								data-toggle="tab"
								href="#link4"
								role="tablist"
							>
								<FontAwesomeIcon icon={faPlayCircle} className="mr-1" /> অ্যানিমেশন
							</a>
						</li>
						<li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
							<a
								className={`simulation-template  
                                ${openTab === 5 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(5);
								}}
								data-toggle="tab"
								href="#link5"
								role="tablist"
							>
								<FontAwesomeIcon icon={faDiceD6} className="mr-1" /> সিমুলেটর
							</a>
						</li>
						<li className="mb-2 mr-2 last:mr-0 flex-auto text-center">
							<a
								className={`simulation-template  
                                ${openTab === 6 ? 'text-white bg-brand-900' : 'text-brand-900 bg-white'}`}
								onClick={(e) => {
									e.preventDefault();
									setOpenTab(6);
								}}
								data-toggle="tab"
								href="#link6"
								role="tablist"
							>
								<FontAwesomeIcon icon={faFlask} className="mr-1" /> পর্যবেক্ষণ
							</a>
						</li>
					</ul>
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded">
						<div className="px-4 py-5 flex-auto">
							<div className="tab-content tab-space">
								<div className={`mb-5 ${openTab === 1 ? 'block' : 'hidden'}`} id="link1">
									<TheoryTemplate />
								</div>
								<div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
									<ProcedureTemplate />
								</div>
								<div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
									<VideoTemplate videoId={videoSimulationId.videoId} />
								</div>
								<div className={openTab === 4 ? 'block' : 'hidden'} id="link4">
									<VideoTemplate videoId={videoSimulationId.animationId} />
								</div>
								<div className={openTab === 5 ? 'block' : 'hidden'} id="link5">
									<p>
										Efficiently unleash cross-media information without cross-media value. Quickly
										maximize timely deliverables for real-time schemas.
										<br />
										<br /> Dramatically maintain clicks-and-mortar solutions without functional
										solutions.
									</p>
								</div>
								<div className={openTab === 6 ? 'block' : 'hidden'} id="link6">
									<ObservationTemplate />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SimulationTemplate;

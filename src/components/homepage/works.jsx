import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./cft.png"
								alt="codesfortomorrow"
								className="work-image"
							/>
							<div className="work-title">Codes For Tomorrow</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2023 Oct - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

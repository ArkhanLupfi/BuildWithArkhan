import React from "react";
import Fade from "react-reveal/Fade";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Breadcrumb from "elements/Breadcrumb";

export default function PageDetailTitle({ breadcrumb }) {
	const page = useSelector((state) => state.page);
	const { id } = useParams();

	const data = page?.[id] || {};

	return (
		<section className="container spacing-sm" style={{ zIndex: 10000 }}>
			<Fade bottom>
				<div className="row align-items-center">
					<div className="col-12 col-lg">
						<Breadcrumb data={breadcrumb} />
					</div>
					<div className="col-12 col-lg-auto text-center">
						<h1 className="h2">{data.title}</h1>
						<span className="text-gray-400">
							{data.city}, {data.country}
						</span>
					</div>
					<div className="col-12 col-lg"></div>
				</div>
			</Fade>
		</section>
	);
}

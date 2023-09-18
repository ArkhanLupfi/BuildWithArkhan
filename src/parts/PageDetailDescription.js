import React from "react";

import ReactHtmlParser from "react-html-parser";
export default function PageDetailDescription({ data }) {
	return (
		<main>
			<h4>About the place</h4>
			<div className="descrip" style={{ fontSize: 16 }}>
				{ReactHtmlParser(data.description)}
			</div>
			<div className="row" style={{ marginTop: 30 }}>
				{data.featureId.length === 0
					? "Tidak Ada Feature"
					: data.featureId.map((feature, index) => {
							return (
								<div
									key={`feature-${index}`}
									className="col-4 col-lg-3"
									style={{ marginBottom: 20 }}
								>
									<img
										width="38"
										className="d-block mb-2"
										src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
										alt={feature.name}
									/>{" "}
									<span>{feature.qty}</span>{" "}
									<span className="text-gray-600 ">
										{feature.name}
									</span>
								</div>
							);
					  })}
			</div>
		</main>
	);
}

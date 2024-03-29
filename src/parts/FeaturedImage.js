import React from "react";
import Fade from "react-reveal/Fade";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FeaturedImage() {
	const page = useSelector((state) => state.page);
	const { id } = useParams();

	const data = page?.[id]?.imageId || [];

	return (
		<section className="container">
			<div className="container-grid sm">
				{data.map((item, index) => {
					return (
						<div
							key={`FeaturedImage-${index}`}
							className={`item ${
								index > 0 ? "column-5" : "column-7"
							} ${index > 0 ? "row-1" : "row-2"}`}
						>
							<Fade bottom delay={300 * index}>
								<div className="card h-100">
									<figure className="img-wrapper">
										<img
											className="img-cover"
											src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
											alt={item._id}
										/>
									</figure>
								</div>
							</Fade>
						</div>
					);
				})}
			</div>
		</section>
	);
}

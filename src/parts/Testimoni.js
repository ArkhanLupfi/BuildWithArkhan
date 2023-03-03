import React from "react";

import TestimonyAccent from "assets/images/testimonials-frame.png";
import Star from "elements/Star";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Testimony({ data }) {
	return (
		<Fade bottom>
			<section className="container">
				<div className="row align-items-center">
					<div
						className="col-auto"
						style={{ marginRight: 60, marginLeft: 70 }}
					>
						<div
							className="testimonial-hero"
							style={{ margin: `30px 0 0 30px` }}
						>
							<img
								className="position-absolute"
								src={data.imageUrl}
								alt="Testimonial"
								style={{ zIndex: 1 }}
							/>
							<img
								className="position-absolute"
								src={TestimonyAccent}
								alt="Testimonial"
								style={{ margin: `-30px 0 0 -30px` }}
							/>
						</div>
					</div>
					<div className="col-5">
						<h4 style={{ marginBottom: 40 }}>{data.name}</h4>
						<Star
							value={data.rate}
							width={35}
							height={35}
							spacing={4}
						/>
						<h5 className="h4 font-weight-light line-height-1 my-3">
							{data.content}
						</h5>
						<span className="text-gray-500">
							{data.familyName}, {data.familyOccupation}
						</span>

						<div>
							<Button
								className="btn"
								style={{ marginTop: 40 }}
								hasShadow
								isPrimary
								type="link"
								href={`/testimonial/${data._id}`}
							>
								Read Their Story
							</Button>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}

import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";

import Button from "elements/Button";

import formatNumber from "utils/formatNumber";

export default function Hero(props) {
	function showMostPicked() {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: "smooth",
		});
	}

	return (
		<Fade bottom>
			<section className="container">
				<div className="row align-items-center">
					<div className="col-auto pr-5" style={{ width: 530 }}>
						<h1
							className="font-weight-bold line-heigh-1 mb-3"
							style={{ fontSize: 40 }}
						>
							Forget Busy Work, <br />
							Start Next Vacation
						</h1>
						<p
							className="mb-4 font-weight-light text-gray-600 w-75"
							style={{ lineHeight: "170%", fontSize: 14 }}
						>
							We provide what you need to enjoy your holiday with
							family. Time to make another memorable moments.
						</p>
						<Button
							className="btn px-5"
							hasShadow
							isPrimary
							onClick={showMostPicked}
						>
							Show Me Now
						</Button>

						<div
							className="row"
							style={{ marginTop: 50, marginBottom: 30 }}
						>
							<div
								className="col-auto text-center"
								style={{ marginRight: 20 }}
							>
								<img
									width="36"
									height="36"
									src={`${process.env.PUBLIC_URL}/images/icon-travel.png`}
									alt={`${props.data.travelers} Travelers`}
								/>
								<h6 className="mt-3">
									{formatNumber(props.data.travelers)}{" "}
									<span className="text-gray-500 font-weight-light">
										Travelers
									</span>
								</h6>
							</div>
							<div
								className="col-auto text-center"
								style={{ marginRight: 20 }}
							>
								<img
									width="36"
									height="36"
									src={`${process.env.PUBLIC_URL}/images/icon-places.jpg`}
									alt={`${props.data.treasures} Treasures`}
								/>
								<h6 className="mt-3">
									{formatNumber(props.data.treasures)}{" "}
									<span className="text-gray-500 font-weight-light">
										Places
									</span>
								</h6>
							</div>
							<div className="col-auto text-center">
								<img
									width="36"
									height="36"
									src={`${process.env.PUBLIC_URL}/images/icon-hotels.svg`}
									alt={`${props.data.cities} Cities`}
								/>
								<h6 className="mt-3">
									{formatNumber(props.data.cities)}{" "}
									<span className="text-gray-500 font-weight-light">
										Hotels
									</span>
								</h6>
							</div>
						</div>
					</div>

					<div className="col-6 pl-9">
						<div
							style={{
								width: 440,
								height: 410,
								marginLeft: 123,
								marginTop: 30,
							}}
						>
							<img
								width={447}
								height={346}
								src={ImageHero}
								alt="Room with couches"
								className="img-fluid position-absolute"
								style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
							/>
							<img
								width={440}
								height={346}
								src={ImageHero_}
								alt="Room with couches frame"
								className="img-fluid position-absolute"
								style={{ margin: "0 -15px -15px 0" }}
							/>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}

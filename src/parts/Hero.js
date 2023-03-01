import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconTraveler from "assets/images/icons/icon-travel.png";
import IconRestaurant from "assets/images/icons/icon-restaurant.svg";
import IconHotel from "assets/images/icons/icon-hotels.svg";
import IconPlaces from "assets/images/icons/icon-places.jpg";

import formatNumber from "utils/formatNumber";
import Button from "elements/Button";
export default function Hero(props) {
	function showMostPicked() {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 25,
			behavior: "smooth",
		});
	}

	return (
		<section className="container">
			<div className="row align-item-center">
				{/* Content */}
				<div className="col-6">
					<h1 className="font-weight-bold line-heigh-1 mb-3">
						Forget Busy Work, <br />
						Start Next Vacation
					</h1>
					<p
						className="mb-4 font-weight-light text-gray-600 w-75"
						style={{ lineHeight: "170%", fontSize: 14 }}
					>
						We provide what you need to enjoy your <br />
						holiday with family. Time to make another
						<br /> memorable moments.
					</p>
					<Button
						className="btn"
						hasShadow
						isPrimary
						onClick={showMostPicked}
					>
						Show me Now
					</Button>

					{/* Icons */}
					<div
						className="row"
						style={{ marginTop: 50, marginBottom: 20 }}
					>
						{/* Traveler */}
						<div className="col-auto text-center">
							<img
								width={33}
								height={33}
								src={IconTraveler}
								alt={`${props.data.travelers} Travelers`}
							/>
							<h6 className="mt-3" style={{ fontSize: 13 }}>
								{formatNumber(props.data.travelers)}{" "}
								<span className="text-gray-500 font-weight-light">
									Travelers
								</span>
							</h6>
						</div>
						{/* Restaurant */}
						<div className="col-auto text-center">
							<img
								width={33}
								height={33}
								src={IconRestaurant}
								alt={`${props.data.restaurant} Restaurant`}
							/>
							<h6 className="mt-3" style={{ fontSize: 13 }}>
								{formatNumber(props.data.restaurant)}{" "}
								<span className="text-gray-500 font-weight-light">
									Restaurant
								</span>
							</h6>
						</div>
						{/* Hotels */}
						<div className="col-auto text-center">
							<img
								width={33}
								height={33}
								src={IconHotel}
								alt={`${props.data.hotels} Hotels`}
							/>
							<h6 className="mt-3" style={{ fontSize: 13 }}>
								{formatNumber(props.data.hotels)}{" "}
								<span className="text-gray-500 font-weight-light">
									Hotels
								</span>
							</h6>
						</div>
						{/* Places */}
						<div className="col-auto text-center">
							<img
								width={33}
								height={33}
								src={IconPlaces}
								alt={`${props.data.places} Places`}
							/>
							<h6 className="mt-3" style={{ fontSize: 13 }}>
								{formatNumber(props.data.places)}{" "}
								<span className="text-gray-500 font-weight-light">
									Places
								</span>
							</h6>
						</div>
					</div>
				</div>

				{/* Image Hero */}
				<div className="col-6 pl-5">
					<div style={{ marginTop: 30, marginLeft: 66 }}>
						<img
							width={447}
							height={346}
							src={ImageHero}
							alt="Star hotel"
							className="img-fluid position-absolute"
							style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
						/>
						<img
							width={440}
							height={346}
							src={ImageHero_}
							alt="Star hotel"
							className="img-fluid position-absolute"
							style={{ margin: "0 -15px -15px 0" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

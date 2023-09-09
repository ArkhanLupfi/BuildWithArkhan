import React, { useCallback, useEffect } from "react";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import FeaturedImage from "parts/FeaturedImage";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageDetailTitle from "parts/PageDetailTitle";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm_";
import Activities from "parts/Activities";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import { fetchPage } from "store/actions/page";

function DetailsPage() {
	const page = useSelector((state) => state.page);
	const { id } = useParams();
	const dispatch = useDispatch();

	const breadcrumb = [
		{ pageTitle: "Home", pageHref: "/" },
		{ pageTitle: "House Details", pageHref: "" },
	];

	const fnLoadPage = useCallback(
		async (id) => {
			if (!page[id]) {
				const response = await dispatch(
					fetchPage(`/detail-page/${id}`, id)
				);

				document.title = `Staycation | ${response.title}`;
			}
		},
		[dispatch, page]
	);

	useEffect(() => {
		window.scrollTo(0, 0);

		fnLoadPage(id, fnLoadPage);
	});

	if (!page[id]) return null;

	return (
		<>
			<Header />
			<PageDetailTitle breadcrumb={breadcrumb} />
			<FeaturedImage />

			<section
				className="container"
				style={{ zIndex: 10000, position: "relative" }}
			>
				<div className="row">
					<div className="col-7 pr-5">
						<Fade bottom>
							<PageDetailDescription data={page[id]} />
						</Fade>
					</div>
					<div className="col-5">
						<Fade bottom>
							<BookingForm itemDetails={page[id]} />
						</Fade>
					</div>
				</div>
			</section>

			<Activities data={page[id].activityId} />
			<Testimony data={page[id].testimonial} />

			<Footer />
		</>
	);
}

export default DetailsPage;

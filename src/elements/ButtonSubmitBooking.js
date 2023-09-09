import React from "react";
import Button from "./Button";

import { useDispatch } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";
import { useNavigate } from "react-router-dom";

function ButtonSubmitBooking({ data, itemDetails }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function fnstartBooking() {
		dispatch(
			checkoutBooking({
				_id: itemDetails._id,
				duration: data.duration,
				date: {
					startDate: data.date.startDate,
					endDate: data.date.endDate,
				},
			})
		);
		navigate("/checkout");
	}

	return (
		<Button
			className="btn"
			hasShadow
			isPrimary
			isBlock
			onClick={fnstartBooking}
		>
			Continue to Book
		</Button>
	);
}

export default ButtonSubmitBooking;

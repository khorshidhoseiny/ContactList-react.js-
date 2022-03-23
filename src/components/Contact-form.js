import { useState } from "react";
import AddOneContact from "../Services/AddContactServices";

const ContactForm = ({ history }) => {
	const [contact, setContact] = useState({ name: "", number: "" });
	const changeHandler = (e) => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		await AddOneContact(contact);
		setContact({ name: "", number: "" });
		history.push("/");
	};
	return (
		<>
			<section>
				<form onSubmit={submitHandler}>
					<h3>Add Contact</h3>
					<div className="name">
						<label>Name</label>
						<input
							type="text"
							name="name"
							value={contact.name}
							onChange={changeHandler}
							placeholder="Enter Name here..."
						/>
					</div>
					<div className="number">
						<label>Number</label>
						<input
							type="number"
							name="number"
							value={contact.number}
							onChange={changeHandler}
							placeholder="Enter Number here..."
						/>
					</div>
					<button className="btn" type="submit">
						Add
					</button>
				</form>
			</section>
		</>
	);
};

export default ContactForm;

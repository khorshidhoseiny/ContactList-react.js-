import { useEffect, useState } from "react";
import { useNavigate, useParams, } from "react-router-dom";
import getContacts from "../Services/GetContactServices";
import getOneContact from "../Services/GetOneContactService";
import PutContact from "../Services/PutContactServices";
const EditContact = () => {
	const {id}=useParams();
	const navigate=useNavigate();
	useEffect(() => {
		const localfetch = async () => {
			const { data } = await getOneContact(id);
			setContact(data);
		};
		localfetch();
	}, []);

	const [contact, setContact] = useState({ name: "", number: "" });
	const changeHandler = (e) => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};
	
	const submitHandler = async(e) => {
		e.preventDefault();
		await PutContact(contact,id);
		 await getContacts();
		setContact({ name: "", number: "" });
		navigate("/");
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
						Update Contact
					</button>
				</form>
			</section>
		</>
	);
};

export default EditContact;

import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import preg from "../assets/preg.png";
import DeleteContact from "../Services/DeleteContactServices";
import getContacts from "../Services/GetContactServices";
const ContactList = (props) => {
	const [contacts, setContacts] = useState(null);
	const [allContact, setAllContact] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const getData = async () => {
			const { data } = await getContacts();
			setContacts(data);
			setAllContact(data);
			console.log("rendered :)");
		};
		try {
			getData();
		} catch (error) {}
	}, []);

	const searchHandler = (e) => {
		const search = e.target.value;
		setSearchTerm(search);
		if (search !== "") {
			const filteredContacts = allContact.filter((c) => {
				return Object.values(c)
					.join(" ")
					.toLowerCase()
					.includes(search.toLowerCase());
			});
			setContacts(filteredContacts);
		} else {
			setContacts(allContact);
		}
	};

	const DeleteContactHandler = async (id) => {
		try {
			const filteredContact = contacts.filter((contact) => contact.id !== id);
			setContacts(filteredContact);
			await DeleteContact(id);
		} catch (error) {}
	};
	if (!contacts) {
		<p>Please Add some Contacts </p>;
	}
	return (
		<>
			<Link to="/add">
				<button className="btn new"> Add a New...</button>{" "}
			</Link>
			<div>
				<input type="text" value={searchTerm} onChange={searchHandler} />
			</div>
			<form>
				{contacts ? (
					contacts.map((contact) => {
						const { id, name, number } = contact;
						return (
							<div key={id} className="contact">
								<Link
									to={{ pathname: `/user/${id}`, state: { contact: contact } }}
								>
									<div className="info-contact">
										<img src={preg} />
										<div className="data-content">
											<label>{name}</label>
											<p>{number}</p>
										</div>
									</div>
								</Link>
								<div className="btnDiv">
									<Link to={`/edit/${id}`}>
										<button className="editBtn">Edit</button>
									</Link>

									<button
										className="DeleteBtn"
										onClick={() => DeleteContactHandler(id)}
									>
										<FaRegTrashAlt />
									</button>
								</div>
							</div>
						);
					})
				) : (
					<p>Loading...</p>
				)}
			</form>
		</>
	);
};

export default ContactList;

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
				<form onSubmit={submitHandler} className="flex flex-col mx-auto text-left w-4/5 my-3 ">
					<h3 className="text-left mt-0 font-bold text-slate-400 py-2 border-b border-slate-400">Add Contact</h3>
					<div className="flex flex-col w-full items-start mb-6 m-auto">
						<label className="font-bold text-yellow-400 my-3">Name</label>
						<input
							type="text"
							name="name"
							value={contact.name}
							onChange={changeHandler}
							className="focus:border py-2 focus:border-yellow-400 w-full border border-slate-400 rounded-lg text-left outline-none text-white px-2"
							placeholder="Enter Name here..."
						/>
					</div>
					<div className="flex flex-col w-full items-start mb-3 m-auto">
						<label className="font-bold text-yellow-400 my-3">Number</label>
						<input
							type="number"
							name="number"
							value={contact.number}
							onChange={changeHandler}
							className="focus:border py-2 focus:border-yellow-400 w-full border border-slate-400 rounded-lg text-left outline-none text-white px-2"
							placeholder="Enter Number here..."
						/>
					</div>
					<button className="flex justify-center py-3 px-5 text-yellow-400 border-4 hover:bg-yellow-400 hover:text-black border-yellow-400 rounded-lg outline-none font-bold text-center m-3" type="submit">
						Update Contact
					</button>
				</form>
			</section>
		</>
	);
};

export default EditContact;

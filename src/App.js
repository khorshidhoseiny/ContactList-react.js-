import { Switch, Route } from "react-router-dom";
import ContactForm from "./components/Contact-form";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import { useEffect, useState } from "react";
import "./App.css";
import getContacts from "./Services/GetContactServices";
import AddOneContact from "./Services/AddContactServices";
import DeleteContact from "./Services/DeleteContactServices";
import EditContact from "./components/EditContact";
import PutContact from "./Services/PutContactServices";

function App() {
	// const [contacts, setContacts] = useState([]);
	// useEffect(() => {
	// 	const getData = async () => {
	// 		const { data } = await getContacts();
	// 		setContacts(data);
	// 	};

	// 	getData();
	// }, []);

	// const addContactHandler = async (contact) => {
	// 	try {
	// 		const { data } = await AddOneContact(contact);
	// 		setContacts([...contacts, data]);
	// 	} catch (error) {}
	// };

	// const DeleteContactHandler = async (id) => {
	// 	try {
	// 		const filteredContact = contacts.filter((contact) => contact.id !== id);
	// 		setContacts(filteredContact);
	// 		await DeleteContact(id);
	// 	} catch (error) {}
	// };
	// const EditContactHandler = async (contact, id) => {
	// 	await PutContact(contact, id);
	// 	const { data } = await getContacts();
	// 	setContacts(data);
	// 	console.log(contact);
	// };
	return (
		<>
			<h1>contact-list</h1>
			<Switch>
				<Route path="/edit/:id" component={EditContact} />
				<Route path="/user/:id" component={ContactDetail} />
				<Route path="/add" component={ContactForm} />
				<Route path="/" exact={true} component={ContactList} />
			</Switch>
		</>
	);
}

export default App;

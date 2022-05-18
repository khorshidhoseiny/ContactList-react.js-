import { Routes, Route } from "react-router-dom";
import ContactForm from "./components/Contact-form";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import "./App.css";

import EditContact from "./components/EditContact";

function App() {
  return (
    <>
      <div><h1>Contact-List</h1>  </div>
      <Routes>
        <Route path="/edit/:id" element={<EditContact/>} />
        <Route path="/user/:id" element={<ContactDetail/>} />
        <Route path="/add" element={<ContactForm/>} />
        <Route path="/"  element={<ContactList/>} />
      </Routes>
    </>
  );
}

export default App;

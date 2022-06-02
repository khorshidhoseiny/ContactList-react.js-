import { Routes, Route } from "react-router-dom";
import ContactForm from "./components/Contact-form";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import "./App.css";

import EditContact from "./components/EditContact";

function App() {
  return (
    <>
      <div>
        <h1 className="text-yellow-400 py-3 text-center border-b border-gray-400 font-bold text-2xl">Contact-List</h1>
      </div>
      <Routes>
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/user/:id" element={<ContactDetail />} />
        <Route path="/add" element={<ContactForm />} />
        <Route path="/" element={<ContactList />} />
      </Routes>
    </>
  );
}

export default App;

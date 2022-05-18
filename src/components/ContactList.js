import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeleteContact from "../Services/DeleteContactServices";
import getContacts from "../Services/GetContactServices";
  
const ContactList = () => {
  const params=useParams();
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
    <div className="contact-list">
      <Link to="/add">
        <button className="btn new"> Add a New...</button>
      </Link>
      <div className="search">
        <input type="text" value={searchTerm} onChange={searchHandler} />
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m21 21-4.486-4.494L21 21Zm-2-10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0v0Z"
            stroke="#ffff00"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <form>
        {contacts ? (
          contacts.map((contact) => {
            const { id, name, number } = contact;
            return (
              <div key={id} className="contact">
                <Link
                  to={{ pathname: `/user/${id}` }} state={{contact:contact}} DeleteContactHandler={DeleteContactHandler}
                >
                  <div className="info-contact">
                    <svg
                      width="50"
                      height="50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M41.7953 38.9531a21.8587 21.8587 0 0 0 4.2823-19.7087A21.8593 21.8593 0 0 0 3.125 25a21.7171 21.7171 0 0 0 5.0797 13.9531l-.0313.0266c.1094.1312.2344.2437.347.3734.1405.161.2921.3125.4374.4688.4375.475.8875.9312 1.3594 1.3594.1437.1312.2922.2531.4375.3781.5.4312 1.0141.8406 1.5469 1.2218.0687.0469.1312.1079.2.1563v-.0187a21.7205 21.7205 0 0 0 25 0v.0187c.0687-.0484.1297-.1094.2-.1563a22.6054 22.6054 0 0 0 1.5468-1.2218c.1454-.125.2938-.2485.4375-.3781.4719-.4297.9219-.8844 1.3594-1.3594.1453-.1563.2953-.3078.4375-.4688.111-.1297.2375-.2422.3469-.375l-.0344-.025Z"
                        fill="#666"
                      />
                      <path
                        d="M25 12.5a7.0316 7.0316 0 0 1 6.496 4.3405A7.0312 7.0312 0 1 1 25 12.5ZM12.5109 38.9531a7.8062 7.8062 0 0 1 7.8016-7.7031h9.375a7.8064 7.8064 0 0 1 7.8016 7.7031 18.6566 18.6566 0 0 1-24.9782 0Z"
                        fill="#fff"
                      />
                    </svg>
                    <div className="data-content">
                      <label>{name}</label>
                      <p>{number}</p>
                    </div>
                  </div>
                </Link>
                <div className="btnDiv">
                  <Link to={`/edit/${id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="edit-icon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#ffff00"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </Link>

                  <button
                    className="DeleteBtn"
                    onClick={() => DeleteContactHandler(id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </form>
    </div>
  );
};

export default ContactList;

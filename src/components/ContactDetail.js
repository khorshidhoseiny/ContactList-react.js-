import { Link } from "react-router-dom";

const ContactDetail = ({location}) => {
    const {contact}=location.state
    return ( <>
    <p>Name:{contact.name}</p>
    <p> Number : {contact.number}</p>
    <Link to="/add"><button className="btn new"> Back to Contact List</button></Link>
    </> );
}
 
export default ContactDetail;
import axios from "axios";

axios.defaults.baseURL="https://my-json-server.typicode.com/khorshidhoseiny/contact-list-server-api"

const http ={
get:axios.get,
put:axios.put,
delete:axios.delete,
post:axios.post,
}
export default http;
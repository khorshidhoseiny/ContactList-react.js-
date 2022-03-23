import http from "./HttpServices";

export default function DeleteContact(id) {
	return http.delete(`/contact/${id}`);
}
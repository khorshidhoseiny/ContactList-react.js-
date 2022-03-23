import http from "./HttpServices";

export default function PutContact(data, id) {
	return http.put(`/contact/${id}`, data);
}

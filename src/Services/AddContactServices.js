import http from "./HttpServices";

export default function AddOneContact(data) {
	return http.post(`/contact`,data);
}
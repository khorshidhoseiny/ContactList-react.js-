import http from "./HttpServices";

export default function getContacts() {
	return http.get("/contact");
}

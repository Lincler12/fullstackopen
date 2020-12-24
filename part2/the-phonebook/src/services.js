import axios from "axios";
const baseUrl = "http://localhost:3001/persons";


const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data);
};

const create = (object) => {
	const request =axios.post(baseUrl, object);
	return request.then(response => response.data);
};

const update = (id, object) => {
	const request = axios.put(`${baseUrl}/${id}`, object);
	return request.then(response => response.data);
};


const services = { getAll, create, update };

export default services;
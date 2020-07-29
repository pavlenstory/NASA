import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://api.nasa.gov/planetary/apod?api_key=U7r0O8e6ThI6XdXvKhwknLIduvRbxonGIj8UW6nc",
});

export const apodAPI = {
    getImage() {
        return instance.get().then(response => console.log(response.data.hdurl))
    }
}

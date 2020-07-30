import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://api.nasa.gov/planetary/",
});

export const apodAPI = {
    getImage(date) {
        return instance.get(`apod?&date=${date}&api_key=U7r0O8e6ThI6XdXvKhwknLIduvRbxonGIj8UW6nc`)
            .then(response =>response.data.hdurl);
    }
};

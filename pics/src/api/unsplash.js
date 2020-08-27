import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID LLyI8TwarbrL1Mjb7y7vvMonIZN1roiAXC_Wv4QFXsM"
    }
});
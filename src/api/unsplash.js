import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 
            'Client-ID 9ef6119cd89c2aa2b67fe5947df0b89e9bccd57a37a35571393e97dda3bd6c6c'
    }
});
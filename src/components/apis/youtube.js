import axios from 'axios';

const KEY='AIzaSyBrZtiGlesXgPCb42QVQMKJ9yC7Ss955Kc' ;

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY

    }


});

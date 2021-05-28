import axios from 'axios';


const KEY = 'AIzaSyCvqMdfu7cwCr60RmHOGbPGkcXOuyk6rY8'

export default axios.create({
    baseURL: 'GET https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        //type: 'video',
        key : KEY
    }

})
import axios from 'axios';

const KEY = 'AIzaSyDaivMm5uOqXw7Ninn7sUe6ucKtL1rTwus';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

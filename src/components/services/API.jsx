import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '33752891-f56b1177438aaaea0e11d546e';
// const API_KEY = '33700008-b0f3fc2623c0687ada0dd2d9b';

const fetchImages = async (imageName, page) => {
  const { data } = await axios.get(
    `/?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

export default fetchImages;

import axios from 'axios';


const API_KEY = '39034421-b12dee0d47925346f0305330d';

export const fetchPixabayImg = async (SearchedImages, page) => {
  const { data }= await axios.get(
    `https://pixabay.com/api/?q=${SearchedImages}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};


// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
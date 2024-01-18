import axios from 'axios';

export const requestPost = async (page, query, per_page) => {
    const params = {
        q: query,
        per_page,
        page,
    };

    const { data } = await axios.get(
        `https://pixabay.com/api/?key=33320710-0e89af02cb8a4d27c83fdc5a5&image_type=photo&orientation=horizontal`,
        { params }
    );

    return data;
};

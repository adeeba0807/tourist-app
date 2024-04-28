import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'X-RapidAPI-Key': '73fffa1367msh50594bcc9b80909p1d80a4jsnf4b54c84fa30',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};


import qweatherFetch from '../request';

export const getCityLookup = () =>
    qweatherFetch('https://geoapi.qweather.com/v2/city/lookup', {
        location: '广州',
    });

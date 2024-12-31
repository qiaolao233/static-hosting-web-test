import qweatherFetch from '../request';

export const getWeather3D = () =>
    qweatherFetch('/v7/weather/3d', {
        location: '101010100',
        lang: 'zh',
    });

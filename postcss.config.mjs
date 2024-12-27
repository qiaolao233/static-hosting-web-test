import Autoprefixer from 'autoprefixer';
import PostcssPresetEnv from 'postcss-preset-env';

const config = {
  plugins: [Autoprefixer, PostcssPresetEnv],
  browserslist: ['last 5 version', '>1%', 'ie>=8'],
};

export default config;

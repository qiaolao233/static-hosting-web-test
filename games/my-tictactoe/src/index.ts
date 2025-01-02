import MyTictactoe, { TMyTictactoeOptions } from './utils/class/my-tictactoe';

export const intMyTictactoe = (options: TMyTictactoeOptions) => {
    if (!options.canvasRef) return;
    return new MyTictactoe(options);
};

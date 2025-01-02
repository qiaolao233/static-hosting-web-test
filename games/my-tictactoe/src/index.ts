import { cleanBackgrond } from './utils/cleanBackgrond';
import { drawBackground } from './utils/drawBackground';
import { mouseEvents } from './utils/events';

export const intMyTictactoe = (
    canvas: HTMLCanvasElement,
    dialog: HTMLDialogElement,
) => {
    cleanBackgrond(canvas);
    requestAnimationFrame(() => {
        /**
         * 画一个井字棋
         */
        drawBackground(canvas);
    });

    /**
     * 监听各种事件
     */
    mouseEvents(canvas, dialog);
};

import { cleanBackgrond } from './cleanBackgrond';
import { drawBackground } from './drawBackground';
import { initLayout, initPointIterator } from './pointLayout';

export const winCallback = (
    canvas: HTMLCanvasElement,
    dialog: HTMLDialogElement,
) => {
    const winFunc = () => {
        dialog.showModal();
    };
    dialog.addEventListener('close', () => {
        initLayout();
        initPointIterator();
        cleanBackgrond(canvas);
        requestAnimationFrame(() => {
            drawBackground(canvas);
        });
    });

    return { winFunc };
};

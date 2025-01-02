import { yesCanvas } from '../template/yes';
import { Enum_canvas_beginPoint, Enum_canvas_size } from '../configs';
import { getPoints, judgingPoint } from './pointLayout';
import { isWin } from '.';
import { winCallback } from './windialog';
import { noCanvas } from '../template/no';

export const mouseEvents = (
    canvas: HTMLCanvasElement,
    dialog: HTMLDialogElement,
) => {
    const ctx = canvas.getContext('2d')!;
    const { winFunc } = winCallback(canvas, dialog);
    canvas.addEventListener('click', (e) => {
        /**
         * 判断落点在哪个区域
         */
        const { offsetX, offsetY } = e;
        judgingPoint(
            offsetX - Enum_canvas_beginPoint.x,
            offsetY - Enum_canvas_beginPoint.y,
        );
        /**
         * 通过点阵图更新视图
         */
        const points = getPoints();
        for (let j = 0; j < points.length; j++) {
            const yLine = points[j];
            for (let i = 0; i < yLine.length; i++) {
                const item = yLine[i];
                if (item === 1) {
                    ctx.drawImage(
                        yesCanvas,
                        (Enum_canvas_size.width / 3) * i +
                            Enum_canvas_beginPoint.x,
                        (Enum_canvas_size.height / 3) * j +
                            Enum_canvas_beginPoint.y,
                    );
                } else if (item === 2) {
                    ctx.drawImage(
                        noCanvas,
                        (Enum_canvas_size.width / 3) * i +
                            Enum_canvas_beginPoint.x,
                        (Enum_canvas_size.height / 3) * j +
                            Enum_canvas_beginPoint.y,
                    );
                }
            }
        }

        /**
         * 判断胜利条件
         */
        if (isWin(points)) {
            /**
             * 胜利了弹出弹窗
             */
            winFunc();
        }
    });
};

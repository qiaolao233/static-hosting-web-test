import { Enum_canvas_beginPoint, Enum_canvas_size } from '../configs';
import { drawLine } from './index';

export const drawBackground = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')!;

    /**
     * 画边框
     */
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 5;
    ctx.strokeRect(
        Enum_canvas_beginPoint.x,
        Enum_canvas_beginPoint.y,
        Enum_canvas_size.width,
        Enum_canvas_size.height,
    );

    /**
     * 画＃号
     */
    drawLine(ctx)(
        {
            x: Enum_canvas_beginPoint.x + 0,
            y: Enum_canvas_beginPoint.y + Enum_canvas_size.height / 3,
        },
        {
            x: Enum_canvas_beginPoint.x + Enum_canvas_size.width,
            y: Enum_canvas_beginPoint.y + Enum_canvas_size.height / 3,
        },
    );
    drawLine(ctx)(
        {
            x: Enum_canvas_beginPoint.x + 0,
            y: Enum_canvas_beginPoint.y + (Enum_canvas_size.height / 3) * 2,
        },
        {
            x: Enum_canvas_beginPoint.x + Enum_canvas_size.width,
            y: Enum_canvas_beginPoint.y + (Enum_canvas_size.height / 3) * 2,
        },
    );
    drawLine(ctx)(
        {
            x: Enum_canvas_beginPoint.x + Enum_canvas_size.width / 3,
            y: Enum_canvas_beginPoint.y + 0,
        },
        {
            x: Enum_canvas_beginPoint.x + Enum_canvas_size.width / 3,
            y: Enum_canvas_beginPoint.y + Enum_canvas_size.height,
        },
    );
    drawLine(ctx)(
        {
            x: Enum_canvas_beginPoint.x + (Enum_canvas_size.width / 3) * 2,
            y: Enum_canvas_beginPoint.y + 0,
        },
        {
            x: Enum_canvas_beginPoint.x + (Enum_canvas_size.width / 3) * 2,
            y: Enum_canvas_beginPoint.y + Enum_canvas_size.height,
        },
    );
};

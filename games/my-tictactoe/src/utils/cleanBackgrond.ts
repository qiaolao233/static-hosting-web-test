import { Enum_canvas_beginPoint, Enum_canvas_size } from '../configs';
export const cleanBackgrond = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')!;

    ctx.clearRect(
        Enum_canvas_beginPoint.x,
        Enum_canvas_beginPoint.y,
        Enum_canvas_size.width,
        Enum_canvas_size.height,
    );
};

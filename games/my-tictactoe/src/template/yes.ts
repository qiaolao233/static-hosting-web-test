import { Enum_canvas_size } from '../configs';

const canvas = document.createElement('canvas');

canvas.width = Enum_canvas_size.width / 3;
canvas.height = Enum_canvas_size.height / 3;

const ctx = canvas.getContext('2d')!;

ctx.beginPath();
ctx.moveTo(canvas.width / 8, canvas.height / 2);
ctx.lineWidth = 5;
ctx.lineTo((canvas.width / 8) * 3, (canvas.height / 8) * 6);
ctx.lineTo((canvas.width / 8) * 6, canvas.height / 8);
ctx.strokeStyle = 'green';
ctx.stroke();

export const yesCanvas = canvas;

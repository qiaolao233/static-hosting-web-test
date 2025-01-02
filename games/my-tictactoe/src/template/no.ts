import { Enum_canvas_size } from '../configs';

const canvas = document.createElement('canvas');

canvas.width = Enum_canvas_size.width / 3;
canvas.height = Enum_canvas_size.height / 3;

const ctx = canvas.getContext('2d')!;

ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo((canvas.width / 8) * 2, (canvas.width / 8) * 2);
ctx.lineTo((canvas.width / 8) * 6, (canvas.height / 8) * 6);
ctx.moveTo((canvas.width / 8) * 6, (canvas.width / 8) * 2);
ctx.lineTo((canvas.width / 8) * 2, (canvas.height / 8) * 6);
ctx.strokeStyle = 'red';
ctx.stroke();

export const noCanvas = canvas;

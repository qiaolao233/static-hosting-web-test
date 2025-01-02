import { Enum_canvas_size } from '../configs';

const points: number[][] = [];
export const initLayout = () => {
    points.length = 0;
    Object.assign(points, [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]);
};
initLayout();
export const getPoints = () => points;

/**
 * 使用生成器函数初始化一个迭代器
 */
function* makePointIterator() {
    let index = 0;
    while (1) {
        yield (index % 2) + 1;
        index++;
    }
}
let pointIterator: Generator<number, void, unknown>;
export const initPointIterator = () => {
    pointIterator = makePointIterator();
};
initPointIterator();

/**
 * 判断落点函数
 */
export const judgingPoint = (x: number, y: number) => {
    let xIndex;
    let yIndex;
    if (x < Enum_canvas_size.width / 3) {
        xIndex = 0;
    } else if (x < (Enum_canvas_size.width / 3) * 2) {
        xIndex = 1;
    } else {
        xIndex = 2;
    }

    if (y < Enum_canvas_size.height / 3) {
        yIndex = 0;
    } else if (y < (Enum_canvas_size.height / 3) * 2) {
        yIndex = 1;
    } else {
        yIndex = 2;
    }

    let point = points[yIndex][xIndex];

    if (point === void 0) return;
    if (point !== 0) return;
    if (point === 0) {
        let value = pointIterator.next().value;
        if (value !== void 0) points[yIndex][xIndex] = value;
    }
};

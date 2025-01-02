/**
 * 简化画线函数
 */
export const drawLine =
    (ctx: CanvasRenderingContext2D) =>
    (startPoint: Type_point, endPoint: Type_point) => {
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.stroke();
    };

/**
 * 判断多个值是否想等
 */
export const isEqual = (...args: number[]) => {
    for (let i = 1; i < args.length; i++) {
        if (args[0] !== args[i]) return false;
    }
    return true;
};

/**
 * 判断是否胜利
 */
export const isWin = (points: number[][]) => {
    /**
     * 横向对比
     */
    if (points[0][0] !== 0 && isEqual(points[0][0], points[0][1], points[0][2]))
        return true;
    if (points[1][0] !== 0 && isEqual(points[1][0], points[1][1], points[1][2]))
        return true;
    if (points[2][0] !== 0 && isEqual(points[2][0], points[2][1], points[2][2]))
        return true;
    /**
     * 树向对比
     */
    if (points[0][0] !== 0 && isEqual(points[0][0], points[1][0], points[2][0]))
        return true;
    if (points[0][1] !== 0 && isEqual(points[0][1], points[1][1], points[2][1]))
        return true;
    if (points[0][2] !== 0 && isEqual(points[0][2], points[1][2], points[2][2]))
        return true;
    /**
     * 斜向对比
     */
    if (points[0][0] !== 0 && isEqual(points[0][0], points[1][1], points[2][2]))
        return true;
    if (points[0][2] !== 0 && isEqual(points[0][2], points[1][1], points[2][0]))
        return true;
    return false;
};

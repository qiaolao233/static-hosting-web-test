import { yesCanvas } from '../../template/yes';
import { noCanvas } from '../../template/no';
import { drawLine, isEqual } from '..';

export type TMyTictactoeOptions = {
    canvasRef: HTMLCanvasElement;
    initPoint: TInitPoint;
    canvasSize: TCanvasSize;
    renderSize: TRenderSize;
    winFunc?: () => void;
    failFunc?: () => void;
};

type TInitPoint = {
    x: number;
    y: number;
};
type TCanvasSize = {
    width: number;
    height: number;
};
type TRenderSize = { width: number; height: number };

class MyTictactoe {
    private canvasRef: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private initPoint: TInitPoint;
    private canvasSize: TCanvasSize;
    private renderSize: TRenderSize;
    private winFunc: () => void;
    private failFunc: () => void;

    private isYesCanvasOrNoCanvas: boolean = false;
    private points: number[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    constructor(options: TMyTictactoeOptions) {
        const {
            canvasRef,
            initPoint,
            canvasSize,
            renderSize,
            winFunc = () => {},
            failFunc = () => {},
        } = options;
        this.canvasRef = canvasRef;
        this.ctx = this.canvasRef.getContext('2d')!;
        this.initPoint = initPoint;
        this.canvasSize = canvasSize;
        this.renderSize = renderSize;
        this.winFunc = winFunc;
        this.failFunc = failFunc;

        this.initEvent();
    }

    destructor() {
        this.canvasRef.removeEventListener('click', this.onCanvasClick);
    }

    /**
     *
     * @param canvas 清空canvas
     */
    cleanBackgrond(): this {
        this.ctx.clearRect(
            this.initPoint.x,
            this.initPoint.y,
            this.renderSize.width,
            this.renderSize.height,
        );

        this.initPoints();
        this.isYesCanvasOrNoCanvas = false;
        return this;
    }

    /**
     *
     * @param canvas 渲染棋盘
     */
    drawBackground(): this {
        this.canvasRef.width = this.canvasSize.width;
        this.canvasRef.height = this.canvasSize.height;
        /**
         * 画边框
         */
        this.ctx.strokeStyle = '#666';
        this.ctx.lineWidth = 5;
        this.ctx.strokeRect(
            this.initPoint.x,
            this.initPoint.y,
            this.renderSize.width,
            this.renderSize.height,
        );

        const drawLineCtx = drawLine(this.ctx);
        /**
         * 画＃号
         */
        drawLineCtx(
            {
                x: this.initPoint.x + 0,
                y: this.initPoint.y + this.renderSize.height / 3,
            },
            {
                x: this.initPoint.x + this.renderSize.width,
                y: this.initPoint.y + this.renderSize.height / 3,
            },
        );
        drawLineCtx(
            {
                x: this.initPoint.x + 0,
                y: this.initPoint.y + (this.renderSize.height / 3) * 2,
            },
            {
                x: this.initPoint.x + this.renderSize.width,
                y: this.initPoint.y + (this.renderSize.height / 3) * 2,
            },
        );
        drawLineCtx(
            {
                x: this.initPoint.x + this.renderSize.width / 3,
                y: this.initPoint.y + 0,
            },
            {
                x: this.initPoint.x + this.renderSize.width / 3,
                y: this.initPoint.y + this.renderSize.height,
            },
        );
        drawLineCtx(
            {
                x: this.initPoint.x + (this.renderSize.width / 3) * 2,
                y: this.initPoint.y + 0,
            },
            {
                x: this.initPoint.x + (this.renderSize.width / 3) * 2,
                y: this.initPoint.y + this.renderSize.height,
            },
        );

        return this;
    }

    /**
     * 初始化事件
     */
    private initEvent() {
        this.canvasRef.addEventListener('click', this.onCanvasClick);
    }

    private onCanvasClick = (e: MouseEvent) => {
        /**
         * 判断落点在哪个区域
         * 然后渲染落点
         */
        const { offsetX, offsetY } = e;
        this.judgingPoint(
            offsetX - this.initPoint.x,
            offsetY - this.initPoint.y,
        )?.renderPoint();

        /**
         * 判断胜利条件
         */
        if (this.isWin()) {
            /**
             * 胜利了弹出弹窗
             */
            this.winFunc();
        } else if (this.isFail()) {
            this.failFunc();
        }
    };

    /**
     * 初始化点阵
     */
    initPoints() {
        this.points = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
    }

    /**
     * 判断点击落点，更新点阵
     */
    private judgingPoint(x: number, y: number): this | void {
        let xIndex;
        let yIndex;
        if (x < this.renderSize.width / 3) {
            xIndex = 0;
        } else if (x < (this.renderSize.width / 3) * 2) {
            xIndex = 1;
        } else {
            xIndex = 2;
        }

        if (y < this.renderSize.height / 3) {
            yIndex = 0;
        } else if (y < (this.renderSize.height / 3) * 2) {
            yIndex = 1;
        } else {
            yIndex = 2;
        }

        let point = this.points[yIndex][xIndex];

        if (point === void 0) return;
        if (point !== 0) return;
        if (point === 0) {
            this.isYesCanvasOrNoCanvas = !this.isYesCanvasOrNoCanvas;
            this.points[yIndex][xIndex] = this.isYesCanvasOrNoCanvas ? 1 : 2;
        }

        return this;
    }

    /**
     * 根据点阵渲染视图
     */
    private renderPoint() {
        /**
         * 通过点阵图更新视图
         */
        for (let j = 0; j < this.points.length; j++) {
            const yLine = this.points[j];
            for (let i = 0; i < yLine.length; i++) {
                const item = yLine[i];
                if (item === 1) {
                    this.ctx.drawImage(
                        yesCanvas,
                        (this.renderSize.width / 3) * i + this.initPoint.x,
                        (this.renderSize.height / 3) * j + this.initPoint.y,
                    );
                } else if (item === 2) {
                    this.ctx.drawImage(
                        noCanvas,
                        (this.renderSize.width / 3) * i + this.initPoint.x,
                        (this.renderSize.height / 3) * j + this.initPoint.y,
                    );
                }
            }
        }
    }

    /**
     * 胜利条件判断
     */
    private isWin(): boolean {
        const points = this.points;
        /**
         * 横向对比
         */
        if (
            points[0][0] !== 0 &&
            isEqual(points[0][0], points[0][1], points[0][2])
        )
            return true;
        if (
            points[1][0] !== 0 &&
            isEqual(points[1][0], points[1][1], points[1][2])
        )
            return true;
        if (
            points[2][0] !== 0 &&
            isEqual(points[2][0], points[2][1], points[2][2])
        )
            return true;
        /**
         * 树向对比
         */
        if (
            points[0][0] !== 0 &&
            isEqual(points[0][0], points[1][0], points[2][0])
        )
            return true;
        if (
            points[0][1] !== 0 &&
            isEqual(points[0][1], points[1][1], points[2][1])
        )
            return true;
        if (
            points[0][2] !== 0 &&
            isEqual(points[0][2], points[1][2], points[2][2])
        )
            return true;
        /**
         * 斜向对比
         */
        if (
            points[0][0] !== 0 &&
            isEqual(points[0][0], points[1][1], points[2][2])
        )
            return true;
        if (
            points[0][2] !== 0 &&
            isEqual(points[0][2], points[1][1], points[2][0])
        )
            return true;
        return false;
    }

    private isFail(): boolean {
        return false;
    }
}

export default MyTictactoe;

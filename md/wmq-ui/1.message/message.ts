type TMessageProps = {
    /**
     * 消息内容
     */
    content: string;

    styles: {
        /**
         * 出现的屏幕纵向位置
         */
        y: number;
        /**
         * 是否隐藏
         */
        visibility: string;
        /**
         * 动画时间
         */
        transition: string;
    };

    /**
     * 出现的方法
     */
    showMessage: () => void;

    /**
     * 淡出的方法
     */
    closeMessage: () => void;
};

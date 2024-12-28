import { TMessageProps } from './configs';

/**
 * 通过消息队列管理多个 message 调用
 */
const messageQueue: any[] = [];

export const $wmqMessage = (props: TMessageProps) => {
    /**
     * 每隔一段时间，删除一个message, 并改变每个message 的高度
     */
};

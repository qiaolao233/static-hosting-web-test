import { TMessageProps } from './configs';
import { render, h, ref } from 'vue';
import WmqMessage from './index.vue';

/**
 * 通过函数来生成 vue 组件
 */
export const $wmqMessage = (props: TMessageProps) => {
    const divDom = document.createElement('div');
    document.body.appendChild(divDom);

    const onClose = () => {
        render(null, divDom);
        divDom.remove();
    };
    const vnode = h(WmqMessage, { ...props, onClose });
    render(vnode, divDom);
};

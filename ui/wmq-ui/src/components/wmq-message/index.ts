import { TMessageProps } from './configs';
import { render, h, ref, VNode } from 'vue';
import WmqMessageMethod from './message-method.vue';
/**
 * 攻略：https://juejin.cn/post/7050770776164663327
 */

/**
 * 储存多个消息实例，并在某个xiao
 */
const messageInstances: VNode[] = [];

/**
 * message id
 */
let seed = 0;

/**
 * 通过函数来生成 vue 组件
 */
export const $wmqMessage = (props: TMessageProps) => {
    let id = seed++;
    const divDom = document.createElement('div');
    document.body.appendChild(divDom);

    const onDestroy = () => {
        render(null, divDom);
        divDom.remove();
    };

    const onClose = () => {
        close(id);
    };
    let verticalOffset = 20;
    messageInstances.forEach((item) => {
        verticalOffset += (item.el?.offsetHeight ?? 0) + 16;
    });
    const vnode = h(WmqMessageMethod, {
        ...props,
        id,
        offset: verticalOffset,
        onClose,
        onDestroy,
    });
    render(vnode, divDom);

    messageInstances.push(vnode);

    return {
        onClose: () => {
            onClose();
            onDestroy;
        },
    };
};

const close = (vnode_id: number) => {
    const index = messageInstances.findIndex(
        (item) => item.component!.props.id === vnode_id,
    );
    if (index === -1) return;
    const vm = messageInstances[index];
    const removedHeight = vm.el!.offsetHeight;

    messageInstances.splice(index, 1);

    const len = messageInstances.length;
    if (len === 0) return;

    for (let i = 0; i < len; i++) {
        // TODO Why when using `offsetHeight` will cause bug? And use `style.top` it will be ok?
        const pos =
            parseInt(messageInstances[i].el!.style.top, 10) -
            removedHeight -
            16;

        messageInstances[i].component!.props.offset = pos;
    }
};

import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { TWmqMebuItem } from '@wmq/wmq-ui';

export const useMenuStore = defineStore('menuStore', () => {
    const menuList = ref<TWmqMebuItem[]>([
        {
            label: '我的游戏',
            value: 'my-game',
            children: [
                {
                    label: '游戏1',
                    value: 'game-1',
                },
                {
                    label: '游戏2',
                    value: 'game-2',
                },
                {
                    label: '游戏3',
                    value: 'game-3',
                },
            ],
        },
        {
            label: '仙尊语录',
            value: 'icon-shouye',
        },
    ]);

    const menuClick = (ids: string[]) => {
        let findMenuItem: TWmqMebuItem | undefined = void 0;
        while (ids.length > 0) {
            const id = ids.shift();
            if (id) {
                findMenuItem = menuList.value.find((item) => item.value === id);
                if (!findMenuItem) break;
            }
        }

        if (findMenuItem && findMenuItem.children) {
            findMenuItem.isOpen = !findMenuItem.isOpen;
        }
    };

    return { menuList, menuClick };
});

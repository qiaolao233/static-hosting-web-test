import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { TWmqMebuItem } from '@wmq/wmq-ui';

export const useMenuStore = defineStore('menuStore', () => {
    const menuList = ref<TWmqMebuItem[]>([
        {
            label: '仙尊语录',
            value: 'immortal-saying',
        },
        {
            label: '我的音乐',
            value: 'my-music',
        },
        {
            label: `Don't click on it!!!`,
            value: 'my-game',
            children: [
                {
                    label: '井字棋',
                    value: 'my-tictactoe',
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
    ]);

    const menuClick = (ids: string[]) => {
        let menuListClone: TWmqMebuItem[] = menuList.value;
        let findMenuItem: TWmqMebuItem | undefined = void 0;
        let idsClone = [...ids];
        while (idsClone.length > 0) {
            const id = idsClone.shift();
            if (id) {
                findMenuItem = menuListClone.find((item) => item.value === id);
                if (!findMenuItem) break;
                menuListClone = findMenuItem.children ?? [];
            }
        }

        if (findMenuItem && findMenuItem.children) {
            findMenuItem.isOpen = !findMenuItem.isOpen;
        }
        return findMenuItem;
    };

    return { menuList, menuClick };
});

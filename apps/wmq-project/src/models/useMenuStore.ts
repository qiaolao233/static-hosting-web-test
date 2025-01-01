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

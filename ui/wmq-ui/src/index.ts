import WmqMessage from './components/wmq-message/index.vue';
import { $wmqMessage } from './components/wmq-message';
import WmqButton from './components/wmq-button/index.vue';
import WmqZoosemyButton from './components/wmq-button/wmq-zoosemy-button.vue';
import WmqFlatButton from './components/wmq-button/wmq-flat-button.vue';
import WmqZoosemyFlatButton from './components/wmq-button/wmq-zoosemy-flat-button.vue';
import WmqLoading from './components/wmq-loading/index.vue';
import WmqDialog from './components/wmq-dialog/index.vue';
import WmqMenu from './components/wmq-menu/index.vue';
import type { TWmqMebuItem } from './components/wmq-menu/config';

export {
    WmqButton,
    $wmqMessage,
    WmqFlatButton,
    WmqZoosemyButton,
    WmqZoosemyFlatButton,
    WmqDialog,
    WmqLoading,
    WmqMessage,
    WmqMenu,
};

export type { TWmqMebuItem };

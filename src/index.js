import './index.less';

import {Message} from './components/message/index.js';

const message = new Message();

const flint = {
  message:message
};

window.$flint = flint;
import Vue from 'vue'
import {
  Message, Notification,
  Container, Main, Aside, Header, Col, Row
} from 'element-ui'

Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;

Vue.config.productionTip = false

import C from './conf'
import M from './util'

export default {
  C, M
}


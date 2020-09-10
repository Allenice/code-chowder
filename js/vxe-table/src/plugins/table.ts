import Vue from "vue";
import {
  Table,
  Column,
  Header,
  Footer,
  Grid,
  Tooltip,
  Icon
} from "vxe-table";

// 按需加载的方式默认是不带国际化的，需要自行导入
// 先安装依赖模块
Vue.use(Column);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Icon);

Vue.use(Tooltip);
Vue.use(Grid);

// 再安装核心库
Vue.use(Table);

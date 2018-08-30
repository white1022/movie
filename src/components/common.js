// 头部组件
import Header from '@/components/common/header'
// 底部组件
import Footer from '@/components/common/footer'
// 横幅组件
import Banner from '@/components/common/banner'
// 加载组件
import Loadding from '@/components/common/loadding'
// 轮播图组件
import Carouse from '@/components/common/carouse'

const install = (Vue) => {
  if (install.installed) {
    return
  }
  Vue.component(Header.name, Header)
  Vue.component(Footer.name, Footer)
  Vue.component(Banner.name, Banner)
  Vue.component(Loadding.name, Loadding)
  Vue.component(Carouse.name, Carouse)
}
export default {
  install
}
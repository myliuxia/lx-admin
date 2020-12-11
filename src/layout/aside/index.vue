<template>
  <div class="lx-page-aside">
    <el-menu @open="handleOpen" @close="handleClose" @select="handleMenuSelect">
      <component
        v-for="(menu, index) in allHighestMenu"
        :key="index"
        :is="menu.children && menu.children.length !== 0 ? 'MenuSub' : 'MenuItem'"
        :menu="menu"
      ></component>
    </el-menu>
  </div>
</template>

<script>
import MenuItem from '../components/menu-item'
import MenuSub from '../components/menu-sub'
import { menuArr } from '@/router/dynamic.js'
export default {
  name: 'lx-aside',
  components: { MenuItem, MenuSub },
  data() {
    return {
      active: '',
      // 左侧菜单
      allHighestMenu: menuArr,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleMenuSelect(path) {
      console.log(path)
      this.$router.push(path)
    },
  },
}
</script>
<style lang="scss">
.lx-page-aside {
  width: 180px;
  text-align: left;
}
</style>

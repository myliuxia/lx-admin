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
export default {
  name: 'lx-aside',
  components: { MenuItem, MenuSub },
  data() {
    return {
      active: '',
      // 左侧菜单
      allHighestMenu: [
        { path: '/home', title: '首页', icon: '', children: [] },
        {
          path: '/form',
          title: '表单',
          icon: '',
          children: [{ id: '1-0', title: '基础', path: '/form/base', icon: '', pid: '1' }],
          id: '1',
        },
        {
          path: '/table',
          title: '表格',
          icon: '',
          children: [
            { id: '2-0', title: '大表格', path: '/table/medium', icon: '', pid: '2' },
            { id: '2-1', title: '中等表格', path: '/table/small', icon: '', pid: '2' },
            { id: '2-2', title: '小表格', path: '/table/mini', icon: '', pid: '2' },
          ],
          id: '2',
        },
        {
          path: '/dialog',
          title: '弹框',
          icon: '',
          children: [
            { id: '3-0', title: '基础弹框', path: '/dialog/base', icon: '', pid: '3' },
            { id: '3-1', title: '提示框', path: '/dialog/message', icon: '', pid: '3' },
          ],
          id: '3',
        },
      ],
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

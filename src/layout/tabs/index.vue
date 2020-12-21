<template>
  <div>
    <el-tabs type="card" class="el-tabs-card" :value="current" @contextmenu.native="handleContextmenu" @tab-click="handleClick" @edit="handleEdit">
      <el-tab-pane :key="item.name" v-for="item of tabs" :closable="item.name !== 'home' && tabs.length !== 1" :name="item.name">
        <template slot="label">
          <span>{{ item.meta.title }}</span>
          <span @click="handleRefreshClick" v-show="current === item.name" class="el-icon-refresh __el_tab_refresh"></span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'tabs',
  props: ['vm'],
  data() {
    return {
      contextmenuFlag: false,
      tagName: '',
    }
  },
  computed: {
    tabs() {
      return this.$store.state.lxAdmin.page.pool
    },
    current() {
      return this.$store.state.lxAdmin.page.current
    },
  },
  methods: {
    handleClick(tab) {
      if (this.current === tab.name) {
        return
      }
      // 首页
      if (tab.name === 'home') {
        this.$router.push('/')
        return
      }
      const page = this.tabs.find(p => p.name === tab.name)
      if (page) {
        this.$store.dispatch('krAdmin/page/setCurrentName', page.name)
        this.$router.push(page)
      }
    },
    handleEdit(tagName, action) {
      switch (action) {
        case 'remove':
          this.$store.dispatch('krAdmin/page/close', { tagName, vm: this })
          break
        default:
          break
      }
    },

    handleContextmenu(event) {
      let target = event.target
      let flag = false
      if (target.className.indexOf('el-tabs__item') > -1) {
        flag = true
      } else if (target.parentNode.className.indexOf('el-tabs__item') > -1) {
        target = target.parentNode
        flag = true
      }
      if (flag) {
        event.preventDefault()
        event.stopPropagation()
        this.tagName = target.getAttribute('aria-controls').slice(5)
        this.contextmenuFlag = true
      }
    },
    handleRefreshClick() {
      this.handlePageCommandChooseed('refresh', this.current)
    },
  },
}
</script>

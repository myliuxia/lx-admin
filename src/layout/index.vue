<template>
  <!-- 容器 -->
  <div class="layout_container">
    <!-- 左侧 -->
    <div class="layout_left"></div>
    <!-- 右侧 -->
    <div class="layout_content">
      <!-- 头部  -->
      <div class="layout_content_head">头部</div>
      <!-- body -->
      <div class="layout_content_body">
        <!-- 路由 -->
        <keep-alive :include="keepAlive">
          <router-view ref="routerView" :key="$route.fullPath" class="router_view"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'layout',
  components: {},
  computed: {},
  methods: {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.layout_container {
  height: 100%;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  .layout_left {
    width: 50px;
  }
  .layout_content {
    display: flex;
    flex: 1;
    flex-direction: column;
    .layout_content_head {
      height: 50px;
      background-color: #ffffff;
    }
    .layout_content_body {
      flex: 1;
    }
  }
}
</style>

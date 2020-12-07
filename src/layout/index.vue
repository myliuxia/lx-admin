<template>
  <!-- 容器 -->
  <div class="layout_container">
    <!-- 左侧 -->
    <div class="layout_left"></div>
    <!-- 右侧 -->
    <div class="layout_content" flex-box="1" flex="dir:top">
      <!-- 头部  -->
      <div class="layout_content_head" flex="dir:left">头部</div>
      <!-- body -->
      <div class="layout_content_body" flex-box="1" flex="dir:top">
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

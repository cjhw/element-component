<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import NavSide from './src/navSide/index.vue'
import NavHeader from './src/navHeader/index.vue'

import { ref } from 'vue'

let isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>

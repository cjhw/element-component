<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-if="collapse" class="cursor"></el-icon-expand>
      <el-icon-fold v-else class="cursor"></el-icon-fold>
    </span>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps<{ collapse: boolean }>()

let emits = defineEmits(['update:collapse'])
let toggle = () => {
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: #dfe4ea;
}
svg {
  width: 1em;
  height: 1em;
}
.cursor {
  cursor: pointer;
}
</style>

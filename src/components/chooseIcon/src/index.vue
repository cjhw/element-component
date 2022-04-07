<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="m-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(item)"
        >
          <div class="text">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import * as ElIcons from '@element-plus/icons-vue'
import { watch, ref } from 'vue'
import { toLine } from '../../../utils'
import { useCopy } from '../../../hooks/index'

let props = defineProps<{ title: String; visible: boolean }>()

let emits = defineEmits(['update:visible'])
let dialogVisible = ref<boolean>(props.visible)
let handleClick = () => {
  emits('update:visible', !props.visible)
}

let clickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)} />`
  useCopy(text)
  dialogVisible.value = false
}

watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val
  }
)
watch(
  () => dialogVisible.value,
  (val) => {
    emits('update:visible', val)
  }
)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}
.icon {
  flex: 1;
}
svg {
  width: 2em;
  height: 2em;
}
:deep(.el-dialog__body) {
  height: 500px;
  overflow: scroll;
}
</style>

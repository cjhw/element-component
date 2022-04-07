<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option
        v-for="item in areas"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      clearable
      :disabled="!province"
      style="margin: 0 10px"
      placeholder="请选择城市"
      v-model="city"
    >
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
    <el-select
      clearable
      :disabled="!province || !city"
      placeholder="请选择区域"
      v-model="area"
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      ></el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import allAreas from '../lib/pca-code.json'

export interface AreaItem {
  name: string
  code: string
  children?: AreaItem[]
}

export interface Data {
  name: string
  code: string
}

let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
let areas = ref(allAreas)

let selectCity = ref<AreaItem[]>([])

let selectArea = ref<AreaItem[]>([])

let emits = defineEmits(['change'])

// 监听选择省份
watch(
  () => province.value,
  (val) => {
    if (val) {
      let cities = areas.value.find((item) => item.code === province.value)!
        .children!
      selectCity.value = cities
    }
    city.value = ''
    area.value = ''
  }
)
// 监听选择城市
watch(
  () => city.value,
  (val) => {
    if (val) {
      let area = selectCity.value.find((item) => item.code === city.value)!
        .children!
      selectArea.value = area
    }
    area.value = ''
  }
)

watch(
  () => area.value,
  (val) => {
    if (val) {
      let provinceData: Data = {
        code: province.value,
        name:
          province.value &&
          allAreas.find((item) => item.code === province.value)!.name,
      }
      let cityData: Data = {
        code: city.value,
        name:
          city.value &&
          selectCity.value.find((item) => item.code === city.value)!.name,
      }
      let areaData: Data = {
        code: val,
        name: val && selectArea.value.find((item) => item.code === val)!.name,
      }
      emits('change', {
        province: provinceData,
        city: cityData,
        area: areaData,
      })
    }
  }
)
</script>

<style lang="scss" scoped></style>

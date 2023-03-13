<template>
  <v-expansion-panels class="VCheckboxAccordion" v-model="_modelValue">
    <v-expansion-panel>
      <v-expansion-panel-title class="VCheckboxAccordion__label__headline">
        <v-checkbox :label="titleText" v-model="_isChecked" @click.stop @change="onClickCheckAll($event, _isChecked)" :true-icon="'mdi-check-circle'" :false-icon="'mdi-check-circle-outline'">
        </v-checkbox>
      </v-expansion-panel-title>
      <v-expansion-panel-text v-for="(item,idx) in _contents.contentArr" :key="item.id">
        <v-checkbox :label="item.checkboxLabel" v-model="item.checked" @change="onClickCheck($event, idx, item.checked, item.id)"/>
        <div class="item__detail" v-html="item.detail">
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">
import {reactive, ref, watch} from "vue"

// interface
export interface VCheckboxAccordionContentProps {
  id?: string
  checkboxLabel: string
  checked: boolean
  detail?: HTMLElement | string
}

export interface VCheckboxAccordionProps {
  id?: string
  name?: string
  titleText: string // 아코디언 타이틀
  modelValue?: boolean // 아코디언 오픈 여부
  isChecked?: boolean // 아코디언 전체 선택 여부
  contents?: Array<VCheckboxAccordionContentProps> // 아코디언 하위 목록
}

// props
const props = withDefaults(defineProps<VCheckboxAccordionProps>(), {
  modelValue: false,
  isChecked: false
})

// emit
const emit = defineEmits(["change:all", "change:content"])

// reactive
const _modelValue = props.modelValue ? ref([0]) : ref([])

const _isChecked = ref(props.isChecked)

// Props 받을 때 전체선택 여부 확인해서 세팅
const _contents = reactive({
  contentArr: props.contents
})

_contents.contentArr?.forEach(data => _isChecked.value && (data.checked = _isChecked.value))

// 전체 체크 선택에 따라 아코디언 하위 항목 변경
const onClickCheckAll = (event:MouseEvent, checked: boolean) => {
  _contents.contentArr?.forEach(data => (data.checked = checked))
}

// watcher
watch(
  () => props.isChecked,
  () => {
    _isChecked.value = props.isChecked
    _contents.contentArr?.forEach(data => (data.checked = _isChecked.value))
  }
)

watch(
  () => props.modelValue,
  () => {
    _modelValue.value = props.modelValue ? [0] : []
  }
)

// 하위 항목 전체 선택 여부에 따라 헤더 체크 여부 변경
watch(_contents, () => {
  if(_contents.contentArr?.filter(data => data.checked).length === _contents.contentArr?.length) {
    !_isChecked.value && (_isChecked.value = true)
  } else {
    _isChecked.value && (_isChecked.value = false)
  }
})

watch(_isChecked, () => {
  emit("change:all", _isChecked.value, props.id)
})

// method
const onClickCheck = (event:MouseEvent, index: number, checked: boolean, id?: string) => {
  emit("change:content", index, checked, id)
}
</script>

<style lang="scss">
.VCheckboxAccordion {
  & .v-expansion-panel {
    color: initial;
    border: 1px solid transparent;

    & .v-expansion-panel-title {
      padding: 16px 20px;
      height: 70px;

      & .v-input__control {
          padding-top : 20px;
      }

      & .v-label {
        font-size : 1.1rem;
        font-weight: bold;
      }
    }
  }

  & .v-expansion-panel-text__wrapper {
    padding: 0 0 5px 20px;

    & .v-label {
      font-weight: 800;
    }

    & .v-input__details {
      display: none;
    }

    & .item__detail {
      padding: 0 20px 5px 20px;
      text-align: left;
    }
  }
}
</style>
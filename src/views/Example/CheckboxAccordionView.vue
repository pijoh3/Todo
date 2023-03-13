<template>
  <h2>CheckboxAccordion</h2>
  <div class="accordion_container">
    <VCheckboxAccordion v-bind="accordionState" />
  </div>
</template>

<script setup lang="ts">
import VCheckboxAccordion from '@/components/common/VCheckboxAccordion.vue';
import {reactive} from "vue"

const accordionState = reactive({
  titleText: "전체동의",
  modelValue: true,
  isChecked: true,
  contents: [
    {
      id: "agree_1",
      checkboxLabel: "[필수] 개인정보 수집, 이용 동의",
      checked: true,
      detail: `<p>필수 개인정보 동의 사항으로써 아래 내용을 반드시 참고하시기 바랍니다.</p>
               <p>vue에 대해서 알아보고 vuetify를 활용할 수 있도록 합시다.</p>`
    },
    {
      id: "agree_2",
      checkboxLabel: "[필수] 개인정보 수집, 이용 동의",
      checked: true,
      detail: `<p>필수 개인정보 동의 사항으로써 아래 내용을 반드시 참고하시기 바랍니다.</p>
               <p>vue에 대해서 알아보고 vuetify를 활용할 수 있도록 합시다.</p>`
    },
  ]
})
</script>

<style lang="scss">
.accordion_container {
  width: 90%;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
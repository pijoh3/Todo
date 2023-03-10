<template>
  <v-expansion-panels class="VCheckboxAccordion">
    <v-expansion-panel>
      <v-expansion-panel-title class="VCheckboxAccordion__label__headline">
        <div>
          <v-checkbox>
            <template #label>
              <v-label style="{$label-font-size : 40rem; }" :text="'전체동의'" />
            </template>
          </v-checkbox>
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text class="VcheckboxAccordion__content">
        <div class="agreeCheck__item">
          <v-checkbox :label="'[필수]선택입니다.'" />
          본 약관에 동의?
        </div>
      </v-expansion-panel-text>
      <v-expansion-panel-text>
        <div class="agreeCheck__item">
          <v-checkbox :label="'[필수]선택입2니다.'" />
            본 약관에 보감?
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.VCheckboxAccordion {
  & .v-expansion-panel {
    color: initial;
    border: 1px solid transparent;

    &.v-expansion-panel--active {
      border-color: #e5e5e5;
    }

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

    & .v-expansion-panel-text__wrapper {
      padding-top: 8px;
    }
  }
}
</style>
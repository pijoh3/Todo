<template>
    <v-card>
    <v-card-item>
      <div>
        <div class="overLine">
          Vue basic 
        </div>
        <div class="title">
          Todo
        </div>
        <div class="content">ddd</div>
      </div>
    </v-card-item>
    <v-card-actions>
      <button class="VBtn VBtn--global VBtn--green" type="button">
        <span>dfdf</span>
      </button>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
export interface VCardProps {

}

</script>

<style lang="scss">
.overLine {
  font-weight: 700;
  text-align: left;
  font-size: 14px;
  color: #bcbcbc;
  padding: 3px 0px 5px 3px;
}

.title {
  font-weight: bold;
  text-align: left;
  font-size: 30px;
}

.content {
  text-align: left;
  padding: 5px 3px 5px 3px;
}

.VBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: none;
  text-align: center;
  letter-spacing: normal;
  text-transform: none;

  &.VBtn--global {
    font-size: 15px;
    font-weight: bold;
    padding: 0 25px;
    border: 0;
    height: 35px;    
  }

  &.VBtn--green {
    color: #fff;
    background: #ABCC88;
    border:1px solid #ABCC88;

    &:focus {
      color: #80bd76;
      border-width:2px;
      border-color: #ABCC88;
    }
  }
 
}
</style>
<template>
  <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
          <slot name="username" />
          <div class="time">
            <!-- 상위 컴포넌트에서 정의할 영역 -->
            <slot name="time" />
            <!-- 상위 컴포넌트에서 정의할 영역 -->
            <slot name="karma" />
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  .fa-user {
    font-size: 2.5rem;
  }
  
  .user-description {
    padding-left: 8px;
  }

  .time {
    font-size: 0.7rem;
  }
}  
</style>
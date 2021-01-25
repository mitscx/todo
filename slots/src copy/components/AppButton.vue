<template>
  <button class="btn">
    <slot>
      <span>default span</span>
    </slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  background: blue;
  color: white;
}
</style>

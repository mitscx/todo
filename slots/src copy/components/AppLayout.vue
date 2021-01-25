<template>
  <div>
    <header class="header">
      <slot name="header" v-bind:fullName="fullName">header</slot>
    </header>
    <hr />
    <main>
      <slot>main</slot>
    </main>
    <hr />
    <footer class="footer">
      <slot name="footer">footer</slot>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['user'],
  computed: {
    fullName() {
      return this.user.name + ' ' + this.user.last_name;
    },
  },
};
</script>

<style>
</style>

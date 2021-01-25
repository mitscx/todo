<template>
  <div id="app">
    <header>header</header>
    <ul>
      <li>
        <router-link exact active-class="active" :to="{name: 'main'}">Главная</router-link>
      </li>
      <li>
        <router-link exact active-class="active" :to="{name: 'news.show'}">Новости</router-link>
      </li>
      <li>
        <router-link exact active-class="active" :to="{name: 'about'}">О нас</router-link>
      </li>
      <li>
        <router-link exact active-class="active" :to="{name: 'fos'}">Форма обратной связи</router-link>
      </li>
    </ul>
    <hr />
    <router-view />
    <hr />
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
.active {
  color: red;
}
</style>

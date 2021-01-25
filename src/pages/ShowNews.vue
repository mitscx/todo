<template>
  <ul>
    <li v-for="item in news" :key="item.id">
      <router-link
        exact
        active-class="active"
        :to="{ path: `news/${item.id}`, params: { id: item.id }}"
      >
        <p>{{ item.title }}</p>
        <p>{{ item.description }}</p>
        <p>{{ item.created_at }}</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { getAll } from "../NewsApi";

export default {
  created() {
    this.news = getAll();
  },
  data() {
    return {
      news: null,
    };
  },
};
</script>

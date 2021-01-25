<template>
  <div id="app">
    <!-- <AppItem>
      <div>item custom</div>
      <div>1</div>
    </AppItem>
    <app-button>
      <span>icon</span>
      <span>app button</span>
    </app-button>
    <app-button></app-button>-->
    <AppLayout :user="user">
      <template v-slot:header="{fullName}">custom header {{fullName}}</template>
      <div>custom main {{test}}</div>
      <template v-slot:footer>custom footer</template>
    </AppLayout>
  </div>
</template>

<script>
import AppItem from './components/AppItem';
import AppLayout from './components/AppLayout';

export default {
  name: 'App',
  data() {
    return {
      user: {
        name: 'Nikita',
        last_name: 'Filatov',
      },
    };
  },
  components: {
    AppItem,
    AppLayout,
  },
};
</script>

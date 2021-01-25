<template>
  <div>{{newOne['body']}}</div>
</template>

<script>
import { getOne } from "../NewsApi";

export default {
  created() {
    this.newOne = getOne(this.$route.params.id);
  },
  data() {
    return {
      newOne: null,
    };
  },
};
</script>

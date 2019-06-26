<template>
<div>
<p>{{greeting}}</p>
</div>
</template>
<script>
export default {
  data() {
    return {
      greeting: "Hello Bottom!"
    };
  }
};
</script>
<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
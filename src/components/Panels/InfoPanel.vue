<template>
<div>
<p>{{greeting}}</p>
</div>
</template>
<script>
export default {
  data() {
    return {
      greeting: "Hello Side!"
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
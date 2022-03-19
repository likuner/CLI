/**
 * 页面模板
 */
module.exports = function mobileComponent(componentName) {
  return `<template>
</template>

<script>
export default {
  name: '${componentName}',
  props: { },
  components: { },
  created() { },
  methods: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
`;
}

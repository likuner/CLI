/**
 * 页面模板
 */
module.exports = function mobilePage(pageName) {
  return `<template>
  <div class="lx-page">${pageName}</div>
</template>

<script>
export default {
  name: '${pageName}',
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

/**
 * 页面模板
 */
module.exports = function webPage(pageName) {
  return `<template>
  <div class="${pageName}"></div>
</template>

<script>
export default {
  name: '${pageName}',
  data: function() {
    return {}
  },
  components: {},
  /* 计算属性 */
  computed: {},
  /* 生命周期钩子 */
  created() {},
  mounted() {},
  /* 方法 */
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
`;
}

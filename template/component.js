/**
 * 组件模板
 */
module.exports = function webComponent(componentName) {
  return `<template>
  <div class="${componentName}"></div>
</template>

<script>
export default {
  name: '${componentName}',
  data: function() {
    return {}
  },
  prop:{},
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

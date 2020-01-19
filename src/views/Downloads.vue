<template>
    <div class="downloads-container">
        <builder-menu></builder-menu>
    </div>
</template>

<style lang="stylus">
.downloads-container {
    background: white;
}
</style>

<script>
import BuilderMenu from "./BuilderMenu.vue";
const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

export default {
  name: "downloads",
  title: function() {
    return camelize(`${this.product} ${this.$options.name}`);
  },
  props: ["product"],
  components: { BuilderMenu }
};
</script>

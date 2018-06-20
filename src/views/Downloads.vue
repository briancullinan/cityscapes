<template>
    <div class="downloads-container">
        <builder-menu></builder-menu>
    </div>
</template>

<style lang="stylus">
.downloads-container
    background white
</style>

<script>
import BuilderMenu from './BuilderMenu.vue'

export default {
  name: 'downloads',
  props: ['product'],
  components: { BuilderMenu }
}
</script>

<template>
    <div class="builder-menu">
        <router-link to="styles">Styles</router-link>
        <router-link to="features">Features</router-link>
        <router-link to="gallery">Gallery</router-link>
        <router-link to="downloads">Downloads</router-link>
    </div>
</template>

<style lang="stylus">
.builder-menu {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    display: flex;
    z-index: 999;
}

.builder-menu a {
    flex-basis: 100%;
    padding: 20px;
    background: #076323;
    color: white;
    text-align: center;

    &:active, &:focus, &:hover, &.router-link-active {
        background: white;
        color: #076323;
    }
}

@media (max-width: 500px) {
    .builder-menu a {
        padding: 10px;
    }
}

@media (max-height: 500px) {
    .builder-menu a {
        padding: 10px;
    }
}
</style>

<script>
export default {
  name: "builder-menu",
  props: ["product"],
  serverCacheKey: props => props.product
};
</script>

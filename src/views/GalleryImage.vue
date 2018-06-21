<template>
    <div class="selected-image">
        <router-link class="close" :to="'/' + product + '/gallery'">&times;</router-link>
        <div class="selected-wrapper">
            <img :src="'/public/' + product + '/' + image" />
        </div>
        <div class="selected-properties">
            <h3>PROJECT TYPE</h3>
            Rooftop screen

            <h3>REGION</h3>
            Great Lakes

            <h3>PRODUCT</h3>
            Envisor

            <h3>SPECS</h3>
            <strong>Size</strong> Stacked 52” and 35” panels<br />
            <strong>Material</strong> Acrylicap ABS<br />
            <strong>Style/Color</strong> Louver/Slate gray

            <h3>INDUSTRY</h3>
            Education

            <h3>FEATURES</h3>
            Stacked design with custom cutouts
        </div>
    </div>
</template>

<style lang="stylus">
.selected-image {
    .close {
        text-shadow: 1px 2px 3px rgba(0, 0, 0, 1);
        display: block;
        position: fixed;
        z-index: 1003;
        top: 20px;
        left: 20px;
        font-size: 60px;
        line-height: 40px;
        color: white;
    }

    .selected-properties {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        min-height: 100%;
        width: 200px;
        z-index: 1002;
        background: white;
        padding: 20px;
    }

    .selected-wrapper {
        flex-basis: 100%;
        flex-shrink: 0;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: flex;
        overflow: hidden;
        z-index: 1001;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            min-height: 120%;
            min-width: 120%;
            height: auto;
            width: auto;
            flex-shrink: 0;
        }
    }
}
</style>

<script>

export default {
  name: "gallery-image",
  props: ['product', 'image']
};
</script>

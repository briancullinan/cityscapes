<template>
    <div class="selected-image">
        <router-link class="close" :to="'/' + product + '/gallery'">&times;</router-link>
        <a class="share" to="">
            <md-icon class="md-size-2x">share</md-icon>
        </a>
        <a class="download" :href="product && image ? ('/public/' + product + '/' + image) : '/public/blank.png'">
            <md-icon class="md-size-2x">get_app</md-icon>
        </a>
        <div class="selected-wrapper">
            <img :src="product && image ? ('/public/' + product + '/' + image) : '/public/blank.png'" />
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
.gallery-container.image .selected-image {
    .close, .share, .download, .close:not(.md-button), .share:not(.md-button), .download:not(.md-button),  {
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

    .share, .share:not(.md-button) {
        left: auto;
        right: 270px;
    }

    .download, .download:not(.md-button) {
        left: auto;
        right: 320px;
    }

    .md-icon.md-theme-default.md-icon-font {
        color: white;
    }

    .selected-properties {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        min-height: 100%;
        width: 250px;
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

    @media (max-width: 800px) {
        .selected-properties {
            top: 100%;
            left: 0;
            width: 100%;
        }

        .share {
            left: auto;
            right: 20px;
        }

        .download {
            left: auto;
            right: 70px;
        }
    }
}
</style>

<script>
import Vue from "vue";
import { MdIcon } from "vue-material/dist/components";
Vue.use(MdIcon);

export default {
  name: "gallery-image",
  props: ["product", "image"]
};
</script>

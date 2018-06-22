<template>
    <div v-bind:class="{ image : !!image }" class="gallery-container">
        <h1 class="angle-header">
            <strong>{{ product }} Gallery</strong>
            <i></i>
        </h1>
        <div class="thumb-wrapper">
            <div class="image-float">
                <router-link to="gallery/envisor_Giant-Eagle_Carmel_IN_roof_screen_stacked.jpg" class="thumb-container">
                    <img src="~public/envisor/envisor_Giant-Eagle_Carmel_IN_roof_screen_stacked.jpg" />
                    <span class="thumb-caption">Rooftop Screen<br />Cincinatti, OH</span>
                </router-link>
            </div>
            <div class="image-float">
                <router-link to="gallery/ATT_envisor_HVAC_roof_screen_louver-1024x576.jpg" class="thumb-container">
                    <img src="~public/envisor/ATT_envisor_HVAC_roof_screen_louver-1024x576.jpg" />
                    <span class="thumb-caption">Rooftop Screen<br />Cincinatti, OH</span>
                </router-link>
            </div>
            <div class="image-float">
                <router-link to="gallery/envisor_cityscapes_roof_screen_louver.jpg" class="thumb-container">
                    <img src="~public/envisor/envisor_cityscapes_roof_screen_louver.jpg" />
                    <span class="thumb-caption">Rooftop Screen<br />Cincinatti, OH</span>
                </router-link>
            </div>
            <div class="image-float">
                <router-link to="gallery/envisor_Giant-Eagle_Carmel_IN_roof_screen_stacked.jpg" class="thumb-container">
                    <img src="~public/envisor/envisor_Giant-Eagle_Carmel_IN_roof_screen_stacked.jpg" />
                    <span class="thumb-caption">Rooftop Screen<br />Cincinatti, OH</span>
                </router-link>
            </div>
            <div class="image-float">
                <router-link to="gallery/ATT_envisor_HVAC_roof_screen_louver-1024x576.jpg" class="thumb-container">
                    <img src="~public/envisor/ATT_envisor_HVAC_roof_screen_louver-1024x576.jpg" />
                    <span class="thumb-caption">Rooftop Screen<br />Cincinatti, OH</span>
                </router-link>
            </div>
            <div class="image-float">
                <router-link to="gallery/envisor_cityscapes_roof_screen_louver.jpg" class="thumb-container">
                    <img src="~public/envisor/envisor_cityscapes_roof_screen_louver.jpg" />
                    <span class="thumb-caption">Rooftop Screen<br />Cincinatti, OH</span>
                </router-link>
            </div>
        </div>

        <gallery-image :image="image" :product="product"></gallery-image>
        <builder-menu></builder-menu>
    </div>
</template>

<style lang="stylus">
.gallery-container {
    background: white;
    padding-bottom: 60px;
    padding: left 20px;
    padding: right 20px;

    .selected-image {
        .selected-wrapper, .selected-properties, .close {
            display: none;
        }
    }

    &.image {
        h1, .thumb-wrapper {
            display: none;
            padding: 0;
        }
    }

    .image-float {
        flex-basis: 33.3%;
        position: relative;
        padding-top: 25%;
        overflow: hidden;
    }

    .thumb-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        color: white;
        overflow: hidden;
        opacity: 0;
        transition: 0.15s ease-in-out;
        padding: 10px;
    }

    .thumb-container {
        position: absolute;
        top: 20px;
        right: 20px;
        bottom: 20px;
        left: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img {
            min-height: 100%;
            min-width: 100%;
            width: auto;
            height: auto;
            flex-basis: 100%;
            flex-shrink: 0;
        }

        &:hover span {
            opacity: 1;
        }
    }

    .thumb-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    @media (max-width: 800px) {
        .image-float {
            flex-basis: 100%;
            padding-top: 60%;
        }

        .gallery-container.image .selected-image .selected-properties {
            top: 100%;
            left: 0;
            right: 0;
            bottom: auto;
            width: 100%;
            margin-top: -130px;
        }

        .gallery-container.image .selected-image .close {
            left: auto;
            right: 20px;
        }
    }
}
</style>

<script>
import BuilderMenu from "./BuilderMenu.vue";
import GalleryImage from "./GalleryImage.vue";

export default {
  name: "gallery",
  props: ["product", "image"],
  components: { BuilderMenu, GalleryImage }
};
</script>

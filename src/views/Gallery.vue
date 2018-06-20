<template>
    <div v-bind:class="{ image : !!image }" class="gallery-container">
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
        <builder-menu></builder-menu>
    </div>
</template>

<style lang="stylus">
.selected-wrapper, .selected-properties, .close
    display none

.gallery-container
    background white
    padding-bottom 50px
    padding left 20px
    padding right 20px

    &.image
        h1, .thumb-wrapper
            display none
            padding 0
        .selected-image
            .close
                text-shadow 1px 2px 3px rgba(0,0,0,1)
                display block
                position fixed 
                z-index 1003
                top 20px 
                left 20px
                font-size 60px
                line-height 40px
                color white

            .selected-properties
                display block
                position absolute
                top 0
                right 0
                min-height 100%
                width 200px
                z-index 1002
                background white
                padding 20px

            .selected-wrapper
                flex-basis 100%
                flex-shrink 0
                position fixed 
                top 0
                right 0
                left 0
                bottom 0
                display flex
                overflow hidden
                z-index 1001
                flex-direction column
                align-items center
                justify-content center

                img 
                    min-height 120%
                    min-width 120%
                    height auto
                    width auto
                    flex-shrink 0

.image-float
    flex-basis 33.3%
    position relative
    padding-top 25%
    overflow hidden

.thumb-caption
    position absolute
    bottom 0
    left 0
    right 0
    background rgba(0, 0, 0, .5)
    text-align center
    color white
    overflow hidden
    opacity 0
    transition .15s ease-in-out
    padding 10px

.thumb-container
    position absolute 
    top 20px
    right 20px
    bottom 20px
    left 20px
    display flex
    flex-direction column
    align-items center
    justify-content center
    overflow hidden

    img
        min-height 100%
        min-width 100%
        width auto
        height auto
        flex-basis 100%
        flex-shrink 0

    &:hover span
        opacity 1

.thumb-wrapper
    display flex
    flex-wrap wrap

@media (max-width 800px)
    .image-float
        flex-basis 100%
        padding-top: 60%
    .gallery-container.image .selected-image .selected-properties
        top 100%
        left 0
        right 0
        bottom auto
        width 100%
        margin-top -130px
    .gallery-container.image .selected-image .close
        left auto 
        right 20px

</style>

<script>
import BuilderMenu from './BuilderMenu.vue'

export default {
  name: 'gallery',
  props: ['product', 'image'],
  components: { BuilderMenu }

}
</script>

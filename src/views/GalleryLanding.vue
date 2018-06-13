<template>
  <div class="gallery-pan">
    <div class="gallery-overlap">
        <img src="~public/cityscapes-products_covrit.jpg" />
    </div>
    <div class="gallery-overlap">
        <img src="~public/cityscapes-products_planx.jpg" />
    </div>
    <div class="gallery-overlap">
        <img src="~public/rotator_envisor_Giant-Eagle_Carmel_IN.jpg" />
    </div>
    <div class="gallery-overlap">
        <img src="~public/rotator_naturescreen_0X6A7186.jpg" />
    </div>
    <div class="caption">
      <h2>BEAUTY IS ON THE OUTSIDE</h2>
      <p>Attractive screening solutions that won’t blow your budget.<br /><br />
        <a href="/covrit/">Read More</a></p>
      <span></span>
    </div>
    <div class="caption"><h2>BREATHE LIFE INTO YOUR SPACE</h2>
      <p>LEED-certified green walls and&nbsp;trellises.<br /><br />
        <a href="/planx/">Read More</a></p>
      <span></span>
    </div>
    <div class="caption">
      <h2>CODE­COMPLIANCE NEVER LOOKED SO GOOD</h2>
      <p><a href="/envisor/">Read More</a></p>
      <span></span>
    </div>
    <div class="caption">
      <h2>RAISING THE STANDARD</h2>
      <p>Raised planters create timeless outdoor spaces.<br /><br />
        <a href="/naturescreen/">Read More</a></p>
      <span></span>
    </div>
    <div class="su-row products">
      <div class="su-column su-column-size-1-3">
        <div class="su-column-inner su-clearfix">
          <p><a href="/envisor/"><img class="size-full wp-image-5292 aligncenter" src="~public/roof_screens_envisor.jpg" alt="Envisor rooftop screens" width="400" height="175"></a></p>
          <h3 class="p1">ROOFTOP SCREENS</h3>
          <p class="p2">Industry standard unit-mounted screens with zero roof penetration while maintaining warranties.</p>
          <p><a class="product-btn" href="/envisor/">Learn more</a></p>
        </div>
      </div>
      <div class="su-column su-column-size-1-3">
        <div class="su-column-inner su-clearfix">
          <p><a href="/covrit/"><img class="size-full wp-image-5288 aligncenter" src="~public/dumpster_enclosures_covrit.jpg" alt="Covrit dumpster enclosures" width="400" height="175"></a></p>
          <h3 class="p1">DUMPSTER ENCLOSURES</h3>
          <p class="p1">Gates and ground screens combine for a complete enclosure in standard or custom sizes.</p>
          <p><a class="product-btn" href="/covrit/">Learn more</a></p>
        </div>
      </div>
      <div class="su-column su-column-size-1-3">
        <div class="su-column-inner su-clearfix">
          <p><a href="/covrit/"><img class="size-full wp-image-5290 aligncenter" src="~public/ground_screens_Covrit-Carmel-HS.jpg" alt="Covrit ground screens" width="400" height="175"></a></p>
          <h3 class="p1">GROUND SCREENS</h3>
          <p class="p2">Choose from a variety of design options to hide unsightly equipment and maintain aesthetic.</p>
          <p><a class="product-btn" href="/covrit/">Learn more</a></p>
        </div>
      </div>
    </div>
    <div class="su-row products">
      <div class="su-column su-column-size-1-3">
        <div class="su-column-inner su-clearfix">
          <p><a href="/naturescreen/"><img class="size-full wp-image-5293 aligncenter" src="~public/trellis_systems_naturescreen_0X6A7203.jpg" alt="Naturescreen trellis systems" width="400" height="175"></a></p>
          <h3 class="p1">TRELLIS SYSTEMS</h3>
          <p class="p2">One of the strongest modular trellis systems available with wall- or ground-mounted options.</p>
          <p><a class="product-btn" href="/naturescreen/">Learn more</a></p>
        </div>
      </div>
      <div class="su-column su-column-size-1-3">
        <div class="su-column-inner su-clearfix">
          <p><a href="/planx/"><img class="size-full wp-image-5291 aligncenter" src="~public/planters_raised_beds.jpg" alt="Planx planters and raised beds" width="400" height="175"></a></p>
          <h3 class="p1">PLANTERS &amp; RAISED BEDS</h3>
          <p class="p2">Long-lasting, fully-customizable raised beds and planters with a wide variety of enhancements.</p>
          <p><a class="product-btn" href="/planx/">Learn more</a></p>
        </div>
      </div>
      <div class="su-column su-column-size-1-3">
        <div class="su-column-inner su-clearfix">
          <p><a href="/toughgate/"><img class="size-full wp-image-5289 aligncenter" src="~public/gates_doors_toughgate_Menomonee-Falls.jpg" alt="ToughGate gates and doors" width="400" height="175"></a></p>
          <h3 class="p1">GATES &amp; DOORS</h3>
          <p class="p2">Tough, durable gates with customizable options for use with new or existing enclosures.</p>
          <p><a class="product-btn" href="/toughgate/">Learn more</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery-landing'
}
</script>

<style lang="stylus">
.gallery-overlap
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  display flex
  align-items center
  overflow hidden
  justify-content center
  img
    flex-shrink 0
    min-width 120%
    min-height 120%
    animation top-right-panning 40s infinite linear
    position relative
    opacity 0
  &:nth-of-type(2) img
    animation bottom-right-panning 40s infinite linear
  &:nth-of-type(3) img
    animation bottom-left-panning 40s infinite linear
  &:nth-of-type(4) img
    animation top-left-panning 40s infinite linear
.caption
  animation slide-first 40s infinite linear
  position absolute
  left 42px
  bottom 0
  width 350px
  padding 92px 0 0
  text-align center
  top -100%
  display flex
  flex-direction column
  h2
    color #FFFFFF
    margin 0
    padding 20px 20px 0
    text-shadow 2px 2px 2px rgba(0,0,0,.5)
    font-size 3em
    font-weight normal
    line-height 1.125em
    background rgba(7,99,35,.7)
    hyphens manual
    min-height 30%
    display flex
    flex-direction column
    justify-content center
    align-items center
  p
    margin 0
    color #FFFFFF
    padding 20px 20px
    font-size 1.25em
    line-height 1.25em
    background rgba(7,99,35,.7)
    display block
    min-height 10%
  span
    position relative
    display block
    height 40px
    margin 0
    background rgba(7,99,35,.7)
    border-radius 0 0 100% 100%
    display block
  a
    display inline-block
    padding 5px 8px
    color #FFFFFF
    text-transform uppercase
    background rgba(18,49,21,.7)
    border 2px solid #FFFFFF
  &:nth-of-type(6)
    animation slide-second 40s infinite linear
  &:nth-of-type(7)
    animation slide-third 40s infinite linear
  &:nth-of-type(8)
    animation slide-fourth 40s infinite linear

@media (max-height 500px)
  .caption
    h2
      font-size 2em

@keyframes top-right-panning
  100%
    opacity 0
  1%
    opacity 1
    top 0%
    left 0%
  24%
    top -10%
    left 10%
    opacity 1
  25%
    opacity 0

@keyframes bottom-right-panning
  24%
    opacity 0
  25%
    opacity 1
    top 0%
    left 0%
  49%
    top 10%
    left 10%
    opacity 1
  50%
    opacity 0

@keyframes bottom-left-panning
  49%
    opacity 0
  50%
    opacity 1
    top 0%
    left 0%
  74%
    top 10%
    left -10%
    opacity 1
  75%
    opacity 0

@keyframes top-left-panning
  74%
    opacity 0
  75%
    opacity 1
    top 0%
    left 0%
  100%
    top -10%
    left -10%
    opacity 1
  101%
    opacity 0
  0%
    opacity 0

@keyframes slide-first
  101%
    top -100%
  2%
    top 0
  23%
    top 0
  24%
    top -100%

@keyframes slide-second
  24%
    top -100%
  25%
    top 0
  48%
    top 0
  49%
    top -100%

@keyframes slide-third
  49%
    top -100%
  50%
    top 0
  73%
    top 0
  74%
    top -100%

@keyframes slide-fourth
  74%
    top -100%
  75%
    top 0
  99%
    top 0
  0%
    top -100%
  100%
    top -100%

</style>


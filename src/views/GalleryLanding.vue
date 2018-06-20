<template>
  <div class="gallery-pan">
    <div class="gallery-overlap">
      <img src="~public/cityscapes-products_covrit.jpg" />
      <div class="caption">
        <h2>BEAUTY IS ON THE OUTSIDE</h2>
        <p>Attractive screening solutions that won’t blow your budget.<br /><br />
          <router-link class="btn" to="/covrit/">Read More</router-link>
        </p>
        <span></span>
      </div>
    </div>
    <div class="gallery-overlap">
      <img src="~public/cityscapes-products_planx.jpg" />
      <div class="caption">
        <h2>BREATHE LIFE INTO YOUR SPACE</h2>
        <p>LEED-certified green walls and&nbsp;trellises.<br /><br />
          <router-link class="btn" to="/planx/">Read More</router-link>
        </p>
        <span></span>
      </div>
    </div>
    <div class="gallery-overlap">
      <img src="~public/rotator_envisor_Giant-Eagle_Carmel_IN.jpg" />
      <div class="caption">
        <h2>CODE­COMPLIANCE NEVER LOOKED SO GOOD</h2>
        <p>
          <router-link class="btn" to="/envisor/">Read More</router-link>
        </p>
        <span></span>
      </div>
    </div>
    <div class="gallery-overlap">
      <img src="~public/rotator_naturescreen_0X6A7186.jpg" />
      <div class="caption">
        <h2>RAISING THE STANDARD</h2>
        <p>Raised planters create timeless outdoor spaces.<br /><br />
          <router-link class="btn" to="/naturescreen/">Read More</router-link>
        </p>
        <span></span>
      </div>
    </div>
    <product-menu></product-menu>
  </div>
</template>

<script>
import ProductMenu from "./ProductMenu.vue";

export default {
  name: "gallery-landing",
  components: { ProductMenu }
};
</script>

<style lang="stylus">
.product-container {
  position: absolute;
  top: 100%;
}

.gallery-overlap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  animation: hide-first 40s infinite linear;
  opacity: 0;

  img {
    flex-shrink: 0;
    min-width: 120%;
    min-height: 120%;
    height: auto;
    width: auto;
    position: relative;
    animation: top-right-panning 40s infinite linear;
  }

  &:nth-of-type(2) img {
    animation: bottom-right-panning 40s infinite linear;
  }

  &:nth-of-type(3) img {
    animation: bottom-left-panning 40s infinite linear;
  }

  &:nth-of-type(4) img {
    animation: top-left-panning 40s infinite linear;
  }

  &:nth-of-type(2) {
    animation: hide-second 40s infinite linear;
  }

  &:nth-of-type(3) {
    animation: hide-third 40s infinite linear;
  }

  &:nth-of-type(4) {
    animation: hide-fourth 40s infinite linear;
  }
}

.caption {
  position: absolute;
  left: 40px;
  bottom: 0;
  width: 350px;
  padding: 92px 0 0;
  text-align: center;
  top: 0;
  display: flex;
  flex-direction: column;

  h2 {
    color: #FFFFFF;
    margin: 0;
    padding: 20px 20px 0;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    font-size: 3em;
    font-weight: normal;
    line-height: 1.125em;
    background: rgba(7, 99, 35, 0.7);
    hyphens: manual;
    min-height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    margin: 0;
    color: #FFFFFF;
    padding: 20px 20px;
    font-size: 1.25em;
    line-height: 1.25em;
    background: rgba(7, 99, 35, 0.7);
    display: block;
    min-height: 10%;
  }

  span {
    position: relative;
    display: block;
    height: 40px;
    margin: 0;
    background: rgba(7, 99, 35, 0.7);
    border-radius: 0 0 100% 100%;
    display: block;
  }
}

@media (max-width: 800px) {
  .gallery-overlap {
    padding-bottom: 200px;

    .caption {
      top: auto;
      bottom: 0;
      left: 0;
      right: 0;
      width: auto;
      background: white;
      padding-top: 0;

      h2 {
        padding: 5px;
        font-size: 1.5em;
      }

      span {
        border-radius: 0;
        height: 0;
      }

      p {
        padding: 5px;
      }
    }
  }
}

@media (max-height: 500px) {
  .gallery-overlap {
    .caption {
      h2 {
        font-size: 1.5em;
        padding: 5px;
      }

      p {
        padding: 5px;
      }
    }
  }
}

@keyframes top-right-panning {
  100% {
    opacity: 0;
  }

  1% {
    opacity: 1;
    top: 0%;
    left: 0%;
  }

  24% {
    top: -10%;
    left: 10%;
    opacity: 1;
  }

  25% {
    opacity: 0;
  }
}

@keyframes bottom-right-panning {
  24% {
    opacity: 0;
  }

  25% {
    opacity: 1;
    top: 0%;
    left: 0%;
  }

  49% {
    top: 10%;
    left: 10%;
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

@keyframes bottom-left-panning {
  49% {
    opacity: 0;
  }

  50% {
    opacity: 1;
    top: 0%;
    left: 0%;
  }

  74% {
    top: 10%;
    left: -10%;
    opacity: 1;
  }

  75% {
    opacity: 0;
  }
}

@keyframes top-left-panning {
  74% {
    opacity: 0;
  }

  75% {
    opacity: 1;
    top: 0%;
    left: 0%;
  }

  100% {
    top: -10%;
    left: -10%;
    opacity: 1;
  }

  101% {
    opacity: 0;
  }

  0% {
    opacity: 0;
  }
}

@keyframes slide-first {
  101% {
    top: -200%;
  }

  2% {
    top: 0;
  }

  23% {
    top: 0;
  }

  24% {
    top: -200%;
  }
}

@keyframes slide-second {
  24% {
    top: -200%;
  }

  25% {
    top: 0;
  }

  48% {
    top: 0;
  }

  49% {
    top: -200%;
  }
}

@keyframes slide-third {
  49% {
    top: -200%;
  }

  50% {
    top: 0;
  }

  73% {
    top: 0;
  }

  74% {
    top: -200%;
  }
}

@keyframes slide-fourth {
  74% {
    top: -200%;
  }

  75% {
    top: 0;
  }

  99% {
    top: 0;
  }

  0% {
    top: -200%;
  }

  100% {
    top: -200%;
  }
}

@keyframes hide-first {
  100% {
    opacity: 0;
  }

  1% {
    opacity: 1;
  }

  24% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }
}

@keyframes hide-second {
  24% {
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  49% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

@keyframes hide-third {
  49% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  74% {
    opacity: 1;
  }

  75% {
    opacity: 0;
  }
}

@keyframes hide-fourth {
  74% {
    opacity: 0;
  }

  75% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }

  101% {
    opacity: 0;
  }

  0% {
    opacity: 0;
  }
}
</style>


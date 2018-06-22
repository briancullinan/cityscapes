<template>
    <div class="features-container">
        <div class="background-wrapper">
            <img src="~public/envisor/envisor_20150118_180554_LLS_original.jpg" />
        </div>
        <div class="banner-box">
            <h1 class="angle-header">
                <strong>{{ product }} Features</strong>
                <i></i>
            </h1>
            <div class="features-wrapper">
                <h3 class="tagline">
                    THE LEADING ROOF SCREEN CHOICE OF ARCHITECTS, BUILDING<br> OWNERS AND CONTRACTORS FOR MORE THAN 20 YEARS.
                </h3>
                <ul class="features">
                    <li>
                        <strong>Made to order</strong>
                    </li>
                    <li>
                        <strong>Zero Rooftop Penetration</strong>
                    </li>
                    <li>
                        <strong>Professional grade extruded aluminum</strong> structural components</li>
                    <li>Patented
                        <strong>panel guide tracks</strong> for easy service access</li>
                    <li>Acrylicap® ABS with UV Co-Extruded cap on
                        <strong>both sides</strong>
                    </li>
                    <li>Vertical and canted system in variety of styles and colors</li>
                    <li>
                        <strong>Attach above the curb</strong> for best ventilation</li>
                    <li>
                        <strong>Resistant to mold and mildew growth</strong>
                    </li>
                    <li>
                        <strong>Resistance to wind pressure</strong>
                    </li>
                </ul>
                <div class="cta-box">
                    <router-link class="btn" to="">CONNECT WITH A PROJECT MANAGER</router-link>
                    <h3>Turn-key services include</h3>
                    <ul>
                        <li>Design</li>
                        <li>Construction</li>
                        <li>Manufacturing</li>
                        <li>Installation</li>
                        <li>Cost savings</li>
                    </ul>
                </div>
            </div>

            <div class="applications-wrapper">
                <h2>
                    <strong>Popular Applications</strong>
                </h2>
                <ul class="applications">
                    <li>RTUs</li>
                    <li>HVACs</li>
                    <li>Air Chillers</li>
                    <li>Air Handlers</li>
                    <li>Cooling Towers</li>
                    <li>Condensers</li>
                    <li>Exhaust Fans</li>
                    <li>Cellular</li>
                    <li>Equipment</li>
                    <li>Refrigeration Units</li>
                </ul>
                <router-link class="btn" to="gallery">Photo Gallery</router-link>
            </div>

            <div class="image-container">
                <h2>
                    <strong>Approved for use with popular brands</strong>
                </h2>
                <div class="image-wrapper">
                    <img src="~public/envisor/envisor-approved-logos1-2.jpg" />
                </div>
                <div class="image-wrapper">
                    <img src="~public/envisor/envisor-approved-logos2-2.jpg" />
                </div>
            </div>
        </div>

        <builder-menu></builder-menu>
    </div>
</template>

<script>
import BuilderMenu from "./BuilderMenu.vue";
const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

export default {
  name: "features",
  title: function() {
    return camelize(`${this.product} ${this.$options.name}`);
  },
  props: ["product"],
  components: { BuilderMenu }
};
</script>

<style lang="stylus">
.features-container {
    .background-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 60px;
        overflow: hidden;

        img {
            min-height: 120%;
            min-width: 120%;
            height: auto;
            width: auto;
            flex-shrink: 0;
        }
    }

    h1.angle-header {
        margin-top: 0;
        margin-bottom: 0;

        i {
            display: none;
        }
    }

    .features-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background: #076323;
        color: white;
        padding: 40px;

        h3.tagline {
            color: white;
        }
    }

    .banner-box {
        position: absolute;
        top: 100%;
        margin-top: -180px;
        padding-bottom: 60px;
    }

    .applications-wrapper {
        text-align: center;
        background: lightgray;
        padding: 40px;

        h2 strong {
            border-color: white;

            &:before, &:after {
                border-color: white;
            }
        }
    }

    .applications {
        list-style: none;
        margin: 0;
        padding: 40px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        align-items: center;
        justify-content: center;

        li {
            list-style: none;
            margin: 10px;
            padding: 10px;
            min-width: 150px;
            border-bottom: 2px solid white;
            display: inline-block;
        }
    }

    .image-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background: white;
    }

    .image-wrapper {
        padding: 40px;
        flex-basis: 50%;
        text-align: center;

        img {
            max-width: 100%;
        }
    }

    .cta-box {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 2px;
    }

    .features, .cta-box, .image-box {
        flex-basis: 50%;
        width: 50%;
        text-align: center;
        padding: 20px 40px;

        li {
            text-align: left;
        }
    }

    h2, .tagline {
        width: 100%;
        text-align: center;
    }

    @media (max-width: 800px) {
        .features, .cta-box, .image-box {
            flex-basis: 100%;
            width: 100%;
        }

        .cta-box {
            position: absolute;
            top: auto;
            left: 0;
            right: 0;
            bottom: 100%;
        }
    }

    @media (max-height: 500px) {
        .background-wrapper {
            bottom: 38px;
        }

        .image-wrapper {
            flex-basis: 100%;
        }

        .banner-box {
            margin-top: -38px;
        }
    }
}
</style>


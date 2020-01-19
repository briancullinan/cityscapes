<template>
    <div class="product-container">
        <h1 class="angle-header">
            <strong>
                <a name="products">Our Products</a>
            </strong>
            <i></i>
        </h1>
        <div class="su-row products">
            <div class="su-column">
                <div class="su-column-inner">
                    <p>
                        <router-link to="/envisor/"><img class="size-full wp-image-5292 aligncenter" src="~public/roof_screens_envisor.jpg" alt="Envisor rooftop screens" width="400" height="175"></router-link>
                    </p>
                    <h3 class="p1">ROOFTOP SCREENS</h3>
                    <p class="p2">Industry standard unit-mounted screens with zero roof penetration while maintaining warranties.</p>
                    <p>
                        <router-link to="/envisor/" class="product-btn">Learn more</router-link>
                    </p>
                </div>
            </div>
            <div class="su-column">
                <div class="su-column-inner">
                    <p>
                        <router-link to="/covrit/"><img class="size-full wp-image-5288 aligncenter" src="~public/dumpster_enclosures_covrit.jpg" alt="Covrit dumpster enclosures" width="400" height="175"></router-link>
                    </p>
                    <h3 class="p1">DUMPSTER ENCLOSURES</h3>
                    <p class="p1">Gates and ground screens combine for a complete enclosure in standard or custom sizes.</p>
                    <p>
                        <router-link to="/covrit/" class="product-btn">Learn more</router-link>
                    </p>
                </div>
            </div>
            <div class="su-column">
                <div class="su-column-inner">
                    <p>
                        <router-link to="/covrit/"><img class="size-full wp-image-5290 aligncenter" src="~public/ground_screens_Covrit-Carmel-HS.jpg" alt="Covrit ground screens" width="400" height="175"></router-link>
                    </p>
                    <h3 class="p1">GROUND SCREENS</h3>
                    <p class="p2">Choose from a variety of design options to hide unsightly equipment and maintain aesthetic.</p>
                    <p>
                        <router-link to="/covrit/" class="product-btn">Learn more</router-link>
                    </p>
                </div>
            </div>
            <div class="su-column">
                <div class="su-column-inner">
                    <p>
                        <router-link to="/naturescreen/"><img class="size-full wp-image-5293 aligncenter" src="~public/trellis_systems_naturescreen_0X6A7203.jpg" alt="Naturescreen trellis systems" width="400" height="175"></router-link>
                    </p>
                    <h3 class="p1">TRELLIS SYSTEMS</h3>
                    <p class="p2">One of the strongest modular trellis systems available with wall- or ground-mounted options.</p>
                    <p>
                        <router-link to="/naturescreen/" class="product-btn">Learn more</router-link>
                    </p>
                </div>
            </div>
            <div class="su-column">
                <div class="su-column-inner">
                    <p>
                        <router-link to="/planx/"><img class="size-full wp-image-5291 aligncenter" src="~public/planters_raised_beds.jpg" alt="Planx planters and raised beds" width="400" height="175"></router-link>
                    </p>
                    <h3 class="p1">PLANTERS &amp; RAISED BEDS</h3>
                    <p class="p2">Long-lasting, fully-customizable raised beds and planters with a wide variety of enhancements.</p>
                    <p>
                        <router-link to="/planx/" class="product-btn">Learn more</router-link>
                    </p>
                </div>
            </div>
            <div class="su-column">
                <div class="su-column-inner">
                    <p>
                        <router-link to="/toughgate/"><img class="size-full wp-image-5289 aligncenter" src="~public/gates_doors_toughgate_Menomonee-Falls.jpg" alt="ToughGate gates and doors" width="400" height="175"></router-link>
                    </p>
                    <h3 class="p1">GATES &amp; DOORS</h3>
                    <p class="p2">Tough, durable gates with customizable options for use with new or existing enclosures.</p>
                    <p>
                        <router-link to="/toughgate/" class="product-btn">Learn more</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "product-menu",
  props: ["show"],
  serverCacheKey: props => props.show
};
</script>

<style lang="stylus">
.product-container {
    .products {
        display: flex;
        flex-wrap: wrap;
    }

    .su-column {
        flex-basis: 33.3%;
        display: flex;
        flex-direction: column;
    }

    .su-column-inner {
        padding: 20px;
        display: flex;
        flex-direction: column;
        flex-basis: 100%;

        & > * {
            flex-basis: 100%;
        }

        p:last-of-type {
            flex-basis: 20px;
            text-align: center;
        }

        a.product-btn {
            border: 1px solid #076323;
            color: #076323;
            padding: 5px;
        }
    }

    img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 800px) {
        .su-column {
            flex-basis: 100%;
        }
    }
}
</style>

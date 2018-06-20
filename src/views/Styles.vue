<template>
    <div class="styles-container">
        <div class="preview_image">
            <img class="preview img-responsive center-block" alt="preview" src="~public/envisor/full-body_louver-FEFCFD-trim_band-FEFCFD.png">
        </div>

        <h1 class="text-center color_title">
            <span class="brand-outline lg-half">STEP 1</span>
            <span class="brand-green light">PANEL STYLE and COLOR</span>
        </h1>

        <h4>Acrylicap
            <sup>®</sup>
        </h4>
        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="louver" src="~public/envisor/louver.png" height="70px">
                <span class="body-name">Louver</span><br>
                <input name="body_style" type="radio" value="louver" checked="">
            </label>
        </div>

        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="horizontal_rib" src="~public/envisor/horizontal_rib.png" height="70px">
                <span class="body-name">Horizontal Rib</span><br>
                <input name="body_style" type="radio" value="horizontal_rib">
            </label>
        </div>

        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="brick" src="~public/envisor/brick.png" height="70px">
                <span class="body-name">Brick</span><br>
                <input name="body_style" type="radio" value="brick">
            </label>
        </div>

        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="72_rib" src="~public/envisor/72_rib.png" height="70px">
                <span class="body-name">72 Rib</span><br>
                <input name="body_style" type="radio" value="72_rib">
            </label>
        </div>

        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="pan" src="~public/envisor/pan.png" height="70px">
                <span class="body-name">Pan</span><br>
                <input name="body_style" type="radio" value="pan">
            </label>
        </div>

        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="forrest" src="~public/envisor/forrest.png" height="70px">
                <span class="body-name">Forrest</span><br>
                <input name="body_style" type="radio" value="forrest">
            </label>
        </div>

        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="batten" src="~public/envisor/batten.png" height="70px">
                <span class="body-name">Batten</span><br>
                <input name="body_style" type="radio" value="batten">
            </label>
        </div>

        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="vertical_rib" src="~public/envisor/vertical_rib.png" height="70px">
                <span class="body-name">Vertical Rib</span><br>
                <input name="body_style" type="radio" value="vertical_rib">
            </label>
        </div>

        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="deboss_block" src="~public/envisor/deboss_block.png" height="70px">
                <span class="body-name">Deboss Block</span><br>
                <input name="body_style" type="radio" value="deboss_block">
            </label>
        </div>

        <h4>Metal</h4>
        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="72_rib_metal" src="~public/envisor/72_rib_metal.png" height="70px">
                <span class="body-name">72 Rib Metal</span><br>
                <input name="body_style" type="radio" value="72_rib_metal">
            </label>
        </div>

        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="pan_metal" src="~public/envisor/pan_metal.png" height="70px">
                <span class="body-name">Pan Metal</span><br>
                <input name="body_style" type="radio" value="pan_metal">
            </label>
        </div>

        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="vertical_rib_metal" src="~public/envisor/vertical_rib_metal.png" height="70px">
                <span class="body-name">Vertical Rib Metal</span><br>
                <input name="body_style" type="radio" value="vertical_rib_metal">
            </label>
        </div>

        <div class="cap">
            <label for="body_style">
                <img class="img-radio" alt="perforated_metal" src="~public/envisor/perforated_metal.png" height="70px">
                <span class="body-name">Perforated Metal</span><br>
                <input name="body_style" type="radio" value="perforated_metal">
            </label>
        </div>

        <h2 class="text-center">
            <span class="brand-green">COLORS&nbsp;</span>
            <small class="italic">Standard and Made to Order</small>
        </h2>

        <div class="color">
            <label for="body_color">
                <div class="color-box img-radio" data-color="#FEFCFD" style="background-color: rgb(254, 252, 253);"></div>
                <span class="color-name">Alabaster </span>
                <input name="body_color" type="radio" value="alabaster" checked="">
            </label>
        </div>
        <div class="color">
            <label for="body_color">
                <div class="color-box img-radio" data-color="#E7E6CA" style="background-color: rgb(231, 230, 202);"></div>
                <span class="color-name">Almond </span>
                <input name="body_color" type="radio" value="almond">
            </label>
        </div>
        <div class="color">
            <label for="body_color">
                <div class="color-box img-radio" data-color="#B7B294" style="background-color: rgb(183, 178, 148);"></div>
                <span class="color-name">Cypress Moss </span>
                <input name="body_color" type="radio" value="cypress_moss">
            </label>
        </div>
        <div class="color">
            <label for="body_color">
                <div class="color-box img-radio" data-color="#2B4731" style="background-color: rgb(43, 71, 49);"></div>
                <span class="color-name">Forrest Green </span>
                <input name="body_color" type="radio" value="forrest_green">
            </label>
        </div>
        <div class="color">
            <label for="body_color">
                <div class="color-box img-radio" data-color="#D8D2C6" style="background-color: rgb(216, 210, 198);"></div>
                <span class="color-name">Shadow Gray </span>
                <input name="body_color" type="radio" value="shadow_gray">
            </label>
        </div>
        <div class="color">
            <label for="body_color">
                <div class="color-box img-radio" data-color="#766D5B" style="background-color: rgb(118, 109, 91);"></div>
                <span class="color-name">Slate Gray </span>
                <input name="body_color" type="radio" value="slate_gray">
            </label>
        </div>
        <div class="color">
            <label for="body_color">
                <div class="color-box img-radio" data-color="#B2A088" style="background-color: rgb(178, 160, 136);"></div>
                <span class="color-name">Oyster </span>
                <input name="body_color" type="radio" value="oyster">
            </label>
        </div>
        <div class="color">
            <label for="body_color">
                <div class="color-box img-radio" data-color="#E6DDCB" style="background-color: rgb(230, 221, 203);"></div>
                <span class="color-name">Putty </span>
                <input name="body_color" type="radio" value="putty">
            </label>
        </div>
        <div class="color">
            <label for="body_color">
                <div class="color-box img-radio" data-color="#7D432D" style="background-color: rgb(125, 67, 45);"></div>
                <span class="color-name">Ranchero Red </span>
                <input name="body_color" type="radio" value="ranchero_red">
            </label>
        </div>
        <div class="color">
            <label for="body_color">
                <div class="color-box img-radio" data-color="#BD9861" style="background-color: rgb(189, 152, 97);"></div>
                <span class="color-name">Sagebrush </span>
                <input name="body_color" type="radio" value="sagebrush">
            </label>
        </div>
        <div class="color">
            <label for="body_color">
                <div class="color-box img-radio" data-color="#D4B98C" style="background-color: rgb(212, 185, 140);"></div>
                <span class="color-name">Khaki </span>
                <input name="body_color" type="radio" value="khaki">
            </label>
        </div>
        <div class="color">
            <label for="body_color">
                <div class="color-box img-radio" data-color="#493420" style="background-color: rgb(73, 52, 32);"></div>
                <span class="color-name">Mansard Brown </span>
                <input name="body_color" type="radio" value="mansard_brown">
            </label>
        </div>

        <p class="text-center">
            <i>
                For information on custom graphic options, call us at: 1.877.727.3367
            </i>
        </p>

        <h1 class="text-center">
            <span class="brand-outline lg-half">STEP 2</span>
            <span class="brand-green light">TRIM CAP STYLE and COLOR</span>
        </h1>

        <div class="trim">
            <label for="trim_style">
                <img class="img-radio" alt="band" src="~public/envisor/band.png" height="80px"><br>
                <div class="body-name">Band</div>
                <input name="trim_style" type="radio" value="band" checked="">
            </label>
        </div>
        <div class="trim">
            <label for="trim_style">
                <img class="img-radio" alt="step2" src="~public/envisor/step2.png" height="80px"><br>
                <div class="body-name">Step 2</div>
                <input name="trim_style" type="radio" value="step2">
            </label>
        </div>
        <div class="trim">
            <label for="trim_style">
                <img class="img-radio" alt="step3" src="~public/envisor/step3.png" height="80px"><br>
                <div class="body-name">Step 3</div>
                <input name="trim_style" type="radio" value="step3">
            </label>
        </div>
        <div class="trim">
            <label for="trim_style">
                <img class="img-radio" alt="alamo" src="~public/envisor/alamo.png" height="80px"><br>
                <div class="body-name">Alamo</div>
                <input name="trim_style" type="radio" value="alamo">
            </label>
        </div>
        <div class="trim">
            <label for="trim_style">
                <img class="img-radio" alt="cove" src="~public/envisor/cove.png" height="80px"><br>
                <div class="body-name">Cove</div>
                <input name="trim_style" type="radio" value="cove">
            </label>
        </div>
        <!-- END FOREACH -->

        <h2 class="text-center">
            <span class="brand-green">COLORS&nbsp;</span>
            <small class="italic">Standard and Made to Order</small>
        </h2>

        <div class="color">
            <label for="trim_color">
                <div class="color-box img-radio" data-color="#FEFCFD" style="background-color: rgb(254, 252, 253);"></div>
                <span class="color-name">Alabaster </span>
                <input name="trim_color" type="radio" value="alabaster" checked="">
            </label>
        </div>
        <div class="color">
            <label for="trim_color">
                <div class="color-box img-radio" data-color="#E7E6CA" style="background-color: rgb(231, 230, 202);"></div>
                <span class="color-name">Almond </span>
                <input name="trim_color" type="radio" value="almond">
            </label>
        </div>
        <div class="color">
            <label for="trim_color">
                <div class="color-box img-radio" data-color="#B7B294" style="background-color: rgb(183, 178, 148);"></div>
                <span class="color-name">Cypress Moss </span>
                <input name="trim_color" type="radio" value="cypress_moss">
            </label>
        </div>
        <div class="color">
            <label for="trim_color">
                <div class="color-box img-radio" data-color="#2B4731" style="background-color: rgb(43, 71, 49);"></div>
                <span class="color-name">Forrest Green </span>
                <input name="trim_color" type="radio" value="forrest_green">
            </label>
        </div>
        <div class="color">
            <label for="trim_color">
                <div class="color-box img-radio" data-color="#D8D2C6" style="background-color: rgb(216, 210, 198);"></div>
                <span class="color-name">Shadow Gray </span>
                <input name="trim_color" type="radio" value="shadow_gray">
            </label>
        </div>
        <div class="color">
            <label for="trim_color">
                <div class="color-box img-radio" data-color="#766D5B" style="background-color: rgb(118, 109, 91);"></div>
                <span class="color-name">Slate Gray </span>
                <input name="trim_color" type="radio" value="slate_gray">
            </label>
        </div>
        <div class="color">
            <label for="trim_color">
                <div class="color-box img-radio" data-color="#B2A088" style="background-color: rgb(178, 160, 136);"></div>
                <span class="color-name">Oyster </span>
                <input name="trim_color" type="radio" value="oyster">
            </label>
        </div>
        <div class="color">
            <label for="trim_color">
                <div class="color-box img-radio" data-color="#E6DDCB" style="background-color: rgb(230, 221, 203);"></div>
                <span class="color-name">Putty </span>
                <input name="trim_color" type="radio" value="putty">
            </label>
        </div>
        <div class="color">
            <label for="trim_color">
                <div class="color-box img-radio" data-color="#7D432D" style="background-color: rgb(125, 67, 45);"></div>
                <span class="color-name">Ranchero Red </span>
                <input name="trim_color" type="radio" value="ranchero_red">
            </label>
        </div>
        <div class="color">
            <label for="trim_color">
                <div class="color-box img-radio" data-color="#BD9861" style="background-color: rgb(189, 152, 97);"></div>
                <span class="color-name">Sagebrush </span>
                <input name="trim_color" type="radio" value="sagebrush">
            </label>
        </div>
        <div class="color">
            <label for="trim_color">
                <div class="color-box img-radio" data-color="#D4B98C" style="background-color: rgb(212, 185, 140);"></div>
                <span class="color-name">Khaki </span>
                <input name="trim_color" type="radio" value="khaki">
            </label>
        </div>
        <div class="color">
            <label for="trim_color">
                <div class="color-box img-radio" data-color="#493420" style="background-color: rgb(73, 52, 32);"></div>
                <span class="color-name">Mansard Brown </span>
                <input name="trim_color" type="radio" value="mansard_brown">
            </label>
        </div>

        <p class="text-center">
            <i>
                For information on custom graphic options, call us at: 1.877.727.3367
            </i>
        </p>

        <h1 class="text-center">
            <span class="brand-outline lg-half">STEP 3</span>
            <span class="brand-green light">SAVE and SHARE</span>
        </h1>

        <div class="col-xs-4">
            Share your design with your network, Save multiple drafts for future projects and, when you're ready, send to our project management team.
        </div>

        <builder-menu></builder-menu>
    </div>
</template>

<style lang="stylus">
.styles-container {
    background: white;
}

.brand-outline {
    color: white;
    text-shadow: 1px 1px 0 #0B5E24, -1px -1px 0 #0B5E24, 1px -1px 0 #0B5E24, -1px 1px 0 #0B5E24, 1px 1px 0 #0B5E24;
}
</style>

<script>
import BuilderMenu from "./BuilderMenu.vue";

export default {
  name: "styles",
  props: ["product"],
  components: { BuilderMenu }
};
</script>

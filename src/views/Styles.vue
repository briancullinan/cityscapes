<template>
  <div class="styles-container">
    <div class="preview-image">
    </div>

    <div class="styles-wrapper">
      <h1 class="angle-header">
        <strong>{{ product }} Options</strong>
        <i></i>
      </h1>

      <h2 class="brand-outline">STEP 1</h2>
      <h3>PANEL STYLE and COLOR</h3>

      <div class="color-wrapper">
        <div class="color">
          <label for="body_color">
            <div class="color-box img-radio" data-color="#FEFCFD" style="background-color: rgb(254, 252, 253);"></div>
            <span class="color-name">Alabaster </span>
            <input name="body_color" type="radio" value="alabaster" v-model="body_color" checked="">
          </label>
        </div>
        <div class="color">
          <label for="body_color">
            <div class="color-box img-radio" data-color="#E7E6CA" style="background-color: rgb(231, 230, 202);"></div>
            <span class="color-name">Almond </span>
            <input name="body_color" type="radio" value="almond" v-model="body_color">
          </label>
        </div>
        <div class="color">
          <label for="body_color">
            <div class="color-box img-radio" data-color="#B7B294" style="background-color: rgb(183, 178, 148);"></div>
            <span class="color-name">Cypress Moss </span>
            <input name="body_color" type="radio" value="cypress_moss" v-model="body_color">
          </label>
        </div>
        <div class="color">
          <label for="body_color">
            <div class="color-box img-radio" data-color="#2B4731" style="background-color: rgb(43, 71, 49);"></div>
            <span class="color-name">Forrest Green </span>
            <input name="body_color" type="radio" value="forrest_green" v-model="body_color">
          </label>
        </div>
        <div class="color">
          <label for="body_color">
            <div class="color-box img-radio" data-color="#D8D2C6" style="background-color: rgb(216, 210, 198);"></div>
            <span class="color-name">Shadow Gray </span>
            <input name="body_color" type="radio" value="shadow_gray" v-model="body_color">
          </label>
        </div>
        <div class="color">
          <label for="body_color">
            <div class="color-box img-radio" data-color="#766D5B" style="background-color: rgb(118, 109, 91);"></div>
            <span class="color-name">Slate Gray </span>
            <input name="body_color" type="radio" value="slate_gray" v-model="body_color">
          </label>
        </div>
        <div class="color">
          <label for="body_color">
            <div class="color-box img-radio" data-color="#B2A088" style="background-color: rgb(178, 160, 136);"></div>
            <span class="color-name">Oyster </span>
            <input name="body_color" type="radio" value="oyster" v-model="body_color">
          </label>
        </div>
        <div class="color">
          <label for="body_color">
            <div class="color-box img-radio" data-color="#E6DDCB" style="background-color: rgb(230, 221, 203);"></div>
            <span class="color-name">Putty </span>
            <input name="body_color" type="radio" value="putty" v-model="body_color">
          </label>
        </div>
        <div class="color">
          <label for="body_color">
            <div class="color-box img-radio" data-color="#7D432D" style="background-color: rgb(125, 67, 45);"></div>
            <span class="color-name">Ranchero Red </span>
            <input name="body_color" type="radio" value="ranchero_red" v-model="body_color">
          </label>
        </div>
        <div class="color">
          <label for="body_color">
            <div class="color-box img-radio" data-color="#BD9861" style="background-color: rgb(189, 152, 97);"></div>
            <span class="color-name">Sagebrush </span>
            <input name="body_color" type="radio" value="sagebrush" v-model="body_color">
          </label>
        </div>
        <div class="color">
          <label for="body_color">
            <div class="color-box img-radio" data-color="#D4B98C" style="background-color: rgb(212, 185, 140);"></div>
            <span class="color-name">Khaki </span>
            <input name="body_color" type="radio" value="khaki" v-model="body_color">
          </label>
        </div>
        <div class="color">
          <label for="body_color">
            <div class="color-box img-radio" data-color="#493420" style="background-color: rgb(73, 52, 32);"></div>
            <span class="color-name">Mansard Brown </span>
            <input name="body_color" type="radio" value="mansard_brown" v-model="body_color">
          </label>
        </div>
      </div>

    </div>

    <builder-menu></builder-menu>
  </div>
</template>

<style lang="stylus">
.styles-container {
  .preview-image {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    max-height: 100%;
    position: fixed;
    top: 92px;
    right: 0;
    left: 0;
    bottom: 60px;

    img {
      min-height: 100%;
      min-width: 100%;
      height: auto;
      width: auto;
      flex-shrink: 0;
    }
  }

  .styles-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    bottom: auto;
    padding: 60px 0 80px;
    background: white;
  }

  h2, h3 {
    padding: 20px;
  }

  .color-wrapper {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;

    .color {
      text-align: center;
      flex-basis: 50%;
    }
  }

  .color-box {
    height: 60px;
    width: 60px;
    margin: 0 auto;
  }

  .brand-outline {
    color: white;
    text-shadow: 1px 1px 0 #0B5E24, -1px -1px 0 #0B5E24, 1px -1px 0 #0B5E24, -1px 1px 0 #0B5E24, 1px 1px 0 #0B5E24;
  }
}
</style>

<script>
import BuilderMenu from "./BuilderMenu.vue";
import * as THREE from "three";
import collada from "three-loaders-collada";
collada(THREE);

export default {
  name: "styles",
  props: ["product"],
  components: { BuilderMenu },
  data() {
    return {
      body_color: "alabaster"
    };
  },
  mounted: function() {
    this.load3D();
  },
  watch: {
    body_color: function () {
      this.updateMaterial(this.cube, this.getRGBOption(this.body_color))
    }
  },
  methods: {
    getRGBOption(color) {
      var selected = document.evaluate(
        '//input[contains(@value, "' + color + '")]/parent::label/*[contains(@class, "color-box")]/@data-color',
        document,
        null,
        XPathResult.STRING_TYPE
      );
      return this.hexToRgb(selected.stringValue);
    },
    updateMaterial: function(cube, rgb) {
      if (cube.material) {
        let materials = cube.material.name ? [cube.material] : cube.material;
        //cube.mergeVertices();
        //cube.computeVertexNormals();
        for (var i in materials) {
          if (!materials[i]) continue;
          if (materials[i].name == "__City_Brown") {
            //materials[i].emissiveIntensity = .8;
            //materials[i].dithering = true;
            materials[i].color.setRGB.apply(materials[i].color, [
              rgb.r / 255,
              rgb.g / 255,
              rgb.b / 255
            ]);
            materials[i].needsUpdate = true;
          }
        }
      }
      for (var o in cube.children) {
        this.updateMaterial(cube.children[o], rgb);
      }
    },
    hexToRgb: function(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          }
        : null;
    },
    setCamera: function(camera, cube) {
      const offset = 4.5;
      const boundingBox = new THREE.Box3();
      boundingBox.setFromObject(cube);
      const center = boundingBox.getCenter();
      const size = boundingBox.getSize();

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2));
      cameraZ *= offset;

      camera.position.z = 1 + center.z;
      //camera.position.x = -center.x;
      camera.position.y = -1.5;

      const minZ = boundingBox.min.z;
      const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ;
      camera.far = cameraToFarEdge * 3;

      camera.updateProjectionMatrix();
      camera.lookAt(new THREE.Vector3(0, 0, center.z));
    },
    animate: function(that) {
      if (!that.stop) {
        requestAnimationFrame(() => that.animate(that));
      }
      that.cube.rotation.z += 0.01;
      that.renderer.render(that.scene, that.camera);
    },
    beforeDestroy: function() {
      console.log("stopping");
      this.stop = true;
    },
    setLight: function(that) {
      var light = new THREE.PointLight(0xffffff, 2, 0, 0.5);
      light.position.set(-50, -200, 300);
      light.lookAt(new THREE.Vector3(0, 0, 0));
      that.scene.add(light);
    },
    mount3D: function(that) {
      that.renderer.setSize(window.innerWidth, window.innerHeight - 120);
      document
        .getElementsByClassName("preview-image")[0]
        .appendChild(that.renderer.domElement);
    },
    load3D: function() {
      this.scene = new THREE.Scene();
      var loader = new THREE.ColladaLoader();
      var that = this;
      this.renderer = new THREE.WebGLRenderer({ alpha: true });

      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      loader.load(
        "/public/planx/Planx_RaisedBed_24x48_CedarPlanks_CityBrownPosts.dae",
        function(result) {
          that.cube = result.scene;
          that.updateMaterial(that.cube, that.getRGBOption(that.body_color))
          that.scene.add(that.cube);
          that.setLight(that);
          that.cube.add(new THREE.AxesHelper(50));
          that.setCamera(that.camera, that.cube);
          that.mount3D(that);
          that.animate(that);
        }
      );
    }
  }
};
</script>

<template>
  <div class="styles-container">
    <div class="preview-image">
    </div>

    <div class="styles-wrapper">
      <h1 class="angle-header">
        <strong>{{ product }} Styles</strong>
        <i></i>
      </h1>

      <h2 class="brand-outline">STEP 2</h2>
      <styles-post-colors v-model="post_color"></styles-post-colors>

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

  h1 {
    margin-top: 0;
  }

  h2, h3 {
    padding: 0;
    margin: 0;
  }

  .color-wrapper {
    padding: 20px;

    li {
      text-align: center;
      width: 50%;
      list-style: none;
      margin: 0;
      padding: 60px 0 0;
    }

    .md-radio .md-radio-label {
      padding-left: 0;
    }

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      list-style: none;
    }
  }

  .color-box {
    height: 60px;
    width: 60px;
    margin: -60px auto 0;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  }

  .brand-outline {
    color: white;
    text-shadow: 1px 1px 0 #0B5E24, -1px -1px 0 #0B5E24, 1px -1px 0 #0B5E24, -1px 1px 0 #0B5E24, 1px 1px 0 #0B5E24;
  }

  @media (max-width: 800px) {
    .styles-wrapper {
      top: 100%;
      margin-top: -160px;
      left: 0;
      width: 100%;
      padding-top: 0;
    }

    h1.angle-header:after {
      top: -10px;
    }

    h1.angle-header {
      margin-top: 0;
      margin-bottom: 0;
    }

    .color-wrapper {
      .color {
        width: 25%;
      }
    }
  }
}
</style>

<script>
import BuilderMenu from "./BuilderMenu.vue";
import StylesPostColors from "./StylesPostColors.vue";
import * as THREE from "three";
import { ColladaLoader } from "../util/ColladaLoader";
const camelize = str => str.charAt(0).toUpperCase() + str.slice(1);

export default {
  name: "styles",
  title: function() {
    return camelize(`${this.product} ${this.$options.name}`);
  },
  props: ["product"],
  components: { BuilderMenu, StylesPostColors },
  data() {
    return {
      post_color: "#000000"
    };
  },
  mounted: function() {
    this.load3D();
    window.addEventListener("resize", this.updateWindowSize);
  },
  watch: {
    post_color: function() {
      this.updateMaterial(this.cube, this.hexToRgb(this.post_color));
    }
  },
  beforeDestroy: function() {
    this.stop = true;
    window.removeEventListener("resize", this.updateWindowSize);
  },
  methods: {
    updateWindowSize: function () {
      var container = document.getElementsByClassName("preview-image")[0];
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();
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
      const offset = 0;
      const boundingBox = new THREE.Box3();
      boundingBox.setFromObject(cube);
      const center = boundingBox.getCenter();
      const size = boundingBox.getSize();

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2));
      cameraZ *= offset;

      camera.position.z = cameraZ;
      camera.position.x = 1;
      camera.position.y = 1.5;

      const minZ = boundingBox.min.z;
      const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ;
      camera.far = cameraToFarEdge * 3;

      camera.updateProjectionMatrix();
      camera.lookAt(new THREE.Vector3(0, center.y, 0));
    },
    animate: function(that) {
      if (!that.stop) {
        requestAnimationFrame(() => that.animate(that));
      }
      that.cube.rotation.z += 0.01;
      that.renderer.render(that.scene, that.camera);
    },
    setLight: function(that) {
      var light = new THREE.PointLight(0xffffff, 1.5, 0, 0.5);
      light.position.set(300, 300, 100);
      light.lookAt(new THREE.Vector3(0, 0, 0));
      that.scene.add(light);
    },
    mount3D: function(that) {
      that.updateWindowSize.apply(that);
      document
        .getElementsByClassName("preview-image")[0]
        .appendChild(that.renderer.domElement);
    },
    load3D: function() {
      this.scene = new THREE.Scene();
      var loader = new ColladaLoader();
      var that = this;
      this.renderer = new THREE.WebGLRenderer({ alpha: true });
      this.camera = new THREE.PerspectiveCamera(
        75,
        4/3,
        0.1,
        1000
      );

      loader.load(
        "../../public/envisor/envisor-canted.dae",
        function(result) {
          that.cube = result.scene;
          that.updateMaterial(that.cube, that.hexToRgb(that.post_color));
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

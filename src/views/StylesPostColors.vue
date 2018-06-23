<template>
    <div class="color-wrapper">
        <h3>Post Colors</h3>

        <ul class="colors swatch">
            <li>
                <md-radio value="#fefcfd" v-model="post_color">
                    <div class="color-box" style="background-color: #fefcfd"></div>
                    <span>White</span>
                </md-radio>
            </li>
            <li>
                <md-radio value="#000000" v-model="post_color">
                    <div class="color-box" style="background-color: #000000;"></div>
                    <span>Satin Black</span>
                </md-radio>
            </li>
            <li>
                <md-radio value="#2b4731" v-model="post_color">
                    <div class="color-box" style="background-color: #2b4731;"></div>
                    <span>City Green</span>
                </md-radio>
            </li>
            <li>
                <md-radio value="#4f382d" v-model="post_color">
                    <div class="color-box" style="background-color: #4f382d"></div>
                    <span>City Brown</span>
                </md-radio>
            </li>
            <li>
                <md-radio value="#cccccc" v-model="post_color">
                    <div class="color-box" style="background-color: #cccccc;"></div>
                    <span>Silver</span>
                </md-radio>
            </li>
        </ul>
    </div>
</template>

<style lang="stylus">
</style>

<script>
import Vue from "vue";
import { MdRadio } from "vue-material/dist/components";
Vue.use(MdRadio);

export default {
  name: "styles-post-colors",
  props: ['value'],
  data() {
    return {
      post_color: this.value
    };
  },
  watch: {
      post_color: function() {
          this.$emit('input', this.post_color);
      }
  }
};
</script>


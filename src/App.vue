<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="~public/cityscapes-logo.svg" alt="logo">
        </router-link>
        <router-link to="/">Products</router-link>
        <router-link to="/new">Brochures</router-link>
        <router-link to="/show">Photo Gallery</router-link>
        <router-link to="/ask">Revit / CAD</router-link>
        <router-link to="/job">Help &amp; Info</router-link>
        <router-link to="" class="menuBtn" @click.native="showMenu">&#9776;</router-link>
      </nav>
    </header>
    <div class="drawer">
      <router-link to="" class="menuBtn" @click.native="hideMenu">&nbsp;</router-link>
      <nav>
        <router-link to="/top" @click.native="hideMenu">Products</router-link>
        <router-link to="/new" @click.native="hideMenu">Brochures</router-link>
        <router-link to="/show" @click.native="hideMenu">Photo Gallery</router-link>
        <router-link to="/ask" @click.native="hideMenu">Revit / CAD</router-link>
        <router-link to="/job" @click.native="hideMenu">Help &amp; Info</router-link>
      </nav>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('drawer')[0].classList.remove('is-visible')
    },
    showMenu: function () {
      document.getElementsByClassName('drawer')[0].classList.add('is-visible')
    }
  }
}
</script>
<style lang="stylus">
body, html
  margin 0
  padding 0
  height 100%
  width 100%

body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  color #34495e
  overflow-y scroll

#app
  display flex
  flex-direction column
  height 100%

a
  color #34495e
  text-decoration none

.is-visible ~ *
  max-height 100%;
  overflow hidden

.drawer ~ *
  padding-top 92px
  flex-basis 100%

.header
  background-color white
  position fixed
  z-index 999
  height 92px
  top 0
  left 0
  right 0
  .inner
    max-width 800px
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
  a
    color #0B5E24
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    &:hover
      color #0B5E24
    &.router-link-active
      color #0B5E24
      font-weight 400
    &:nth-child(6)
      margin-right 0
  .menuBtn
    display none
    float right
    font-size 30px
    margin:20px 0

.drawer
  top 0
  bottom 0
  left 0
  right 0
  z-index 1000
  position fixed
  overflow hidden
  visibility hidden
  &.is-visible
    visibility visible
  &.is-visible nav
    width 200px
  nav
    white-space nowrap
    width 0
    height 100%
    background-color white
    transition ease-in-out .15s
  a
    display block
    padding 10px 20px
  a:hover:not(.menuBtn)
    background-color rgba(0,0,0,.2)
  .menuBtn
    background-color rgba(0,0,0,.5)
    position absolute
    left 0
    top 0
    right 0
    bottom 0
    z-index -1

.logo
  width 200px
  margin-right 10px
  display inline-block
  vertical-align middle

.view
  max-width 800px
  margin 0 auto
  position relative
  width 100%

.fade-enter-active, .fade-leave-active
  transition all .2s ease

.fade-enter, .fade-leave-active
  opacity 0

@media (max-width 1000px)
  .header
    .menuBtn
      display inline-block
    a:not(:first-of-type):not(:last-of-type)
      display none
    .github
      display none
</style>

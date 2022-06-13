<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />

      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <!-- <router-view v-slot="{Component}">
  <transition name="route" mode="out-in">
    <component :is="Component"></component>
  </transition>
</router-view> -->
      <div>
        <router-view name="footer" to @click="moveUp">MoveUp</router-view>
      </div>
      <!-- <router-view to @click="moveUp" name="footer" /> -->
    </div>
  </div>
</template>

<script>
export default{

 methods:{
      moveUp(){
           window.scrollTo(0,0);
      }
  }
}

</script>
<style></style>

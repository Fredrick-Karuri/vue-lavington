<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />

      <transition name="fade" mode="out-in" >
        <router-view />
      </transition>
      <router-view name="footer" />
    </div>
  </div>
</template>

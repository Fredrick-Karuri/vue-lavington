<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>

    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">

       
          <myCarousel />
        <div
          :style="{ 'background-image': 'url(@/assets/img/beauty/flower.jpg)' }"
        ></div>
      </div>
       </div>
    </div>
  </div>
</template>

<script>
import myCarousel from '../components/myCarousel.vue'

export default {
  components: {
    myCarousel
  },
  bodyClass: 'profile-page',

  data () {
    return {
      classicModal: false,
      selectedDate: new Date('2018/03/26')
    }
  },
  methods: {
    classicModalHide () {
      this.classicModal = false
    }
  },
  props: {
    header: {
      type: String,
      default: require('@/assets/img/background/house1.jpeg')
    },
    img: {
      type: String,
      default: require('@/assets/img/faces/christian.jpg')
    }
  },
  computed: {
    headerStyle () {
      return {
        backgroundImage: `url(${this.header})`
      }
    }
  }
}
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}
.section {
  padding: 0;
}


@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>

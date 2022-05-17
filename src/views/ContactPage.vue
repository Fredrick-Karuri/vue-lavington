<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="tim-typo">
                <h3 class="title"><span></span>Contact Us</h3>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <div id="images">
              <iframe
                src="https://maps.google.com/maps?q=pathway%20Ngong'%20road%20-Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="yes"
                marginheight="0"
                marginwidth="0"
                
                :class="{ 'responsive-image': responsive }"
              ></iframe
              ><a
                href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"
              ></a>
              <br />

              <a href="https://www.embedgooglemap.net"></a>
            </div>
            <!-- <span class="tim-note">Paragraph</span> -->
            <p>
              <br>
              Lavington Builders and designers <br />
              P.O BOX 26870-00100 <br />
              Nairobi-Kenya <br />
              (Along Ngong' Road) <br />
              <br />

              0722863577 <br />
              lav4designs@gmail.com <br />
              Office- +0204401553
            </p>

            <!-- :src="image" -->
            <div id="images">
              <img
                src="@/assets/img/background/house3.jpeg"
                alt="Raised Image"
                class="img-raised rounded"
                :class="{ 'responsive-image': responsive }"
              />
            </div>
            <md-button
              href="javascript:void(0)"
              class="md-just-icon md-simple md-dribbble"
              ><i class="fab fa-facebook"></i
            ></md-button>
            <md-button
              href="javascript:void(0)"
              class="md-just-icon md-simple md-twitter"
              ><i class="fab fa-twitter"></i
            ></md-button>
            <md-button
              href="javascript:void(0)"
              class="md-just-icon md-simple md-pinterest"
              ><i class="fab fa-whatsapp"></i
            ></md-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from '@/components'
export default {
  components: {
    // Tabs
  },
  bodyClass: 'profile-page',
  data () {
    return {}
  },
  props: {
    header: {
      type: String,
      // default: require('@/assets/img/internal-decoration/decor1.jpg')
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

<style lang="scss" scoped>
.section {
  padding: 0;
}
.mapouter {
  position: relative;
  text-align: left;
  height: 300px;
  width: 300px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 400px;
  width: 320px;
}
.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*='tab-pane-'] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>

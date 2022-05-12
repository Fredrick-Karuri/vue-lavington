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
              <div class="md-layout-item md-size-50 mx-auto">
                <div class="name">
                  <h2 class="title">Testimonials</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <!-- <span class="tim-note">Paragraph</span> -->
            <p>
            
            </p>
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
    return {
     
    }
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

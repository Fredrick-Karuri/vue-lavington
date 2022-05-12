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
              <div class="profile">
                <div class="avatar">
                  <!-- :src="img"
                    class="img-raised rounded-circle img-fluid" -->

                  <img
                    alt="Circle Image"
                    src="http://www.clker.com/cliparts/j/j/Z/6/h/C/black-man-md.png"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Boaz</h3>
                  <h6>Designer</h6>
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
          <div class="description text-center">
            <!-- <span class="tim-note">Paragraph</span> -->
            <p>
              Welcome to lavington builders and designers, your number one
              source for all matters design. We're dedicated to providing you
              the very best designing for your home , with an emphasis on
              internal Decoration, furnishing,general office and home , house
              repair, Electrical.Explore our collection of
              <router-link to="/services">services</router-link>

              Founded in [year] by [founder name], lavington builders and
              designers has come a long way from its beginnings in [starting
              location]. When [founder name] first started out, [his] passion
              for [brand message - e.g. "eco-friendly cleaning products"] drove
              them to start their own business. We hope you will give us a
              chance to do that which we enjoy doing. If you have any questions
              or comments, please don't hesitate to
              <router-link to="/contact">contact us</router-link>
              Sincerely, [founder name]
            </p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['site', 'WorkFlow', 'Favorite']"
              :tab-icon="['camera', 'palette', 'favorite']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane1[0].image" class="rounded" />
                    <img :src="tabPane1[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane1[3].image" class="rounded" />
                    <img :src="tabPane1[2].image" class="rounded" />
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane2[0].image" class="rounded" />
                    <img :src="tabPane2[1].image" class="rounded" />
                    <img :src="tabPane2[2].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane2[3].image" class="rounded" />
                    <img :src="tabPane2[4].image" class="rounded" />
                  </div>
                </div>
              </template>
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane3[0].image" class="rounded" />
                    <img :src="tabPane3[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane3[2].image" class="rounded" />
                    <img :src="tabPane3[3].image" class="rounded" />
                    <img :src="tabPane3[4].image" class="rounded" />
                  </div>
                </div>
              </template>
            </tabs>
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
    Tabs
  },
  bodyClass: 'profile-page',
  data () {
    return {
      tabPane1: [
        { image: require('@/assets/img/examples/studio-1.jpg') },
        { image: require('@/assets/img/examples/studio-2.jpg') },
        { image: require('@/assets/img/examples/studio-4.jpg') },
        { image: require('@/assets/img/examples/studio-5.jpg') }
      ],
      tabPane2: [
        { image: require('@/assets/img/examples/olu-eletu.jpg') },
        { image: require('@/assets/img/examples/clem-onojeghuo.jpg') },
        { image: require('@/assets/img/examples/cynthia-del-rio.jpg') },
        { image: require('@/assets/img/examples/mariya-georgieva.jpg') },
        { image: require('@/assets/img/examples/clem-onojegaw.jpg') }
      ],
      tabPane3: [
        { image: require('@/assets/img/examples/mariya-georgieva.jpg') },
        { image: require('@/assets/img/examples/studio-3.jpg') },
        { image: require('@/assets/img/examples/clem-onojeghuo.jpg') },
        { image: require('@/assets/img/examples/olu-eletu.jpg') },
        { image: require('@/assets/img/examples/studio-1.jpg') }
      ]
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

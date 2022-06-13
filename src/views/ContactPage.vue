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
            <div class="md-layout-item md-size-60 mx-auto">
              <div class="tim-typo">
                <h3 class="title"><span></span>Contact Us</h3>
              </div>
            </div>
          </div>
            <div id="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1088.1025090205055!2d36.742186666038315!3d-1.3050472382094522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x182f1b75c05f2ea7%3A0x433a956a8675f232!2slavington%20builders%20and%20designers!3m2!1d-1.305321!2d36.741953599999995!5e0!3m2!1sen!2ske!4v1653983025241!5m2!1sen!2ske"
              width="1920"
              height="1280"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              scrolling="yes"
            ></iframe>
          </div>
          <div class="description text-center">
            <p>
              <br />
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
export default {
  components: {},
  bodyClass: 'profile-page',
  data () {
    return {}
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

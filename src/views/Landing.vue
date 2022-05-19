<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="image-wrapper">
            <div
              class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
            >
              <h1 class="title">Your Dream Home Starts With Us.</h1>
              <h4>
                Need to decorate your home to your liking ? <br />
                Try us.
              </h4>
              <br />
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">All Matters Interior Design</h2>
              <h5 class="description">
                Based in Nairobi-Ngong' Road, Lavington Builders and Designers
                highlights the sophistication of Nairobi with the flavor, and
                just a twist, of a posh living. With a style that’s unrestrained
                yet very refined, our team creates homes and commercial spaces
                that are the visual stories of the people living or working
                there. Our interiors are bold statements balanced by quiet
                details, the dark accents in a white room, the well-defined edge
                that contains a surprise of color.
              </h5>
            </div>
          </div>

          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <router-link to="/contact">
                    <h4 class="info-title">Get In Touch</h4>
                  </router-link>
                  <p>
                    We are just a click away!
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success" to="/Testimonials">
                    <md-icon>verified_user</md-icon>
                    <router-link to="/Testimonials">
                      <h4 class="info-title">
                        Verified Customers
                      </h4></router-link
                    >
                  </div>

                  <p>
                    What Do Our Customers Have To Say About Our Services?
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>fingerprint</md-icon>
                  </div>
                  <router-link to="/about">
                    <h4 class="info-title">Know Us</h4>
                  </router-link>
                  <p>
                    Who Exactly Are We?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section text-center">
        <div class="container">
          <h2 class="title">Here is our team</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">

                      <img
                        src="data:image/png;base64,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"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Person1
                      <br />
                      <small class="card-description text-muted">Worker</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        more on me <a href="#">here</a>
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <!-- :src="teamImg2" -->

                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUnXd03EW_RgVSHjTWkj0I6pEcH_VgiN86ZbkrnGT-Grl3eix53O8HHh7ZYlMT26b-w8&usqp=CAU"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Person2
                      <br />
                      <small class="card-description text-muted"
                        >Designer</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description"></p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <!-- :src="teamImg3" -->

                      <img
                        src="data:image/jpeg;base64,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"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Person3
                      <br />
                      <small class="card-description text-muted"
                        >Designer</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description"></p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Work with us</h2>
              <h4 class="text-center description">
                Divide details about your product or agency work into parts.
                Write a few lines about each one and contact us about any
                further collaboration. We will respond get back to you in good time.
              </h4>
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Name</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                    
                  </div>
                  <div class="md-layout-item md-size-60">
                    <md-field>
                      <label>Your Email</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Your Message</label>
                  <md-textarea v-model="message"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button class="md-success">Send Message</md-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: 'landing-page',
  props: {
    header: {
      type: String,
      // default: require("@/assets/img/bg7.jpg")
      default: require('@/assets/img/background/house2.jpeg')
    },
    teamImg1: {
      type: String,
      default: require('@/assets/img/faces/avatar.jpg')
    },
    teamImg2: {
      type: String,
      default: require('@/assets/img/faces/christian.jpg')
    },
    teamImg3: {
      type: String,
      default: require('@/assets/img/faces/kendall.jpg')
    }
  },
  data () {
    return {
      name: null,
      email: null,
      message: null
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
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>

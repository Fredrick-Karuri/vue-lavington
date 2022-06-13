<template>
  <div class="container">
    
    <div class="tim-typo">

      <transition name="fade" appear>
      <h2 id="header1">Hy! How may we be of service?</h2>

        <!-- <h2 class="title"><span></span>Our Services</h2> -->
        
      </transition>
    </div>

    

    <div class="tim-typo">
      <h3><span></span>Internal Decoration</h3>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-size-80 mx-auto md-small-size-100">
        <md-card>
          <carousel
            :per-page="1"
            fade="true"
            loop
            :speed="700"
            autoplay
            :autoplay-timeout="5000"
            :mouse-drag="false"
            navigationEnabled
            navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
            navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
          >
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carousel10"
                style="width:100%;height:100%;"
                alt="carousel2"
              />
            </slide>
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carousel11"
                style="width:100%;height:100%;"
                alt="carousel3"
              />
            </slide>
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carousel12"
                style="width:100%;height:100%;"
                alt="carousel4"
              />
            </slide>
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouselinter"
                style="width:100%;height:100%"
                alt="carousel4"
              />
            </slide>
          </carousel>
        </md-card>
      </div>
    </div>
    <div class="tim-typo">
      <h3><span></span>Wooden and Metal Security Doors</h3>
    </div>

    <div class="md-layout">
      <div class="md-layout-item md-size-80 mx-auto md-small-size-100">
        
        <md-card>
          <carousel
            :per-page="1"
            loop
            :speed="700"
            autoplay
            :autoplay-timeout="5000"
            :mouse-drag="false"
            navigationEnabled
            navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
            navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
          >
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouseldoor1"
                style="width:100%;height:100%;"
                alt="carousel1"
              />
            </slide>
            <!-- <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouseldoor2"
                style="width:100%;height:100%;"
                alt="carousel2"
              />
            </slide> -->
             <!-- <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouseldoor3"
                style="width:100%;height:100%;"
                alt="carousel3"
              />
            </slide> -->
            <!-- <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouseldoor5"
                style="width:100%;height:100%;"
                alt="image ofdoor"
              />
            </slide> -->
             <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouseldoor7"
                style="width:100%;height:100%;"
                alt="image ofdoor"
              />
            </slide>
             <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouseldoor8"
                style="width:100%;height:100%;"
                alt="image ofdoor"
              />
            </slide> -->
             <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouseldoor9"
                style="width:100%;height:100%;"
                alt="image ofdoor"
              />
            </slide>
             <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouseldoor10"
                style="width:100%;height:100%;"
                alt="image ofdoor"
              />
            </slide>
             <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouseldoor15"
                style="width:100%;height:100%;"
                alt="image ofdoor"
              />
            </slide>
             <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouseldoor14"
                style="width:100%;height:100%;"
                alt="image ofdoor"
              />
            </slide>
          </carousel>
        </md-card>
      </div>
    </div>
    <div class="tim-typo">
      <h3><span></span>General Office and Home</h3>
    </div>

    <div class="md-layout">
      <div class="md-layout-item md-size-80 mx-auto md-small-size-100">
        <!-- <div
        class="md-layout-item md-medium-size-100 md-small-size-50 md-xsmall-size-100"
      > -->
        <md-card>
          <carousel
            :per-page="1"
            loop
            :speed="700"
            autoplay
            :autoplay-timeout="5000"
            :mouse-drag="false"
            navigationEnabled
            navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
            navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
          >
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carousel5"
                style="width:100%;height:100%;"
                alt="carousel1"
              />
            </slide>
            <slide>
              <div class="carousel-caption">
                <h4></h4>
              </div>
              <img
                :src="carousel6"
                style="width:100%;height:100%;"
                alt="carousel2"
              />
            </slide>
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carousel7"
                style="width:100%;height:100%;"
                alt="carousel3"
              />
            </slide>
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carousel8"
                style="width:100%;height:100%;"
                alt="image of office "
              />
            </slide>
             <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouseloffice6"
                style="width:100%;height:100%;"
                alt="image of office "
              />
            </slide>
             <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouseloffice5"
                style="width:100%;height:100%;"
                alt="image of office "
              />
            </slide>
          </carousel>
        </md-card>
      </div>
    </div>

    <!-- <div
      class="md-layout-item md-medium-size-100 md-small-size-50 md-xsmall-size-100"
    > -->
      <div class="md-layout-item md-size-80 mx-auto md-small-size-100">

      <div class="profile-tabs">
        <div class="tim-typo">
          <h3><span></span>Furnishing</h3>
        </div>
        <div>
          <tabs
            :tab-name="['Beds', 'Chairs', 'Kitchen', 'Wardrobe']"
            :tab-icon="['bed', 'chair', 'kitchen', 'kitchen']"
            plain
            nav-pills-icons
            color-button="success"
          >
            <template slot="tab-pane-1">
              <div class="md-layout">
                <div class="md-layout-item md-size-50 ml-auto">
                  <img :src="tabPane1[0].image" class="rounded" />
                  <img :src="tabPane1[1].image" class="rounded" />
                </div>
                <div class="md-layout-item md-size-50 mr-auto">
                  <img :src="tabPane1[3].image" class="rounded" />
                  <img :src="tabPane1[2].image" class="rounded" />
                </div>
                <div class="md-layout-item md-size-50 mr-auto">
                  <img :src="tabPane1[5].image" class="rounded" />
                  <img :src="tabPane1[4].image" class="rounded" />
                </div>
                <div class="md-layout-item md-size-50 mr-auto">
                  <img :src="tabPane1[7].image" class="rounded" />
                  <img :src="tabPane1[6].image" class="rounded" />
                </div>
              </div>
            </template>
            <template slot="tab-pane-2">
              <div class="md-layout">
                <div class="md-layout-item md-size-50 ml-auto">
                  <img :src="tabPane2[0].image" class="rounded" />
                  <img :src="tabPane2[1].image" class="rounded" />
                </div>
                <div class="md-layout-item md-size-50 mr-auto">
                  <img :src="tabPane2[3].image" class="rounded" />
                  <img :src="tabPane2[2].image" class="rounded" />

                </div>
                <div class="md-layout-item md-size-50 ml-auto">
                  <img :src="tabPane2[4].image" class="rounded" />
                  <img :src="tabPane2[5].image" class="rounded" />
                </div>
                <div class="md-layout-item md-size-50 ml-auto">
                  <img :src="tabPane2[6].image" class="rounded" />
                  <!-- <img :src="tabPane2[7].image" class="rounded" /> -->
                </div>
              </div>
            </template>
            <template slot="tab-pane-3">
              <div class="md-layout">
                <div class="md-layout-item md-size-50 ml-auto">
                  <img :src="tabPane3[0].image" class="rounded" />
                  <img :src="tabPane3[1].image" class="rounded" />
                </div>
                <div class="md-layout-item md-size-50 mr-auto">
                  <img :src="tabPane3[2].image" class="rounded" />
                  <img :src="tabPane3[3].image" class="rounded" />
                </div>
                <div class="md-layout-item md-size-50 ml-auto">
                  <img :src="tabPane3[5].image" class="rounded" />
                  <img :src="tabPane3[4].image" class="rounded" />
                </div>
                <div class="md-layout-item md-size-50 ml-auto">
                  <img :src="tabPane3[7].image" class="rounded" />
                  <img :src="tabPane3[6].image" class="rounded" />
                </div>
                
              </div>
            </template>
            <template slot="tab-pane-4">
              <div class="md-layout">
                <div class="md-layout-item md-size-50 ml-auto">
                  <img :src="tabPane4[0].image" class="rounded" />
                  <img :src="tabPane4[1].image" class="rounded" />
                </div>
                <div class="md-layout-item md-size-50 mr-auto">
                  <img :src="tabPane4[2].image" class="rounded" />
                  <img :src="tabPane4[3].image" class="rounded" />
                </div>
                 <div class="md-layout-item md-size-50 mr-auto">
                  <img :src="tabPane4[4].image" class="rounded" />
                  <img :src="tabPane4[5].image" class="rounded" />
                </div>
                 <div class="md-layout-item md-size-50 mr-auto">
                  <img :src="tabPane4[6].image" class="rounded" />
                  <img :src="tabPane4[7].image" class="rounded" />
                </div>
              </div>
            </template>
          </tabs>
        </div>
      </div>
    </div>

    <div class="tim-typo">
      <h3><span></span>CCTV and Alarm System</h3>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-size-80 mx-auto md-small-size-100">
        <!-- <div
        class="md-layout-item md-medium-size-100 md-small-size-50 md-xsmall-size-100"
      > -->
        <md-card>
          <carousel
            :per-page="1"
            loop
            :speed="700"
            autoplay
            :autoplay-timeout="5000"
            :mouse-drag="false"
            navigationEnabled
            navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
            navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
          >
            <slide>
              <div class="carousel-caption">
                <h4></h4>
              </div>
              <img
                :src="carousel17"
                style="width:100%;height:100%;"
                alt="image of cctv camera"
              />
            </slide>
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carousel18"
                style="width:100%;height:100%;"
                alt="image of cctv camera"
              />
            </slide>

            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouselAlarm1"
                style="width:100%;height:100%;"
                alt="image of an alarm system"
              />
            </slide>
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouselAlarm2"
                style="width:100%;height:100%;"
                alt="image of an alarm system"
              />
            </slide>
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carouselAlarm3"
                style="width:100%;height:100%;"
                alt="image of an alarm system"
              />
            </slide>
          </carousel>
        </md-card>
      </div>
    </div>
    <div class="section">
      <div class="container text-center">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center"
          >
            <h3>House Repairs</h3>
            <h4>
              Our designers ensure that your remodel, new construction, or
              everything in between goes well. Your designer helps oversee the
              project by selecting materials and coordinating with builders and
              tradespeople to ensure the designs are carried out as planned.
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div class="tim-typo">
      <h3><span></span>Electrical Fence Installation</h3>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-size-80 mx-auto md-small-size-100">
        <!-- <div
        class="md-layout-item md-medium-size-100 md-small-size-50 md-xsmall-size-100"
      > -->
        <md-card>
          <carousel
            :per-page="1"
            loop
            :speed="700"
            autoplay
            :autoplay-timeout="5000"
            :mouse-drag="false"
            navigationEnabled
            navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
            navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
          >
            <slide>
              <div class="carousel-caption">
                <h4></h4>
              </div>
              <img
                :src="carousel13"
                style="width:100%;height:100%;"
                alt="carousel1"
              />
            </slide>
            <slide>
              <div class="carousel-caption">
                <h4></h4>
              </div>
              <img
                :src="carousel14"
                style="width:100%;height:100%;"
                alt="carousel2"
              />
            </slide>
            <slide>
              <div class="carousel-caption">
                <h4></h4>
              </div>
              <img :src="carousel15" alt="carousel3" />
            </slide>
          </carousel>
        </md-card>
      </div>
    </div>

    <div class="tim-typo">
      <h3><span></span>Pottyless Window</h3>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-size-80 mx-auto md-small-size-100">
        <md-card>
          <carousel
            :per-page="1"
            loop
            :speed="700"
            autoplay
            :autoplay-timeout="5000"
            :mouse-drag="false"
            navigationEnabled
            navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
            navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
          >
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carousel5"
                style="width:100%;height:100%;"
                alt="carousel1"
              />
            </slide>
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carousel6"
                style="width:100%;height:100%;"
                alt="carousel2"
              />
            </slide>
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carousel7"
                style="width:100%;height:100%;"
                alt="carousel3"
              />
            </slide>
            <slide>
              <div class="carousel-caption">
                <h4></h4>
              </div>
              <img
                :src="carousel8"
                style="width:100%;height:100%;"
                alt="carousel4"
              />
            </slide>
          </carousel>
        </md-card>
      </div>
    </div>
    <!-- <div class="tim-typo">
            <h3><span></span>General Construction</h3>
          </div> -->

    <div class="section">
      <div class="container text-center">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-80 md-xsmall-size-100 ml-auto mr-auto text-center"
          >
            <h3>General Construction</h3>
            <h4>
              Our designers ensure that your remodel, new construction, or
              everything in between goes well. Your designer helps oversee the
              project by selecting materials and coordinating with builders and
              tradespeople to ensure the designs are carried out as planned.
            </h4>
          </div>
        </div>
      </div>
    </div>

    <div class="tim-typo">
      <h3><span></span>Landscaping</h3>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-size-80 mx-auto md-small-size-100">
       
        <md-card>
          <carousel
            :per-page="1"
            loop
            :speed="700"
            autoplay
            :autoplay-timeout="5000"
            :mouse-drag="false"
            navigationEnabled
            navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
            navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
          >
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carousel21"
                style="width:100%;height:100%;"
                alt="carousel1"
              />
            </slide>
            <slide>
              <div class="carousel-caption"></div>
              <img
                :src="carousel22"
                style="width:100%;height:100%;"
                alt="carousel2"
              />
            </slide>
          </carousel>
        </md-card>
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
      classicModal: false,
      selectedDate: new Date('2018/03/26'),
      carousel5: require('@/assets/img/office/office1.jpg'),
      carousel6: require('@/assets/img/office/office2.jpg'),
      carousel7: require('@/assets/img/office/office3.jpg'),
      carousel8: require('@/assets/img/office/office4.jpg'),
      carouseloffice5: require('@/assets/img/office/office5.jpg'),
      carouseloffice6: require('@/assets/img/office/office6.jpg'),
      carouseldoor15: require('@/assets/img/doors/door15.jpg'),
      carouseldoor14: require('@/assets/img/doors/door14.jpg'),
      carouseldoor11: require('@/assets/img/doors/door11.jpg'),
      carouseldoor10: require('@/assets/img/doors/door10.jpg'),
      carouseldoor9: require('@/assets/img/doors/door9.jpg'),
      carouseldoor8: require('@/assets/img/doors/door8.jpg'),
      carouseldoor7: require('@/assets/img/doors/door7.jpg'),
      carouseldoor5: require('@/assets/img/doors/door5.jpg'),
      carouseldoor3: require('@/assets/img/doors/door3.jpg'),
      carouseldoor2: require('@/assets/img/doors/door2.jpg'),
      carouseldoor1: require('@/assets/img/doors/door1.jpg'),
      carousel9: require('@/assets/img/internal-decoration/decor1.jpg'),
      carousel10: require('@/assets/img/internal-decoration/decor2.jpg'),
      carousel11: require('@/assets/img/internal-decoration/decor3.jpg'),
      carousel12: require('@/assets/img/internal-decoration/decor4.jpg'),
      carouselinter: require('@/assets/img/background/interior1.jpg'),

      carousel13: require('@/assets/img/fence/fence1.jpg'),
      carousel14: require('@/assets/img/fence/fence2.jpg'),
      carousel15: require('@/assets/img/fence/fence3.jpg'),
      carousel16: require('@/assets/img/furnishing/kit4.jpg'),

      carousel17: require('@/assets/img/cctv/cctv1.jpg'),
      carousel18: require('@/assets/img/cctv/cctv3.jpg'),
      carousel19: require('@/assets/img/bed/bed6.jpg'),
      carousel20: require('@/assets/img/bed/bed10.jpg'),
      carousel21: require('@/assets/img/landscaping/lands1.jpg'),
      carousel22: require('@/assets/img/landscaping/lands2.jpg'),

      carousel23: require('@/assets/img/furnishing/chairs/chair3.jpg'),
      carousel24: require('@/assets/img/furnishing/chairs/chair8.jpg'),

      carouselAlarm1: require('@/assets/img/alarm/alarm1.jpg'),
      carouselAlarm2: require('@/assets/img/alarm/alarm2.jpg'),
      carouselAlarm3: require('@/assets/img/alarm/alarm3.jpg'),

      tabPane1: [
        { image: require('@/assets/img/bed/bed12.jpg') },
        { image: require('@/assets/img/bed/bed10.jpg') },
        { image: require('@/assets/img/bed/bed13.jpg') },
        { image: require('@/assets/img/bed/bed6.jpg') },
        { image: require('@/assets/img/bed/bed1.jpg') },
        { image: require('@/assets/img/bed/bed2.jpg') },
        { image: require('@/assets/img/bed/bed7.jpg') },
        { image: require('@/assets/img/bed/bed9.jpg') },
      ],
      tabPane2: [
        { image: require('@/assets/img/furnishing/chairs/chair1.jpg') },
        { image: require('@/assets/img/furnishing/chairs/chair3.jpg') },
        { image: require('@/assets/img/furnishing/chairs/chair7.jpg') },
        { image: require('@/assets/img/furnishing/chairs/chair8.jpg') },
        // { image: require('@/assets/img/furnishing/chairs/chair2.JPG') },
        { image: require('@/assets/img/furnishing/chairs/chair4.jpg') },
        { image: require('@/assets/img/furnishing/chairs/chair5.jpg') },
        { image: require('@/assets/img/furnishing/chairs/chair6.jpg') },
        { image: require('@/assets/img/furnishing/chairs/chair6.jpg') },
      ],
      
      tabPane3: [
        { image: require('@/assets/img/furnishing/kit1.jpg') },
        { image: require('@/assets/img/furnishing/kit2.jpg') },
        { image: require('@/assets/img/furnishing/kit3.jpg') },
        { image: require('@/assets/img/furnishing/kit4.jpg') },
        { image: require('@/assets/img/furnishing/kit5.jpg') },
        { image: require('@/assets/img/furnishing/kit6.jpg') },
        { image: require('@/assets/img/furnishing/kit7.jpg') },
        { image: require('@/assets/img/furnishing/kit11.jpg') }
      ],
      tabPane4: [

        { image: require('@/assets/img/wardrobe/wardrobe1.jpg') },
        { image: require('@/assets/img/wardrobe/wardrobe2.jpg') },
        { image: require('@/assets/img/wardrobe/wardrobe3.jpg') },
        { image: require('@/assets/img/wardrobe/wardrobe4.jpg') },
        { image: require('@/assets/img/wardrobe/wardrobe5.jpg') },
        { image: require('@/assets/img/wardrobe/wardrobe6.jpg') },
        { image: require('@/assets/img/wardrobe/wardrobe7.jpg') },
        { image: require('@/assets/img/wardrobe/wardrobe16.jpg') },
      ],
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
#header1 {
  font-family: Montserrat;
  font-weight: 300;
  // font-size: 15.6px;
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
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

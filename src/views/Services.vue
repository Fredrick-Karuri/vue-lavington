<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="tim-typo">
            <h2 class="title"><span></span>Our Services</h2>
          </div>

          <div class="tim-typo">
            <h4 id="header1">Hy! How may we be of service?</h4>
          </div>
          <div class="tim-typo">
            <h3><span></span>Wooden and Metal Security Doors</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
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
                      <h4><md-icon>location_on</md-icon>Nairobi</h4>
                    </div>
                    <img
                      :src="carousel1"
                      style="width:100%;height:450px;"
                      alt="carousel1"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4><md-icon>location_on</md-icon>Nairobi</h4>
                    </div>
                    <img
                      :src="carousel2"
                      style="width:100%;height:450px;"
                      alt="carousel2"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4><md-icon>location_on</md-icon>Nairobi</h4>
                    </div>
                    <img
                      :src="carousel3"
                      style="width:100%;height:450px;"
                      alt="carousel3"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel4"
                      style="width:100%;height:450px;"
                      alt="carousel4"
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
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
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
                      <h4>
                        <md-icon>location_on</md-icon>
                        Kiambu
                      </h4>
                    </div>
                    <img
                      :src="carousel5"
                      style="width:100%;height:480px;"
                      alt="carousel1"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel6"
                      style="width:100%;height:480px;"
                      alt="carousel2"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel7"
                      style="width:100%;height:480px;"
                      alt="carousel3"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel8"
                      style="width:100%;height:480px;"
                      alt="carousel4"
                    />
                  </slide>
                </carousel>
              </md-card>
            </div>
          </div>

          <div class="tim-typo">
            <h3><span></span>Internal Decoration</h3>
            :tab-icon=
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
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
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel9"
                      style="width:100%;height:500px;"
                      alt="carousel1"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel10"
                      style="width:100%;height:500px;"
                      alt="carousel2"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel11"
                      style="width:100%;height:500px;"
                      alt="carousel3"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel12"
                      style="width:100%;height:500px;"
                      alt="carousel4"
                    />
                  </slide>
                </carousel>
              </md-card>
            </div>
          </div>

          <div class="tim-typo">
            <h3><span></span>Furnishing</h3>
          </div>
          <div class="md-layout-item md-size-70 mx-auto md-small-size-100">
            <!-- <div class="md-layout"> -->

            <!-- <md-card>
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
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel13"
                      style="width:100%;height:500px;"
                      alt="carousel1"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel14"
                      style="width:100%;height:500px;"
                      alt="carousel2"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel15"
                      style="width:100%;height:500px;"
                      alt="carousel3"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel16"
                      style="width:100%;height:500px;"
                      alt="carousel4"
                    />
                  </slide>
                </carousel>
              </md-card> -->
            <div class="profile-tabs">
              <tabs
                :tab-name="['Beds', 'Chairs', 'Kitchen']"
                :tab-icon="['bed', 'chair', 'kitchen']"
                plain
                nav-pills-icons
                color-button="success"
              >
                <!-- here you can add your content for tab-content -->
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
                  </div>
                </template>
                <template slot="tab-pane-2">
                  <div class="md-layout">
                    <div class="md-layout-item md-size-50 ml-auto">
                      <img :src="tabPane2[0].image" class="rounded" />
                      <img :src="tabPane2[1].image" class="rounded" />
                      <img :src="tabPane2[2].image" class="rounded" />
                    </div>
                    <div class="md-layout-item md-size-50 mr-auto">
                      <img :src="tabPane2[3].image" class="rounded" />
                      <img :src="tabPane2[4].image" class="rounded" />
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
                      <img :src="tabPane3[4].image" class="rounded" />
                    </div>
                  </div>
                </template>
              </tabs>
            </div>
            <!-- </div> -->
          </div>

          <div class="tim-typo">
            <h3><span></span>CCTV and Alarm System</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
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
                      <h4>
                        <md-icon>location_on</md-icon>
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel17"
                      style="width:100%;height:400px;"
                      alt="carousel1"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel18"
                      style="width:100%;height:400px;"
                      alt="carousel2"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel19"
                      style="width:100%;height:400px;"
                      alt="carousel3"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel20"
                      style="width:100%;height:400px;"
                      alt="carousel4"
                    />
                  </slide>
                </carousel>
              </md-card>
            </div>
          </div>

          <div class="tim-typo">
            <h3><span></span>Chairs</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
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
                      <h4>
                        <md-icon>location_on</md-icon>
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel21"
                      style="width:100%;height:500px;"
                      alt="carousel1"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel22"
                      style="width:100%;height:500px;"
                      alt="carousel2"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel23"
                      style="width:100%;height:500px;"
                      alt="carousel3"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel24"
                      style="width:100%;height:500px;"
                      alt="carousel4"
                    />
                  </slide>
                </carousel>
              </md-card>
            </div>
          </div>

          <div class="tim-typo">
            <h3><span></span>Electrical Fence Installation</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
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
                      <h4>
                        <md-icon>location_on</md-icon>
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel5"
                      style="width:auto;height:500px;"
                      alt="carousel1"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel6"
                      style="width:auto;height:500px;"
                      alt="carousel2"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel7"
                      style="width:auto;height:500px;"
                      alt="carousel3"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel8"
                      style="width:auto;height:500px;"
                      alt="carousel4"
                    />
                  </slide>
                </carousel>
              </md-card>
            </div>
          </div>

          <div class="tim-typo">
            <h3><span></span>Alarm System</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
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
                      <h4>
                        <md-icon>location_on</md-icon>
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel5"
                      style="width:auto;height:500px;"
                      alt="carousel1"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel6"
                      style="width:auto;height:500px;"
                      alt="carousel2"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel7"
                      style="width:auto;height:500px;"
                      alt="carousel3"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel8"
                      style="width:auto;height:500px;"
                      alt="carousel4"
                    />
                  </slide>
                </carousel>
              </md-card>
            </div>
          </div>

          <div class="tim-typo">
            <h3><span></span>Pottyless Window</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
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
                      <h4>
                        <md-icon>location_on</md-icon>
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel5"
                      style="width:auto;height:500px;"
                      alt="carousel1"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel6"
                      style="width:auto;height:500px;"
                      alt="carousel2"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel7"
                      style="width:auto;height:500px;"
                      alt="carousel3"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel8"
                      style="width:auto;height:500px;"
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
                  class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center"
                >
                  <h3>General Construction</h3>
                  <h4>
                    Our designers ensure that your remodel, new construction, or
                    everything in between goes well. Your designer helps oversee
                    the project by selecting materials and coordinating with
                    builders and tradespeople to ensure the designs are carried
                    out as planned.
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
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
                      <h4>
                        <md-icon>location_on</md-icon>
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel5"
                      style="width:auto;height:500px;"
                      alt="carousel1"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel6"
                      style="width:auto;height:500px;"
                      alt="carousel2"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel7"
                      style="width:auto;height:500px;"
                      alt="carousel3"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel8"
                      style="width:auto;height:500px;"
                      alt="carousel4"
                    />
                  </slide>
                </carousel>
              </md-card>
            </div>
          </div>

          <div class="tim-typo">
            <h3><span></span>Landscaping</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
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
                      <h4>
                        <md-icon>location_on</md-icon>
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel5"
                      style="width:auto;height:500px;"
                      alt="carousel1"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel6"
                      style="width:auto;height:500px;"
                      alt="carousel2"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                    <img
                      :src="carousel7"
                      style="width:auto;height:500px;"
                      alt="carousel3"
                    />
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h4>
                        <md-icon>location_on</md-icon>
                        Nairobi
                      </h4>
                    </div>
                    <img
                      :src="carousel8"
                      style="width:auto;height:500px;"
                      alt="carousel4"
                    />
                  </slide>
                </carousel>
              </md-card>
            </div>
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
      classicModal: false,
      selectedDate: new Date('2018/03/26'),
      carousel5: require('@/assets/img/office/office1.jpg'),
      carousel6: require('@/assets/img/office/office2.jpg'),
      carousel7: require('@/assets/img/office/office3.jpg'),
      carousel8: require('@/assets/img/office/office4.jpg'),
      carousel4: require('@/assets/img/doors/door1.jpeg'),
      carousel3: require('@/assets/img/doors/door2.jpeg'),
      carousel2: require('@/assets/img/doors/door11.jpg'),
      carousel1: require('@/assets/img/doors/door10.jpg'),
      carousel9: require('@/assets/img/internal-decoration/decor1.jpg'),
      carousel10: require('@/assets/img/internal-decoration/decor2.jpg'),
      carousel11: require('@/assets/img/internal-decoration/decor3.jpg'),
      carousel12: require('@/assets/img/internal-decoration/decor4.jpg'),
      carousel13: require('@/assets/img/furnishing/kit7.jpg'),
      carousel14: require('@/assets/img/furnishing/kit6.jpg'),
      carousel15: require('@/assets/img/furnishing/kit5.jpg'),
      carousel16: require('@/assets/img/furnishing/kit4.jpg'),

      carousel17: require('@/assets/img/cctv/cctv1.jpg'),
      carousel18: require('@/assets/img/cctv/cctv3.jpg'),
      carousel19: require('@/assets/img/bed/bed6.jpg'),
      carousel20: require('@/assets/img/bed/bed10.jpg'),
      carousel21: require('@/assets/img/furnishing/chairs/chair1.jpg'),
      carousel22: require('@/assets/img/furnishing/chairs/chair7.jpg'),
      carousel23: require('@/assets/img/furnishing/chairs/chair3.jpg'),
      carousel24: require('@/assets/img/furnishing/chairs/chair8.jpg'),

      tabPane1: [
        { image: require('@/assets/img/bed/bed12.jpg') },
        { image: require('@/assets/img/bed/bed11.jpg') },
        { image: require('@/assets/img/bed/bed13.jpg') },
        { image: require('@/assets/img/bed/bed6.jpg') }
      ],
      tabPane2: [
        { image: require('@/assets/img/furnishing/chairs/chair1.jpg') },
        { image: require('@/assets/img/furnishing/chairs/chair3.jpg') },
        { image: require('@/assets/img/furnishing/chairs/chair7.jpg') },
        { image: require('@/assets/img/furnishing/chairs/chair8.jpg') },
        { image: require('@/assets/img/furnishing/chairs/chair9.jpg') }
      ],
      tabPane3: [
        { image: require('@/assets/img/furnishing/kit1.jpg') },
        { image: require('@/assets/img/furnishing/kit2.jpg') },
        { image: require('@/assets/img/furnishing/kit4.jpg') },
        { image: require('@/assets/img/furnishing/kit6.jpg') },
        { image: require('@/assets/img/furnishing/kit11.jpg') }
      ]
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
  font-size: 28.6px;
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

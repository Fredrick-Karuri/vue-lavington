<template> 
<div class="wrapper">
<div id="carouselid" >
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
            <img :src="carousel1" alt="carousel1" />
          </slide>
          <slide>
            <div class="carousel-caption">
              <h4>
                <md-icon>location_on</md-icon>
                Yellowstone National Park, United States
              </h4>
            </div>
            <img :src="carousel2" alt="carousel2" />
          </slide>
          <slide>
            <div class="carousel-caption">
              <h4>
                <md-icon>location_on</md-icon>
                Yellowstone National Park, United States
              </h4>
            </div>
            <img :src="carousel3" alt="carousel3" />
          </slide>
        </carousel>
      </md-card>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
import { Modal } from "@/components";
export default {
  components: {
    Modal
  },
  data() {
    return {
      classicModal: false,
      selectedDate: new Date("2018/03/26"),
      carousel1: require("@/assets/img/nature-2.jpg"),
      carousel2: require("@/assets/img/nature.jpg"),
      carousel3: require("@/assets/img/nature-3.jpg")
    };
  },
  methods: {
    classicModalHide() {
      this.classicModal = false;
    }
  }
};
</script>
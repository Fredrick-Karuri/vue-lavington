<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <md-list-item to="/contact">
            <a> Contact Us</a>
          </md-list-item>
          <md-list-item to="/about">
            <a> About Us</a>
          </md-list-item>

          <md-list-item to="/terms">
            <a> Terms and Conditions</a>
          </md-list-item>
          
        </ul>
      </nav>
      <div class="copyright">
        0722863577 | lav4designs@gmail.com <br />
        &copy; {{ year }}, Lavington Builders & Designers | Ngong' Road-Nairobi

        <br />
        <br />
        <!-- <a id="scrollUp" @click="scrollToTop()"
          ><i class="bi bi-caret-up"></i
        ></a> -->
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
      <i class="bi bi-arrow-up-short"></i>
    </a>
        
      </div>


    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data () {
    return {
      year: new Date().getFullYear()
    }
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style>
#scrollUp {
  right: 16px;
  /* background-image: initial; */
  background-color: rgb(103, 178, 255);
  
  color: rgb(255, 255, 255);
  border-color: transparent;
  background: #90acd1;
  height: 50px;
  width: 50px;
  right: 31px;
  bottom: 18px;
  color: #fff;
  font-size: 40px;
  /* text-align: center; */
  border-radius: 50%;
  line-height: 48px;
  border: 2px solid transparent;
  box-sizing: border-box;
  /* position:right; */
}
a{
  transition: all 0.6s ease 0s;
  

}
.back-to-top {
  position: fixed;
  /* visibility: hidden; */
  /* opacity: 0; */
  right: 16px;
  right: 31px;
  bottom: 15px;
  z-index: 996;
  background: #47b2e4;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
}
.back-to-top i {
  font-size: 40px;
  
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: #6bc1e9;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

</style>

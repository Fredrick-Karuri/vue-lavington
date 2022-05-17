<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          

          <md-list-item to="/landing">
            <a> Contact Us</a>
          </md-list-item>
          <md-list-item to="/landing">
            <a> About Us</a>
          </md-list-item>
         
           <md-list-item to="#" >
                <a> Terms and Conditions</a>

              </md-list-item>
         
        </ul>
      </nav>
      <div class="copyright">
        0722863577 | lav4designs@gmail.com  <br> 
        &copy; {{ year }}, Lavington Builders & Designers | Ngong' Road-Nairobi

        <!-- <md-icon>favorite</md-icon>  -->
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
  }
}
</script>
<style></style>

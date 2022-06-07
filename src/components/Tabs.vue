<template>
  <md-card
    class="md-card-tabs"
    :class="[
      { 'flex-column': flexColumn },
      { 'nav-pills-icons': navPillsIcons },
      { 'md-card-plain': plain }
    ]"
  >
    <md-card-header slot="header-title"> </md-card-header>
      <md-card-content>
        <md-list class="nav-tabs">
          <md-list-item
            v-for="(item, index) in tabName"
            @click="switchPanel(tabName[index])"
            :key="item"
            :class="[
              { active: isActivePanel(tabName[index]) },
              { [getColorButton(colorButton)]: isActivePanel(tabName[index]) }
            ]"
          >
            {{ tabName[index] }}
            <md-icon v-if="navPillsIcons">{{ tabIcon[index] }}</md-icon>
          </md-list-item>
        </md-list>

        <!-- <transition name="fade" mode="out-in"> -->
      <transition name="fade" mode="out-in" appear :duration="500"> 

        <div class="tab-content">
          <div
            :class="getTabContent(index + 1)"
            v-for="(item, index) in tabName"
            :key="item"
            :data="item"
            
            v-if="isActivePanel(tabName[index])"
          >
            <slot :name="getTabContent(index + 1)">
              This is the default text!
            </slot>
          </div>
        </div>
      </transition> 
      </md-card-content>
  </md-card>
</template>

<script>
export default {
  props: {
    flexColumn: Boolean,
    navPillsIcons: Boolean,
    plain: Boolean,
    tabName: Array,
    tabIcon: Array,
    colorButton: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      activePanel: this.tabName[0]
    }
  },
  methods: {
    switchPanel (panel) {
      this.activePanel = panel
    },
    isActivePanel (panel) {
      return this.activePanel == panel
    },
    getColorButton: function (colorButton) {
      return 'md-' + colorButton + ''
    },
    getTabContent: function (index) {
      return 'tab-pane-' + index + ''
    }
  }
}
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translate(30px);
}

.switch-enter-to .switch-leave-from {
  opacity: 1;
  transform: translateY(30px);
}
.switch-enter-from .switch-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.switch-enter-active {
  transition: all 0.5s ease;
}
.switch-leave-active {
  transition: all 0.5s ease;
}
</style>

<template>
  <header>
    <nav>
      <ul>
        <li 
            v-for="(tab, tabName) in tabs"
            :key="tabName"
            
            >
          <button 
            class="tab" 
            @click="setTabActive(tabName)"
            :class="{'active': tabName === activeTab}"
          >
            <span class="tab-copy">{{ tabName }}</span>
            <span class="tab-background">
              <span class="tab-rounding left"></span>
              <span class="tab-rounding right"></span>
            </span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
  <article>
    <div class="container">
      <transition
        name="fade"
        mode="out-in"
        appear
        :duration="500"
      >
      <tab-content
         v-for="(tabContent, t) in tabs" 
         :data="tabContent"
         :key="'content'+t"
         v-if="t === activeTab"
         inline-template
       >
        <div class="content">
          <h1>{{data.title}}</h1>
          <p>{{data.body}}</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt labore id sint voluptas assumenda optio ullam excepturi officia, a commodi nobis rem saepe error iusto, minima ipsum ducimus quos dignissimos itaque, temporibus esse impedit? Veritatis repellat dolor magnam modi error!
          </p>
        </div>
      </tab-content>
    </transition>
    </div>
  </article>
</template>
<style>

</style>

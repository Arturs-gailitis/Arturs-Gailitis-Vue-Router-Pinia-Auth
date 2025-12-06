<script setup>
  // Task 1.1
  import Header from "./component/HeaderComponent.vue";
  import SideNav from "./component/SideNavComponent.vue";
  
  console.log("1.1 Components and routes initialized");
  // Task 1.1 ends

  // Task 1.4
  console.log("1.4 Router configured");
  // Task 1.4 ends

  //Task 2.1
  import { useUserStore } from "./stores/userStore.js";

  const userStore = useUserStore();
  userStore.initStore();
  //Task 2.1 ends

  // Task 2.2
  userStore.actionsReady();
  // Task 2.2 ends

</script>

<template>

  <!-- Task 1.2 -->
  <div id="container">
    <div id="Nav">
      <Header />
      <!-- Task 1.2 ends -->
      <!-- Task 1.3 -->
      <!-- Task 5.2 -->
      <div id="sideNav" v-if="userStore.isAuthenticated">
        <SideNav/>
      </div>
      <!-- Task 5.2 ends -->
    </div>
    <!-- Task 1.3 ends -->
    <!-- Task 1.4 -->
    <div>
      <RouterView />
    </div>
    <!-- Task 1.4 ends -->
  </div>

</template>

<style scoped>
  #container {
    max-height: 613px;
  }

  #Nav {
    display: block;
    padding: 1rem;
    height: 70px;
    position: relative;
    top: -25px;
    margin-left: -25px;
    margin-right: -25px;
  }

  #sideNav {
    display: inline-block;
    position: relative;
    top: 28px;
    margin-top: -27px;
    background-color: #C6FAF6ff;
    height: 690px;
    width: 200px;
    z-index: 2;
  }
</style>

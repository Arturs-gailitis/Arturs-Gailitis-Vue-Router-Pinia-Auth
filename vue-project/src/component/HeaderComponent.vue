<script setup>
    // Task 1.2
    console.log("1.2 Header ready");
    // Task 1.2 ends

    // Task 5.1
    import { useUserStore } from "../stores/userStore.js";
    import { computed} from "vue";
    const userStore = useUserStore();

    const name = computed(() => userStore.currentUser?.name || "");
    
    // Krāsa mainās atkarībā no autentifikācijas statusa
    const navBarColor = computed(() => 
        userStore.isAuthenticated ? "#FFECBDff" : "#979797ff"
    );
    // Task 5.1 ends
</script>

<template>
    <!-- Task 1.2 -->
    <div id="navBar" :style="{ backgroundColor: navBarColor }">
        <div id="header">
            <img src="../picture/logo.svg" id="logo"></img>
        </div>
        <!-- Task 5.1 -->
        <div id="name">
            <p>{{ name }}</p>
        </div>
        <div id="logout" v-if="userStore.isAuthenticated">
            <button type="button" id="logoutButton">Log out</button>
        </div>
        <!-- Task 5.1 ends -->
    </div>
    <!-- Task 1.2 ends -->
</template>

<style scoped>
    /* Task 1.2 */
    #navBar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        height: 70px;
        background-color: #979797ff;
    }

    #logo {
        max-height: 50px;
        max-width: 50px;
        height: auto;
        width: auto;
    }

    /* Task 1.2 ends */

    /* Task 5.1 */
    #logout {
        display: flex;
        position: relative;
        right: 10px;
    }

    #logoutButton {
        background-color: #874FFFff;
        cursor: pointer;
        height: auto;
        padding: 5px;
        padding-left: 5px;
        padding-right: 5px;
    } 

    #name {
        display: flex;
        position: relative;
        left: 700px;
        padding-left: 10px;
        padding-right: 10px;
    }

    /* Task 5.1 ends */
</style>
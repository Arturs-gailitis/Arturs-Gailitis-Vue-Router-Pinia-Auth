<script setup>
    // Task 1.2
    console.log("1.2 Header ready");
    // Task 1.2 ends
</script>

<template>
    <!-- Task 1.2 -->
    <div id="navBar">
        <div id="header">
            <img src="../picture/logo.svg" id="logo"></img>
        </div>
        <!-- <div id="logout">
            <button type="button" id="logoutButton">Log out</button>
        </div> -->
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

    /* #logout {
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
    } */
</style>
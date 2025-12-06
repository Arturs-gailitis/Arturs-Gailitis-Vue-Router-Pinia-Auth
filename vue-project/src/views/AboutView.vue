<script setup>
// Task 6.2 
// Task 6.3
import { useUserStore } from "../stores/userStore.js";

const userStore = useUserStore();

const info = {
    name: userStore.currentUser?.name || "",
    email: userStore.currentUser?.email || "",
    ID: userStore.currentUser?.studentID || "",
}

console.log("6.2 AboutView rendered with user data");
console.log("6.3 AboutView uses store currentUser");
// Task 6.3 ends
// Task 6.2 ends
</script>

<template>
    <!-- Task 6.2 -->
    <div id="aboutMe">
        <h1 id="title">About Me</h1>
        <ul id="list">
            <li>Full Name: {{ info.name }}</li>
            <li>Student ID: {{ info.ID }}</li>
            <li>Email: {{ info.email }}</li>
        </ul>
    </div>
    <!-- Task 6.2 ends -->

</template>

<style scoped>
    #aboutMe {
        display: block;
        position: relative;
        justify-self: center;
        height: 690px;
        width: 100%;
        z-index: -1;
        margin-top: -28px;
        background-color: #DCCCFFff;
    }

    #title {
        justify-self: center;
        position: relative;
        top: 200px;
    }

    #list li {
        padding-top: 20px;
    }

    #list {
        position: relative;
        justify-self: center;
        top: 200px;
        list-style-type: none;
    }
</style>
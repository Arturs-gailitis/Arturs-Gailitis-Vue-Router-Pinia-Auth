<script setup>
// Task 6.1
console.log("6.1 HomeView rendered");
// Task 6.1 ends
</script>

<template>
    <!-- Task 6.1 -->
    <div id="home">
        <div id="welcome">
            <h1>Welcome to this website</h1>
        </div>
        <div id="title">
            <h1>HOME</h1>
        </div>
    </div>
    <!-- Task 6.1 ends -->
</template>

<style scoped>
    #home {
        background-color: #DCCCFFff;
        height: 690px;
    }
    #title {
        text-align: center;
        margin-left: 250px;
        margin-top: 150px;
    }

    #welcome {
        display: flex;
        position: relative;
        text-align: center;
        margin-left: 260px;
        padding-top: 50px;
        left: 550px;
        margin-top: -10px;
    }
</style>
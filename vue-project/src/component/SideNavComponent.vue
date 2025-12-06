<script setup>
    // Task 1.3
    console.log("1.3 SideNav ready");
    // Task 1.3 ends

    // Task 5.2
    console.log("5.2 SideNav rendered for signed-in user");
    // Task 5.2 ends
</script>

<template>
    <!-- Task 1.3 -->
    <div>
        <ul id="sideNavUL">
            <!-- Task 1.4 -->
            <!-- Task 5.2 -->
            <li>
                <RouterLink to="/home"><button class="sideNavButtons">Home</button></RouterLink>
            </li>
            <li>
                <RouterLink to="/about"><button class="sideNavButtons">About</button></RouterLink>
            </li>
            <!-- Task 5.2 ends -->
            <!-- Task 1.4 ends -->
        </ul>
    </div>
    <!-- Task 1.3 ends -->

</template>

<style scoped>
    #sideNavUL {
        display: inline-block;
        position: absolute;
        margin-left: 20px;
        list-style: none;
        z-index: 2;
    }

    .sideNavButtons {
        margin-bottom: 20px;
        cursor: pointer;
        position: relative;
        background-color: white;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 50px;
        padding-right: 50px;
        right: 35px;
        
    }
</style>
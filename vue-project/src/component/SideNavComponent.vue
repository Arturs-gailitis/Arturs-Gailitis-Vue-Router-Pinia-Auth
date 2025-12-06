<script setup>
    // Task 1.3
    console.log("1.3 SideNav ready");
    // Task 1.3 ends
</script>

<template>
    <!-- Task 1.3 -->
    <div>
        <ul id="sideNavUL">
            <!-- Task 1.4 -->
            <li>
                <RouterLink to="/"><button class="sideNavButtons">Home</button></RouterLink>
            </li>
            <li>
                <RouterLink to="/about"><button class="sideNavButtons">About</button></RouterLink>
            </li>
            <!-- Task 1.4 ends -->
        </ul>
    </div>
    <!-- Task 1.3 ends -->

</template>

<style scoped>
    /* Task 1.3 */
    #sideNavUL {
        display: inline-block;
        position: absolute;
        margin-left: 20px;
        list-style: none;
    }

    .sideNavButtons {
        margin-bottom: 20px;
        cursor: pointer;
        background-color: white;
    }
    /* Task 1.3 ends */
</style>
<script setup>
    // Task 4.1
    console.log("4.1 Login form rendered");
    // Task 4.1 ends

    // Task 4.2
    import { ref, watch, computed } from "vue";

    const email = ref("");
    const password = ref("");

    const emptyFields = computed(() => {
        if (email.value == "" || password.value == "") {
            return true;
        } else {
            return false;
        }
    })

    watch(emptyFields, () => {
        if (emptyFields.value !== false) {
            console.log("4.2 Login button disabled state reflects completeness");
        }
    })    
    // Task 4.2 ends

    // Task 4.3
    import { useUserStore } from "../stores/userStore.js";
    import { useRouter } from "vue-router";
    const userStore = useUserStore();
    const router = useRouter();
    const message = ref(false);

    function loggedIn() {
        router.push("/home");
    }

    function register() {
        router.push("/register");
    }

    function login() {
        const user = {
            email: email.value,
            password: password.value
        };

        userStore.login(user);

        if (userStore.isAuthenticated == true) {
            loggedIn();
            console.log("4.3 Login success");
            message.value = false;
            // Task 5.1
            console.log("5.1 Header updated for signed-in state with user name");
            // Task 5.1 ends
        } else {
            console.log("4.3 Login failed");
            message.value = true;
        }
    };
    // Task 4.3 ends
</script>

<template>
    <div id="container">
        <!-- Task 4.1 -->
        <form id="login">
            <h1 id="Title">Login</h1>
            <!-- Task 4.3 -->
            <p id="messageStatus" v-if="message">Login failed</p>
            <!-- Task 4.3 ends -->
            <!-- Task 4.2 -->
            <div class="labelInput">
                <label for="email">Email: <input type="email" id="email" v-model="email" name="email"></label>
            </div>
            <div class="labelInput">
                <label for="password">Password: <input type="password" id="password" v-model="password" name="password"></label>
            </div>
            <!-- Task 4.3 -->
            <button type="button" @click="login" v-bind:disabled="emptyFields">Login</button>
            <button type="button" @click="register">Register</button>
            <!-- Task 4.3 ends -->
            <!-- Task 4.2 ends -->
            <!-- Task 4.1 ends -->
        </form>
    </div>

</template>

<style scoped>
    #container {
        display: flex;
        justify-self: center;
        align-items: center;
        height: 150px auto;
        background-color: #FEC842ff;
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 50px;
    }

    .labelInput {
        margin: 5px;
        display: flex;
        color: black;
        flex-direction: column;
    }

    #email {
        margin-left: 22px;
    }

    #Title {
        color: black;
        text-align: center;
    }

    #login button {
        margin-top: 25px;
        display: flex;
        justify-self: center;
        cursor: pointer;
        color: black
    }

    #messageStatus {
        color: black;
        text-align: center;
    }
</style>
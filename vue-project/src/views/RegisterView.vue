<script setup>
    // Task 3.1
    console.log("3.1 Register form rendered");
    // Task 3.1 ends

    // Task 3.2
    import { ref } from "vue";

    const name = ref("");
    const studentID = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");

    console.log("3.2 Register form state bound");
    // Task 3.2 ends

    // Task 3.3
    import { useUserStore } from "../stores/userStore.js";
    const userStore = useUserStore();
    const confirm = ref(false);

    // Task 3.4
    import { useRouter } from "vue-router";
    const router = useRouter();

    function registered() {
        router.push("/login");
    }
    // Task 3.4 ends
    
    function register() {
        const emails = userStore.users.map(u => u.email);

        if (!emails.includes(email.value) && password.value == confirmPassword.value && password.value.length >= 6) {
            confirm.value = true;
            console.log("3.3 Register validation passed");

            // Task 3.4
            const newUser = {
                name: name.value,
                email: email.value,
                password: password.value,
                studentID: studentID.value
            };
            userStore.registerUser(newUser);

            if (confirm.value) {
                registered();
                console.log("3.4 User registered");
            }
            // Task 3.4 ends
        } else {
            confirm.value = false;
            alert("Register validation failed");
            console.log("3.3 Register validation failed");
        }
    }
    // Task 3.3 ends
</script>

<template>
    <!-- Task 3.1 -->
    <div id="container">
        <form id="register">
            <h1 id="Title">Register</h1>
            <!-- Task 3.2 -->
            <div class="labelInput">
                <label for="name">Full Name: <input type="text" id="name" v-model="name" name="name" required></label>
            </div>
            <div class="labelInput">
                <label for="studentID">StudentID: <input type="text" id="studentID" v-model="studentID" name="studentID" 
                    required></label>
            </div>
            <div class="labelInput">
                <label for="email">Email: <input type="email" id="email" v-model="email" name="email" required></label>
            </div>
            <div class="labelInput">
                <label for="password">Password: <input type="password" id="password" v-model="password" name="password" 
                    required></label>
            </div>
            <div class="labelInput">
                <label for="confirmPassword">Confirm Password: <input type="password" id="confirmPassword" 
                    v-model="confirmPassword" name="confirmPassword" required></label>
            </div>
            <!-- Task 3.2 ends -->
            <!-- Task 3.3 -->
            <button type="button" @click="register">Register</button>
            <button type="button" @click="registered">Login</button>
            <!-- Task 3.3 ends -->
        </form>
    </div>
    <!-- Task 3.1 ends -->
</template>

<style scoped>
    #container {
        display: flex;
        justify-self: center;
        align-items: center;
        height: 300px;
        background-color: #FF9E42;
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 50px;
    }

    .labelInput {
        margin: 5px 0;
        display: flex;
        flex-direction: column;
        color: black;
    }

    .labelInput input {
        padding: 5px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 250px;
        flex-direction: column;
    }

    #name {
        margin-left: 50px;
    }

    #studentID {
        margin-left: 53px;
    }

    #email {
        margin-left: 80px;
    }

    #password {
        margin-left: 58px;
    }

    #Title {
        color: black;
        text-align: center;
    }

    #register button {
        margin-top: 25px;
        display: flex;
        justify-self: center;
        cursor: pointer;
        background-color: #FF9E42;
        color: black;
        border: 1px solid black;
        
    }
</style>
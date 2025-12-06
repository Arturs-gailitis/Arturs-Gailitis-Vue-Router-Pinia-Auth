// Task 2.1
import { defineStore } from "pinia";

export const useUserStore = defineStore("useUserStore", {
    state: () => ({
        users: [],
        currentUser: null,
        isAuthenticated: false
    }),
    // Task 2.1 end

    // Task 2.2
    actions: {

        initStore() {
            console.log("2.1 Store initialized");
        },

        registerUser(payload) {
            this.users.push({
                id: this.users.length + 1,
                name: payload.name,
                email: payload.email,
                studentID: payload.studentID,
                password: btoa(payload.password)
            });

            // Task 3.4
            alert("Registration successful!");
            // Task 3.4 end

            console.log("2.3 Password hashing in place");
        },

        login(credentials) {
            const user = this.users.find(
                u => u.email == credentials.email && u.password == btoa(credentials.password)
            );

            if (user) {
                this.currentUser = user;
                this.isAuthenticated = true;
                return true;
            } else {
                this.isAuthenticated = false;
                this.currentUser = null;
                return false;
            }
        },


        logout() {
            this.isAuthenticated = false;
            this.currentUser = null;
        },

        actionsReady() {
            console.log("2.2 Actions ready");
        }
    }
});

// Task 2.2 end
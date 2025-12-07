// Task 2.1
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
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

            // Task 8.1
            this.saveInfoToStorage();
            // Task 8.1 end

            // Task 3.4
            alert("Registration successful!");
            // Task 3.4 end

            console.log("2.3 Password hashing in place");
        },

        // Task 8.1
        saveInfoToStorage() {
            localStorage.setItem( "userStore",
                JSON.stringify({
                    users: this.users,
                    currentUser: this.currentUser,
                    isAuthenticated: this.isAuthenticated
                })
            );
            console.log("8.1 State persisted");
        },
        // Task 8.1 end

        login(credentials) {
            const user = this.users.find(
                u => u.email == credentials.email && u.password == btoa(credentials.password)
            );

            if (user) {
                this.currentUser = user;
                this.isAuthenticated = true;
                // Task 8.1
                this.saveInfoToStorage();
                // Task 8.1 end
                return true;
            } else {
                this.currentUser = null;
                this.isAuthenticated = false;
                // Task 8.1
                this.saveInfoToStorage();
                // Task 8.1 end
                return false;
            }
        },

        logout() {
            this.currentUser = null;
            this.isAuthenticated = false;
            // Task 8.1
            this.saveInfoToStorage();
            // Task 8.1 end
        },

        actionsReady() {
            console.log("2.2 Actions ready");
        },

        // Task 8.2
        // Task 8.3
        loadFromStorage() {
            const raw = localStorage.getItem("userStore");

            if (raw !== null) {
                const parsed = JSON.parse(raw);

                this.users = parsed.users || [];
                this.currentUser = parsed.currentUser || null;
                this.isAuthenticated = parsed.isAuthenticated || false;

                console.log("8.2 State restored");
                console.log("8.3 UI restored after reload");
            } else {
                return;
            }
        }
        // Task 8.3 end
        // Task 8.2 end
    }
});
// Task 2.2 end

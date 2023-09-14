<template>
    <div class="registration">
      <h2 class="text-center">Register</h2>
      <form @submit.prevent="registerUser">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            v-model="form.firstName"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            v-model="form.lastName"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="gender">Gender:</label>
          <input type="text" id="gender" v-model="form.Gender" class="input" />
        </div>
        <div class="form-group">
          <label for="userDOB">Date of Birth:</label>
          <input type="number" id="userDOB" v-model="form.userAge" class="input" />
        </div>
        <div class="form-group">
          <label for="userRole">User Role:</label>
          <input
            type="text"
            id="userRole"
            v-model="form.userRole"
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="emailAdd">Email:</label>
          <input
            type="email"
            id="emailAdd"
            v-model="form.emailAdd"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="userPass">Password:</label>
          <input
            type="password"
            id="userPass"
            v-model="form.userPass"
            required
            class="input"
          />
        </div>
        <div class="form-group">
          <label for="profileUrl">Profile URL:</label>
          <input
            type="text"
            id="profileUrl"
            v-model="form.userProfile"
            class="input"
          />
        </div>
        <button type="submit">Register</button>
         <p> You have an account?<router-link to="login">Login</router-link></p>
      </form>
      <p v-if="registrationError" class="error">{{ registrationError }}</p>
    </div>
  </template>
  <script>
  import Swal from 'sweetalert2'
  export default {
    data() {
      return {
        form: {
          firstName: "",
          lastName: "",
          Gender: "",
          userAge: "",
          userRole: "",
          emailAdd: "",
          userPass: "",
          userProfile: "",
        },
        registrationError: null,
      };
    },
    methods: {
      async registerUser() {
        this.registrationError ='error';
        console.log(this.registrationError);
        try {
          const response = await this.$store.dispatch("registerUser", this.form);
          console.log(response);
          console.log(this.form);
          this.$router.push("/login");
        } catch (error) {
          this.registrationError =
            "Registration failed. Please check your inputs and try again.";
        }
      },
    },
  };
  </script>
  <style scoped>
  .registration {
    max-width: 26.875rem;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 1.875rem;
    border: 2px solid maroon;
    border-radius: 0.375rem;
    background: transparent;
  }
  .form-group {
    margin-bottom: 1.25rem;
  }
  label {
    font-size: 1rem;
    font-weight: 600;
    color: maroon;
  }
  .input {
    width: 100%;
    height: 3.125rem;
    padding: 0.938rem;
    border: 0.063rem solid maroon;
    border-radius: 0.375rem;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
  }
  button {
    color: #fff;
    background-color: gold;
    transition: all 0.3s ease;
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    width: 366px;
  }
  button:hover {
    background-color: white;
    color: maroon;
  }
  .error {
    color: red;
    margin-top: 0.625rem;
  }
  h2{
      color: maroon;
  }
  p{
    color: maroon;
  }
  </style>
  
  
  
  
  
  
  
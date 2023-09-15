<template>
  <div class="form-main">
    <div class="main-wrapper">
      <h2 class="form-head">Contact Form</h2>
      <!-- <form class="form-wrapper"> -->
        <form action="https://formspree.io/f/xdordgpj" method="POST" class="form-wrapper">  
        <div class="form-card">
          <input
            class="form-input"
            type="text"
            name="full_name"
            placeholder="Full Name"
          />
          <label class="form-label" for="full_name"></label>
        </div>

        <div class="form-card">
          <input
            class="form-input"
            type="email"
            name="email"
          placeholder="Email"
          />
          <label class="form-label" for="email"></label>
        </div>

        <div class="form-card">
          <input
            class="form-input"
            type="number"
            name="phone_number"
            placeholder="Phone number"
          
          />
          <label class="form-label" for="phone_number"></label>
        </div>

        <div class="form-card">
          <textarea
            class="form-textarea"
            maxlength="420"
            rows="3"
            name="phone_number"
            placeholder="Subject"
           
       
          ></textarea>
          <label class="form-textarea-label" for="phone_number"
            >Address</label
          >
        </div>
        <div class="btn-wrap">
          <button type="submit"> Submit </button>
        </div>
      </form>
    </div>
  </div>
<!-- </form>  -->
</template>
<script>
export default {
  data() {
    return {
      formData: {
        full_name: "",
        email: "",
        phone_number: ""
      },
      errors: {}
    };
  },
  methods: {
    submitForm() {
      // Reset errors
      this.errors = {};

      // Perform validation
      if (!this.formData.full_name) {
        this.errors.full_name = "Full Name is required.";
      }

      if (!this.formData.email) {
        this.errors.email = "Email is required.";
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.email = "Invalid email address.";
      }

      if (!this.formData.phone_number) {
        this.errors.phone_number = "Phone Number is required.";
      }

      // If there are no errors, you can submit the form data
      if (Object.keys(this.errors).length === 0) {
        // Send the form data to your backend or perform the desired action
        console.log("Form submitted:", this.formData);
      }
    },
    isValidEmail(email) {
      // Basic email validation, you can replace with a more complex regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
};
</script>
<style  scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap");
color-gray: #515151;
$color-black: #000;

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
h2{
  color: maroon;
  font-family: 'Black Ops One', cursive;
}

.form-main {
  background: linear-gradient(to bottom, #00000024, #00000024),
    url(https://res.cloudinary.com/dqifboxk5/image/upload/v1686209968/contact-us-2_y8zzx7.jpg)
      no-repeat center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .main-wrapper {
    border-radius: 10px;
    padding: 45px;
    width: 40%;
    box-shadow: 0 0 5px 5px #00000020;
    backdrop-filter: blur(5px);
    background-color: #ffffff85;
    @media screen and (max-width: 991px) {
      width: 70%;
    }
    @media screen and (max-width: 767px) {
      width: 90%;
    }
    .form-head {
      font-size: 30px;
      line-height: 40px;
      font-weight: 600;
      text-align: center;
      margin: 0px 0 25px;
    }
    .form-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 15px;
      .form-card {
        position: relative;
        width: 100%;

        .form-input {
          padding: 20px 25px 15px;
          width: 100%;
          border: 1px solid $color-black;
          border-radius: 5px;
          background: transparent;
          outline: none;
          font-size: 20px;
          line-height: 30px;
          font-weight: 400;
              box-sizing: border-box;
        
         :focus {
            border: 1px solid ;
            color:gray;
          }

          :valid ~ .form-label,
          :focus ~ .form-label {
            color: maroon;
            top: 30%;
            transform: translateY(-70%);
            font-size: 13px;
            line-height: 23px;
          }

          :-webkit-autofill,
          :-webkit-autofill:hover,
          :-webkit-autofill:focus,
          :-webkit-autofill:active {
            transition: background-color 9999s ease-in-out 0s;
          }
          ::-webkit-outer-spin-button,
          ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }

        .form-label {
          position: absolute;
          left: 25px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          transition: 0.3s;
          margin: 0;
          font-size: 18px;
          line-height: 28px;
          font-weight: 500;
        }
        .form-textarea {
          padding: 20px 25px 15px;
          width: 100%;
          border: 1px solid gold;
          border-radius: 5px;
          background: transparent;
          outline: none;
          font-size: 20px;
          line-height: 30px;
          font-weight: 400;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          resize: none;
              box-sizing: border-box;

          &:valid,
          &:focus {
            border: 1px solid $color-gray;
          }

          &:valid ~ .form-textarea-label,
          &:focus ~ .form-textarea-label {
            color: $color-gray;
            top: 18%;
            transform: translateY(-82%);
            font-size: 13px;
            line-height: 23px;
          }

          &:-webkit-autofill,
          &:-webkit-autofill:hover,
          &:-webkit-autofill:focus,
          &:-webkit-autofill:active {
            transition: background-color 9999s ease-in-out 0s;
          }
        }
        .form-textarea-label {
          position: absolute;
          left: 25px;
          top: 30%;
          transform: translateY(-70%);
          pointer-events: none;
          transition: 0.3s;
          margin: 0;
          font-size: 18px;
          line-height: 28px;
          font-weight: 500;
        }
      }
    }
  }
}
.btn-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
padding: 16px 0 0;
  }
.btn-wrap button {
  padding: 0 32px;
  font-size: 18px;
  line-height: 48px;
  border: 1px solid transparent;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.5s ease;
  cursor: pointer; box-shadow: 0 0 5px 5px #00000020;
}
.btn-wrap button:hover {
  border: 1px solid gold;
  background: transparent;
  color:(maroon);
  
}

</style>

<template id="">
  <div class="form-inline">
    <h3>Sign Up</h3>
    <div class="form-group">
      <input type="text" placeholder="Email" class="form-control" v-model="email" >
      <input type="password" placeholder="Password" class="form-control" v-model="password" >
      <button  @click="signUp" type="button" class="btn btn-primary" >Sign Up</button>
    </div>
    <br>
    <router-link to="/signin">Already a user? Sign In </router-link>
    <p>{{error.message}}</p>
  </div>
</template>


<script>
import { firebaseApp } from '../firebaseApp'

export default {
  data (){
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email,this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

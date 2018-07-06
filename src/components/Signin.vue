<template id="">
  <div class="form-inline">
    <h3>Sign In</h3>
    <div class="form-group">
      <input type="text" placeholder="Email" class="form-control" v-model="email" >
      <input type="password" placeholder="Password" class="form-control" v-model="password" >
      <button  @click="signIn" type="button" class="btn btn-primary" >Sign In</button>
    </div>

    <br>
    <p>{{error.message}}</p>
  </div>
</template>


<script>
import { firebaseApp } from '../firebaseApp'
  export default {
    data(){
      return {
        email: '',
        password: '',
        error: {
          message: ''
        }
      }
    },
    methods: {
      signIn() {
        firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
          .catch(error => {
            this.error = error
          })
      }
    }
  }
</script>

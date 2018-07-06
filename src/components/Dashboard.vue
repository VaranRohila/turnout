<template >
  <div class="">
    <h3>Events</h3>
    <button type="button" @click='signOut' class="btn btn-danger btn-sm signout-btn ">Sign Out</button>
  </div>
</template>

<script>
import { firebaseApp} from '../firebaseApp'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  }
}
</script>

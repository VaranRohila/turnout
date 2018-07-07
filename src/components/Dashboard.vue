<template >
  <div class="">
    <h3>Events</h3>
    <button type="button" @click='signOut' class="btn btn-danger btn-sm signout-btn ">Sign Out</button>
    <hr>
    <AddEvent/>
    <hr>
  </div>
</template>

<script>
import { firebaseApp} from '../firebaseApp'
import AddEvent from './AddEvent.vue'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  },
  components: {
    AddEvent
  }
}
</script>

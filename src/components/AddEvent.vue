<template >
  <div>
    <h4><input type="checkbox" v-model="showform">&nbsp; Add an Event</h4>

    <div class="form" v-if="showform">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" v-model="event.title">
      </div>
      <div class="form-group">
        <label>description</label>
        <input type="text" class="form-control" v-model="event.description">
      </div>
      <div class="form-group">
        <label>Date</label>
        <input type="date" class="form-control" v-model="event.date">
      </div>
      <div class="form-group">
        <label>Location</label>
        <input type="text" class="form-control" v-model="event.location">
      </div>
      <button type="button" class="btn btn-primary btn-sm" @click="addEvent">Submit</button>
    </div>
</div>
</template>

<script >
import { eventsRef } from '../firebaseApp'
  export default {
    data(){
      return {
        event: {
          title: '',
          description: '',
          date: '',
          location: '',
          email: '',
        },
        showform: false
      }
    },
    methods: {
      addEvent() {
        this.event.email = this.$store.state.user.email;
        eventsRef.push(this.event)
      }
    }
  }
</script>

<template >
  <div class="">
    <div class="col-md-3">
      <div class="card" >
        <div class="card-body">
          <h3 class="card-title"></h3>
          <p class="card-text"><b>Title:</b> {{event.title}}</p>
          <hr>
          <p class="card-text"><b>Description:</b> {{event.description}}</p>
          <hr>
          <p class="card-text"><b>Date:</b> {{event.date}}</p>
          <hr>
          <p class="card-text"><b>Email:</b> {{event.email}}</p>
          <hr>
          <p class="card-text"><b>Location:</b> {{event.location}}</p>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['event']
  }
</script>

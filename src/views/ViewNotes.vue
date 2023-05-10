<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new not" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">
            Add New Notes
          </button>
        </div>
      </div>
    </div>

    <div v-for="i in 3" class="card mb-4">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          quidem dignissimos voluptates illo veniam harum expedita tenetur quos,
          rem fugiat quis sint reiciendis? Quam suscipit incidunt consequatur
          alias odio in?
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
    <h1>Notes</h1>
  </div>
</template>

<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Notes
          </button>
        </div>
      </div>
    </div>

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />

    <!-- <div v-for="note in notes" :key="note.id" class="card mb-4">
      <div class="card-content">
        <div class="content">{{ note.content }}</div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";

const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: "id1",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro molestiae, architecto voluptas consequuntur beatae, enim possimus accusamus quasi sapiente blanditiis nisi facilis sint, ab nesciunt quos iure! Beatae magni consectetur ex, error exercitationem fugit totam doloribus. Dolores sed dicta veniam. ",
  },
  {
    id: "id2",
    content: "This is a shorter note. Woo!",
  },
]);

const addNote = () => {
  // Generate fake ID using timestamp; use uuid npm v4
  let currentDate = new Date().getTime(),
    id = currentDate.toString();

  let note = {
    id,
    content: newNote.value,
  };

  notes.value.unshift(note); // Add note on top of prev note
  newNote.value = ""; // Clear textarea after adding new note
  newNoteRef.value.focus(); // Focus on textarea after entering a new note
};

const deleteNote = (idToDelete) => {
  // console.log("Deleting".idToDelete);
  notes.value = notes.value.filter((note) => {
    return note.id !== idToDelete;
  });
};
</script>

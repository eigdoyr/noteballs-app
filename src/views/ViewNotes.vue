<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef">
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Notes
        </button>
      </template>
    </AddEditNote>
    <!-- <div class="card has-background-success-dark p-4 mb-5">
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
    </div> -->

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

/*
  store
 */
const storeNotes = useStoreNotes();

/*
  notes
 */

const newNote = ref("");
const addEditNoteRef = ref("null");

const addNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = ""; // Clear textarea after adding new note
  addEditNoteRef.value.focusTextArea();
};
</script>

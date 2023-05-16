import { defineStore } from "pinia";
import { db } from "@/js/firebase";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content: "lorem pinia 🍍",
        },
        {
          id: "id2",
          content: "This is a note. Woo! I need to add lorem ipsum ...",
        },
      ],
    };
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        id = currentDate.toString(); // Generate fake ID using timestamp; could use uuid npm v4

      let note = {
        id,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => {
          return note.id === id;
        })[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharacterCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});

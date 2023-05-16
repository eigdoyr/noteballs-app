import { defineStore } from "pinia";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/js/firebase";

const notesCollectionRef = collection(db, "notes");
const notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        // {
        //   id: "id1",
        //   content: "lorem pinia 🍍",
        // },
        // {
        //   id: "id2",
        //   content: "This is a note. Woo! I need to add lorem ipsum ...",
        // },
      ],
      notesLoaded: false,
    };
  },
  actions: {
    async getNotes() {
      this.notesLoaded = false;
      // const querySnapshot = await getDocs(collection(db, "notes"));
      // querySnapshot.forEach((doc) => {
      //   // console.log(doc.id, " => ", doc.data());
      //   let note = {
      //     id: doc.id,
      //     content: doc.data().content,
      //   };
      //   this.notes.push(note);
      // });
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          };
          notes.push(note);
        });

        this.notes = notes;
        this.notesLoaded = true;
      });
    },
    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(),
        date = currentDate.toString(); // Generate fake ID using timestamp; could use uuid npm v4

      // let note = {
      //   id,
      //   content: newNoteContent,
      // };

      // this.notes.unshift(note);

      // await setDoc(doc(notesCollectionRef, id), {
      //   content: newNoteContent,
      //   id,
      // });

      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date,
      });
    },
    async deleteNote(idToDelete) {
      // this.notes = this.notes.filter((note) => note.id !== idToDelete);
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    async updateNote(id, content) {
      // let index = this.notes.findIndex((note) => note.id === id);
      // this.notes[index].content = content;
      await updateDoc(doc(notesCollectionRef, id), {
        content,
      });
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

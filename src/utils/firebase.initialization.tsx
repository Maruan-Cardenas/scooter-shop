import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyACwm_X1edhlXl9dSS7nmOfMnJRpaI6JWE',
  authDomain: 'todo-patinete.firebaseapp.com',
  projectId: 'todo-patinete',
  storageBucket: 'todo-patinete.appspot.com',
  messagingSenderId: '952453220543',
  appId: '1:952453220543:web:67612e46df14166ce71e0a'
})

export const db = getFirestore(firebaseConfig)
export const auth = getAuth(firebaseConfig)
export const storage = getStorage(firebaseConfig)

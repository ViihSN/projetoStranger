import app from './app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'

export async function subscribeToHelfireClube(subscription){
  const db = getFirestore(app)
  const helfireClubeCollection = collection(db, 'helfire-clube') 
  const docRef = await addDoc(helfireClubeCollection, subscription)
  return docRef.id
}

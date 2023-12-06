import {getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase';
import { useState } from 'react';

export const Main = () => {
  const [postsList, setPostsList] = useState()
  const postsRef = collection(db, "posts");
  return (
    <div> 

    </div>
  )
}
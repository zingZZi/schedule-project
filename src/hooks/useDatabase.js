import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";
export const useDatabase = () => {
  const [isPendig, setIsPendig] = useState(false);
  const [error, setError] = useState(null);
  //데이터 추가
  async function addData(collectionName, data) {
    try {
      const createdTime = Timestamp.fromDate(new Date());
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdTime,
      });
    } catch (error) {
      setError(error.message);
    }
  }

  return { addData };
};

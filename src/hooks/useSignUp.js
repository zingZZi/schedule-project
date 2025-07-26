import { useState } from "react";
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDatabase } from "./useDatabase";

export const useSignUp = () => {
  const [isPendig, setIsPendig] = useState(false);
  const [error, setError] = useState(null);
  const { addData } = useDatabase();

  function signUp(email, password, displayName, teamId, positionId) {
    setIsPendig(true);
    setError(null);
    //firebase 통신
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user) {
          throw new Error("회원가입에 실패했습니다.");
        }
        updateProfile(appAuth.currentUser, {
          displayName: displayName,
          photoURL: "",
        })
          .then(() => {
            setIsPendig(false);
            setError(null);
            addData("userInfo", {
              uid: user.uid,
              email,
              displayName,
              teamId,
              positionId,
            });
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return { signUp, isPendig, error };
};

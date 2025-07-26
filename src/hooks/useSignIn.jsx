import { useState } from "react";
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignIn = () => {
  const [isPendig, setIsPendig] = useState(false);
  const [error, setError] = useState(null);

  function login(email, password, displayName, teamId, positionId) {
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
            // Profile updated!
            // ...
          })
          .catch((error) => {
            setError(errorMessage);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return { login, isPendig, error };
};

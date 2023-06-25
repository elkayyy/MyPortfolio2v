import { get, ref, set, remove} from "firebase/database";
import { uid } from "uid";
import { db} from "../config/firebase";

export const checkCredentials = async (login, password) => {
  const snapshot = await get(ref(db, "/"));
  const users = snapshot.val();

  for (const index in users) {
    const userData = users[index];
    if (userData.login === login && userData.password === password) {
      return true; 
    
    }
  }
  return false; 
};

export const readFromDatabase = async () => {
  const snapshot = await get(ref(db, "/"));
  const users = snapshot.val();

  return users;
};

export const writeToDatabase = async (login, password , dateAdded) => {
  const usersRef = ref(db, '/');
  const snapshot = await get(usersRef);

  const users = Object.values(snapshot.val());
  const isDuplicate = users.some((user) => user.login === login);
  
  if (!isDuplicate) {
    const userId = uid();
    const date = new Date();
    const dateString = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    set(ref(db, `/${userId}`), {
      login,
      password,
      userId,
      dateString
    });
  }
};

export const deleteUserFromDatabase = (user) => {
  remove(ref(db, `/${user.userId}`))
};


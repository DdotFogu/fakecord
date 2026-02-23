import { createContext, useContext, useEffect, useState } from "react";
import Fakecord from "./pages/fakecord";

import defaultPfp from "./assets/images/default-pfp.webp";

class User {
  username: string;
  displayname: string;
  pfpUrl: string;
  id: number;
  removeabled : boolean = true;

  constructor(username: string, displayname: string, id: number, removeabled: boolean = true) {
    this.username = username;
    this.displayname = displayname;
    this.pfpUrl = defaultPfp;
    this.id = id;
    this.removeabled = removeabled;
  }
}

const UserContext = createContext<any>(null);

export const useUsers = () => {
  return useContext(UserContext);
};

function App() {
  const [users, setUsers] = useState<Record<number, User>>({[1]: new User("newuser", "New User", 1, false)})

  const addUser = () => {
    // TODO THIS IS TEMP, WHEN REMOVING ALL ABOVES IDS SHOULD DECREMENT
    let newId = 1;
    while (users[newId]) {
      newId++;
    }
    // TODO this is bad
    
    console.log("adding user with id:", newId);
    setUsers({...users, [newId]: new User("newuser", "New User", newId)})
  }

  const removeUser = (id: number) => {
    console.log("removing user with id:", id);
    
    const newUsers = {...users};
    delete newUsers[id];
    setUsers(newUsers);
  }

  useEffect(() => {
    console.log(users);
  }, [users]);

  

  const addMsg = () => {
    
  }

  return (
    <>
      <UserContext.Provider value={{ users, addUser, removeUser, addMsg }}>
      <div>
        <Fakecord/>
      </div>
    </UserContext.Provider>
    </>
  )
}

export default App

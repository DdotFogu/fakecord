import { createContext, useContext, useEffect, useState } from "react";
import Creator from "./pages/Creator";

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

class Msg {
  owner: User;
  time: Date;
  content: string;

  constructor(owner: User, time: Date,content: string) {
    this.owner = owner;
    this.content = content;
    this.time = time;
  }
}

const UserContext = createContext<any>({
  users: {},
  addUser: () => {},
  removeUser: (_id: number) => {},
  setUserName: (_id: number, _name: string) => {},
  setUserDisplay: (_id: number, _displayname: string) => {},
  setUserPfpUrl: (_id: number, _pfpUrl: string) => {},
  msgs: [],
  addMsg: () => {},
  removeMsg: (_index: number) => {},
  setMsgContent: (_index: number, _content: string) => {},
  setMsgOwner: (_index: number, _owner: User) => {},
  setMsgTime: (_index: number, _time: Date) => {},
});

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

  const setUserName = (id: number, username: string) => {
    const newUsers = {...users};
    newUsers[id].username = username;
    setUsers(newUsers);
  }

  const setUserDisplay = (id: number, displayname: string) => {
    const newUsers = {...users};
    newUsers[id].displayname = displayname;
    setUsers(newUsers);
  }

  const setUserPfpUrl = (id: number, pfpUrl: string) => {
    const newUsers = {...users};
    newUsers[id].pfpUrl = pfpUrl;
    setUsers(newUsers);
  }

  useEffect(() => {
    console.log(users);
  }, [users]);

  const [msgs, setMsgs] = useState<Array<Msg>>([new Msg(users[1], new Date(), "New Message")]);

  const addMsg = () => {  
    const msg = new Msg(users[1], new Date(), "New Message");
    setMsgs([...msgs, msg]);
  }

  const removeMsg = (index: number) => {
    const newMsgs = [...msgs];
    newMsgs.splice(index, 1);
    setMsgs(newMsgs);
  }

  const setMsgContent = (index: number, content: string) => {
    const newMsgs = [...msgs];
    newMsgs[index].content = content;
    setMsgs(newMsgs);
  }

  const setMsgOwner = (index: number, owner: User) => {
    const newMsgs = [...msgs];
    newMsgs[index].owner = owner;
    setMsgs(newMsgs);
  }

  const setMsgTime = (index: number, time: Date) => {
    const newMsgs = [...msgs];
    newMsgs[index].time = time;
    setMsgs(newMsgs);
  }

  useEffect(() => {
    console.log(msgs);
  }, [msgs]);


  return (
    <>
      <UserContext.Provider value={{ users, addUser, removeUser, setUserName, setUserDisplay, setUserPfpUrl, msgs, addMsg, removeMsg, setMsgContent, setMsgOwner, setMsgTime}}>
        <div>
          <Creator/>
        </div>
      </UserContext.Provider>
    </>
  )
}

export default App

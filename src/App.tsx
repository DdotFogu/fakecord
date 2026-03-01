import { createContext, useContext, useEffect, useState } from "react";
import Creator from "./pages/Creator";
import Fakecord from "./pages/Fakecord";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import defaultPfp from "./assets/images/default-pfp.webp";

class User {
  username: string;
  displayname: string;
  pfpUrl: string;
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

class Server {
  name: string;
  pfpUrl: string;

  constructor(name:string, pfpUrl:string){
    this.name = name
    this.pfpUrl = pfpUrl
  }
}

const UserContext = createContext<any>({
  users: [],
  addUser: () => {},
  removeUser: (_index: number) => {},
  setUserName: (_index: number, _name: string) => {},
  setUserDisplay: (_index: number, _displayname: string) => {},
  setUserPfpUrl: (_index: number, _pfpUrl: string) => {},
  msgs: [],
  addMsg: () => {},
  removeMsg: (_index: number) => {},
  setMsgContent: (_index: number, _content: string) => {},
  setMsgOwner: (_index: number, _owner: User) => {},
  setMsgTime: (_index: number, _time: Date) => {},
  servers: [],
  addServer: [],
  removeServer: (_index: number) => {},
  setServerName: (_index: number, name: string) => {},
  setServerPfpUrl: (_index: number, pfpUrl: string) => {},
});

export const useUsers = () => {
  return useContext(UserContext);
};

function App() {
  const [users, setUsers] = useState<Array<User>>([
    new User("newuser", "New User", 0, false),
  ])

  const addUser = () => {
    const user = new User("newuser", "New User", users.length, true);
    setUsers([...users, user]);
  }

  const removeUser = (index: number) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  }

  const setUserName = (_index: number, username: string) => {
    const newUsers = [...users];
    newUsers[_index].username = username;
    setUsers(newUsers);
  }

  const setUserDisplay = (_index: number, displayname: string) => {
    const newUsers = [...users];
    newUsers[_index].displayname = displayname;
    setUsers(newUsers);
  }

  const setUserPfpUrl = (_index: number, pfpUrl: string) => {
    const newUsers = [...users];
    newUsers[_index].pfpUrl = pfpUrl;
    setUsers(newUsers);
  }

  useEffect(() => {
    console.log(users);
  }, [users]);

  const [msgs, setMsgs] = useState<Array<Msg>>([new Msg(users[0], new Date(), "New Message")]);
  
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

  const [servers, setServers] = useState<Array<Server>>([new Server("ServerName", defaultPfp)]);

  const addServer = () => {
    const server = new Server("New Message", defaultPfp);
    setServers([...servers, server]);
  }

  const removeServer = (index: number) => {
    const newServers = [...servers];
    newServers.splice(index, 1);
    setServers(newServers);
  }

  const setServerName = (index: number, name: string) => {
    const newServers = [...servers];
    newServers[index].name = name
    setServers(newServers);
  }

  const setServerPfpUrl = (index: number, pfpUrl: string) => {
    const newServers = [...servers];
    newServers[index].pfpUrl = pfpUrl;
    setServers(newServers);
  }

  useEffect(() => {
    console.log(servers);
  }, [servers]);

  return (
    <Router>
      <UserContext.Provider value={{ users, addUser, removeUser, setUserName, setUserDisplay, setUserPfpUrl, msgs, addMsg, removeMsg, setMsgContent, setMsgOwner, setMsgTime, servers, addServer, removeServer, setServerName, setServerPfpUrl}}>
        <Routes>
          <Route path="/" element={<Creator/>} />
          <Route path="/fakecord" element={<Fakecord/>} />
        </Routes>
      </UserContext.Provider>
    </Router>
  )
}

export default App

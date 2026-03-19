import { createContext, useContext, useEffect, useState } from "react";
import { User, Msg, Server, Dm } from "../types";

const Context = createContext<any>({ 
  users: [],
  addUser: () => {},
  removeUser: (_index: number) => {},
  setUserName: (_index: number, _name: string) => {},
  setUserDisplay: (_index: number, _displayname: string) => {},
  setUserPfpUrl: (_index: number, _pfpUrl: string) => {},
  setUserDate: (_index: number, _date: Date) => {},
  setUserBio: (_index: number, _bio: string) => {},
  setUserDm: (_index: number, _bool: boolean) => {},
  msgs: [],
  addMsg: (_msg : Msg) => {},
  removeMsg: (_index: number) => {},
  setMsgContent: (_index: number, _content: string) => {},
  setMsgOwner: (_index: number, _owner: User) => {},
  setMsgTime: (_index: number, _time: Date) => {},
  servers: [],
  addServer: [],
  removeServer: (_index: number) => {},
  setServerName: (_index: number, _name: string) => {},
  setServerPfpUrl: (_index: number, _pfpUrl: string) => {},
 });

export const useUsers = () => useContext(Context);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([new User(false)]);
  const [msgs, setMsgs]   = useState<Msg[]>([new Msg(users[0])]);
  const [servers, setServers] = useState<Server[]>([new Server()]);
  const [dms, setDms] = useState<Dm[]>([new Dm()]);

  const addUser = () => {
    const user = new User(true);
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
    console.log(_index)
    const newUsers = [...users];
    newUsers[_index].pfpUrl = pfpUrl;
    setUsers(newUsers);
  }

  const setUserDate = (_index: number, date: Date) => {
    const newUsers = [...users];
    newUsers[_index].dateJoined = date;
    setUsers(newUsers);
  }

  const setUserDm = (_index: number, bool: boolean) => {
    const newUsers = [...users];
    newUsers[_index].dm = bool;
    setUsers(newUsers);
  }

  const setUserBio = (_index: number, bio: string) => {
    const newUsers = [...users];
    newUsers[_index].bio = bio;
    setUsers(newUsers);
  }

  useEffect(() => {
    console.log(users);
  }, [users]);

  const addMsg = ( msg : Msg = new Msg(users[0])) => {  
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

  const addServer = () => {
    const server = new Server();
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

  // Create funcs to setting dms. ADD DM / REMOVE DM / SET DM USERs / SET DM MSGS / SET DM NAME / SET DM PFP
  // When you began to implement dms you'll have to go back and remove the msg

  useEffect(() => {
    console.log(servers);
  }, [servers]);

  return (
    <Context.Provider value={{
      users, addUser, removeUser, setUserName, setUserDisplay, setUserPfpUrl, setUserDate, setUserBio, setUserDm,
      msgs, addMsg, removeMsg, setMsgContent, setMsgOwner, setMsgTime, 
      servers, addServer, removeServer, setServerName, setServerPfpUrl, 
    }}>
      {children}
    </Context.Provider>
  );
}
import { useUsers,  } from "../App";
import { useState } from "react";
import UserDetails from "../components/userdetails";
import MsgDetails from "../components/msgdetails";
import ServerDetails from "../components/serverdetails";
import DmDetails from "../components/dmsdetails";

import { Msg } from "../App";
import { User } from "../App";
import { Link } from "react-router-dom";
import type { Server } from "../App";

function Creator() {
  const { users, addUser, msgs, addMsg, servers, addServer, dms, addDms} = useUsers();

  const [selectedUserId, setSelectedUserId] = useState<number>(0);

  return (
    <>
        <h1>Fakecord: Fake Discord Messages</h1>

        <div className="flex flex-row gap-4">
          {/* where user can create users */}
          <div>
            <h2>Users</h2>
            <div 
            id="user-list"
            className="flex flex-col gap-1"
            >
              {users.map((user: User) => {
                console.log(user);
                return (
                  <UserDetails key={users.indexOf(user)} user={user} />
                );
              })}
            </div> 

            <button
            onClick={addUser}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            </button>
          </div>
          

          {/* where user can create messages */}
          <div>
            <h2>Messages</h2>
            <div 
            id="user-list"
            className="flex flex-col gap-1"
            >
              {msgs.map((msg : Msg) => (
                <MsgDetails key={msgs.indexOf(msg)} msg={msg}/>
              ))}
            </div> 
            <button
              onClick={() => {
                addMsg(new Msg(users[0], new Date(), ""));
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            </button>
          </div>

          {/* where user add server tabs */}
          <div>
            <h2>Servers</h2>
            <div 
            className="flex flex-col gap-1"
            >
              {servers.map((server : Server) => (
                <ServerDetails key={servers.indexOf(server)} server={server}/>
              ))}
            </div> 
            <button
              onClick={addServer}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            </button>
          </div>

          {/* where user add dm tabs */}
          <div>
            <h2>Dms</h2>
            <div 
            className="flex flex-col gap-1"
            >
              {dms.map((user : User) => (
                <DmDetails key={dms.indexOf(user)} owner={user}/>
              ))}
            </div> 
            <button
              onClick={() => addDms(users[selectedUserId])}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            </button>

            <select
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(parseInt(e.target.value))}
            >
              {users.map((user: User) => (
                <option key={user.id} value={user.id}>
                  {user.displayname} ({user.username})
                </option>
              ))}
            </select>
          </div>

          <Link to="/fakecord" 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-fit w-fit">
            Open Fakecord
          </Link>
        </div>
    </>
  )
}

export default Creator

import { useUsers } from "../App";
import UserDetails from "../components/userdetails";
import MsgDetails from "../components/msgdetails";
import ServerDetails from "../components/serverdetails";
import type { Msg } from "../App";
import type { Server } from "../App";
import type { User } from "../App";
import { Link } from "react-router-dom";

// TODO MAKE IT WHEN EDITING THE DETAILS ACUTALLY CHANGES THE USERS OBJECT
function Creator() {
  const { users, addUser, msgs, addMsg, servers, addServer} = useUsers();

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
              {users.map((user : User) => (
                <UserDetails key={users.indexOf(user)} user={user}/>
              ))}
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
              onClick={addMsg}
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

          <Link to="/fakecord" 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-fit w-fit">
            Open Fakecord
          </Link>
        </div>
    </>
  )
}

export default Creator

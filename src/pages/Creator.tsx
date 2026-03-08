import { useUsers } from "../App";
import UserDetails from "../components/creator/userdetails";
import MsgDetails from "../components/creator/msgdetails";
import ServerDetails from "../components/creator/serverdetails";

import { Msg } from "../App";
import { User } from "../App";
import { Link } from "react-router-dom";
import type { Server } from "../App";

function Creator() {
  const { users, addUser, msgs, addMsg, servers, addServer} = useUsers();

  return (
    <>
      <div className="flex flex-row gap-4 p-2">
        {/* where user can create users */}
        <div className="flex flex-col">
          <span className="bg-gray-3 text-white rounded-2xl p-2 min-w-[524px] max-h-[596px] overflow-y-auto overflow-x-hidden border border-white flex flex-col gap-1">
              {users.map((user: User) => {
                return (
                  <UserDetails key={users.indexOf(user)} user={user} />
                );
              })}
          </span>

          <button
            onClick={addUser}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
          </button>
        </div>
        

        {/* where user can create messages */}
        <div className="flex flex-col">
          <span className="bg-gray-3 text-white rounded-2xl p-2 min-w-[524px] max-h-[596px] overflow-y-auto border border-white h-fit flex flex-col gap-1">
            {msgs.map((msg : Msg) => (
              <MsgDetails key={msgs.indexOf(msg)} msg={msg}/>
            ))}
          </span>
          <button
              onClick={() => {
                addMsg(new Msg(users[0]));
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
          </button>
        </div>

        {/* where user add server tabs */}
        <div className="flex flex-col">
          <span 
            className="bg-gray-3 text-white rounded-2xl p-2 overflow-y-auto border border-white h-fit flex flex-col gap-1 max-h-[596px]"
          >
            {servers.map((server : Server) => (
              <ServerDetails key={servers.indexOf(server)} server={server}/>
            ))}
          </span>
          <button
            onClick={addServer}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
          </button> 
        </div>

        { users.length > 1 && <Link to="/fakecord" 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-fit w-fit"
        >
          Open Fakecord
        </Link>}
      </div>
    </>
  )
}

export default Creator

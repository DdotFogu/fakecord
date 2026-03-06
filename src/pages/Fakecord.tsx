import { Fragment } from "react";
import { Server, Msg, User, useUsers } from "../App";
import { Link } from "react-router-dom";

import ServerButton from "../components/serverbutton";
import DmTab from "../components/dmtab"; 
import MsgContent from "../components/msg";
import Dateruler from "../components/dateruler";
import add from "../assets/images/add.webp";
import download from "../assets/images/download.webp"
import discover from "../assets/images/discover.webp"

function Fakecord() {
  const { users, msgs, servers, dms, addMsg } = useUsers();

  return (
    <>
      {/* Top Header */}
      <header className="header-root">
        <span className="flex-1 flex items-center justify-center gap-2 h-full">       
          <svg width="14px" height="14px" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><g><path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#c5c6ca" fill-rule="nonzero" /></g></svg>
          <p className="text-white font-gg font-light text-sm">Direct Messages</p>
        </span>

        <span className="flex gap-5 absolute right-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9D9EA5"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm349-222q31-22 43-58h168v-360H200v360h168q12 36 43 58t69 22q38 0 69-22Z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9D9EA5"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
        </span>
      </header>

      {/* User Footer */}
      <footer className="footer-root">
        <div className="w-full h-full rounded-md flex justify-start items-center p-1 gap-2">
          <img
            src={users[0].pfpUrl}
            width={32}
            height={32}
            className="pfp-img"
          />
          <span className="flex flex-col my-1">
            <p className="text-white font-gg font-semibold">{users[0].displayname}</p>
            <p className="text-white text-xs font-gg align-top">Online</p>
          </span>
        </div>

        <span className="footer-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#9D9EA5"><path d="M395-435q-35-35-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35q-50 0-85-35Zm45 315v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#9D9EA5"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </span>

        <span className="footer-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#9D9EA5"><path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#9D9EA5"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </span>

        <span className="footer-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#9D9EA5"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z"/></svg>
        </span>
      </footer>
      
      <span className="flex h-[calc(100%-32px)]">
        {/* Server and Dms */}
        <aside className="flex">
          {/* Servers */}
          <div className="servers-root no-scrollbar">
            <Link to="/">
              <ServerButton iconSize={34} bgColor="#5865F2"/>
            </Link>

            <hr className="w-8 common-ruler"/>

            {servers.map((server : Server) => (
                <ServerButton serverIcon={server.pfpUrl} iconSize={40}/>
              ))}

            <ServerButton serverIcon={add} iconSize={24}/>
            <ServerButton serverIcon={discover} iconSize={24}/>
            <ServerButton serverIcon={download} iconSize={24}/>
          </div>
          
          {/* Dms */}
          <div className="dms-root">
            <span className="find-convo">
              Find or start an conversation
            </span>
            
            <span className="overflow-y-auto w-full h-full scrollbar mb-17">
              <hr className="common-ruler w-full" />

              <div className="w-full h-fit p-2 flex flex-col gap-1 mt-1">
                <span className="tab-title">
                  <svg xmlns="http://www.w3.org/1999/xlink" x="0" y="0" className="icon__9293f" aria-hidden="true" role="img" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="oklab(0.584697 0.0022063 -0.0119632)" d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path><path fill="oklab(0.584697 0.0022063 -0.0119632)" d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z"></path></svg>
                  Friends
                </span>
                <span className="tab-title">
                  <svg xmlns="http://www.w3.org/1999/xlink" className="linkButtonIcon__972a0" aria-hidden="true" role="img" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="oklab(0.631828 0.00217235 -0.0117263)" d="M16.23 12c0 1.29-.95 2.25-2.22 2.25A2.18 2.18 0 0 1 11.8 12c0-1.29.95-2.25 2.22-2.25 1.27 0 2.22.96 2.22 2.25ZM23 12c0 5.01-4 9-8.99 9a8.93 8.93 0 0 1-8.75-6.9H3.34l-.9-4.2H5.3c.26-.96.68-1.89 1.21-2.7H1.89L1 3h12.74C19.13 3 23 6.99 23 12Zm-4.26 0c0-2.67-2.1-4.8-4.73-4.8A4.74 4.74 0 0 0 9.28 12c0 2.67 2.1 4.8 4.73 4.8a4.74 4.74 0 0 0 4.73-4.8Z"></path></svg>
                  Nitro
                </span>
                <span className="tab-title">
                  <svg xmlns="http://www.w3.org/1999/xlink" className="linkButtonIcon__972a0" aria-hidden="true" role="img" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="oklab(0.631828 0.00217235 -0.0117263)" d="M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a3.65 3.65 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z"></path><path fill="oklab(0.631828 0.00217235 -0.0117263)" d="M21 11.42V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75c0 .14-.11.25-.25.25H6a3 3 0 0 1-3-3v-7.58c0-.18.2-.3.37-.24a4.46 4.46 0 0 0 4.94-1.1c.1-.12.3-.12.4 0a4.49 4.49 0 0 0 6.58 0c.1-.12.3-.12.4 0a4.45 4.45 0 0 0 4.94 1.1c.17-.07.37.06.37.24Z"></path></svg>
                  Shop
                </span>
                <span className="tab-title">
                  <svg xmlns="http://www.w3.org/1999/xlink" className="linkButtonIcon__972a0" aria-hidden="true" role="img" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="oklab(0.631828 0.00217235 -0.0117263)" d="M7.5 21.7a8.95 8.95 0 0 1 9 0 1 1 0 0 0 1-1.73c-.6-.35-1.24-.64-1.9-.87.54-.3 1.05-.65 1.52-1.07a3.98 3.98 0 0 0 5.49-1.8.77.77 0 0 0-.24-.95 3.98 3.98 0 0 0-2.02-.76A4 4 0 0 0 23 10.47a.76.76 0 0 0-.71-.71 4.06 4.06 0 0 0-1.6.22 3.99 3.99 0 0 0 .54-5.35.77.77 0 0 0-.95-.24c-.75.36-1.37.95-1.77 1.67V6a4 4 0 0 0-4.9-3.9.77.77 0 0 0-.6.72 4 4 0 0 0 3.7 4.17c.89 1.3 1.3 2.95 1.3 4.51 0 3.66-2.75 6.5-6 6.5s-6-2.84-6-6.5c0-1.56.41-3.21 1.3-4.51A4 4 0 0 0 11 2.82a.77.77 0 0 0-.6-.72 4.01 4.01 0 0 0-4.9 3.96A4.02 4.02 0 0 0 3.73 4.4a.77.77 0 0 0-.95.24 3.98 3.98 0 0 0 .55 5.35 4 4 0 0 0-1.6-.22.76.76 0 0 0-.72.71l-.01.28a4 4 0 0 0 2.65 3.77c-.75.06-1.45.33-2.02.76-.3.22-.4.62-.24.95a4 4 0 0 0 5.49 1.8c.47.42.98.78 1.53 1.07-.67.23-1.3.52-1.91.87a1 1 0 1 0 1 1.73Z"></path></svg>
                  Quests
                </span>
              </div>  

              <hr className="common-ruler w-[96%] ml-2"/>

              <span className="w-full pt-4 flex text-left text-gray-400 font-light text-sm px-4">
                Direct Messages
                <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="24px" fill="#99a1af"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
              </span>

              <span className="w-full h-full px-2 mt-1 flex flex-col gap-1">
                {dms.map((user: User) => {
                  console.log(user)
                  return(
                    <DmTab bgColor={dms.indexOf(user) === 0 ? "#38393E" : "#FFFFF"} imgUrl={user.pfpUrl} name={user.displayname} key={dms.indexOf(user)}/>  
                  )                
                })}
              </span>
            </span>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full flex flex-col overflow-x-hidden">
          {/* Header Bar */}
          <header className="w-full h-12 border-y border-light-3 bg-dark-1 flex flex-row items-center justify-end px-2 py-2 pl-3 gap-4">
            <span className="mr-auto w-fit h-full flex items-center justify-center">
              <img
                src={users[1].pfpUrl}
                width={20}
                height={20}
                className="object-cover rounded-3xl"
              />
              <p className="text-white font-gg font-semibold ml-2">{users[1].displayname}</p>
            </span>
            
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#abacb2"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#abacb2"><path d="M240-320h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm160-160q33 0 56.5-23.5T480-560q0-33-23.5-56.5T400-640q-33 0-56.5 23.5T320-560q0 33 23.5 56.5T400-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#abacb2"><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z"/></svg>            
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#abacb2"><path d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-593-87q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
              
            <span className="w-[244px] h-[32px] rounded-lg text-gray-1 border border-light-3 text-left items-center flex text-sm pl-2 whitespace-nowrap">
              Search {users[1].username}
              <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8f9097"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </span>
          </header>
          
          {/* Messages and User Info*/}
          <div className="flex flex-row flex-1 min-h-0">
            <div className="w-full flex flex-col bg-dark-2 min-h-0">
              {/* Messages */}
              <div className="flex-1 min-h-0 w-full flex flex-col px-3 mb-2 break-words overflow-y-auto no-scrollbar">
                <div className="mt-auto flex flex-col">
                  <span className="flex flex-col mb-3.5">
                    <img
                      src={users[1].pfpUrl}
                      width={80}
                      height={80}
                      className="object-cover rounded-full mb-2"
                    />
                    <h1 className="font-bold text-3xl text-white mb-5">{users[1].displayname}</h1>
                    <h2 className="text-white text-2xl mb-5">{users[1].username}</h2>
                    <h3 className="text-white mb-5">This is the beginning of your direct message history with <b>{users[1].displayname}</b></h3>
                    <div className="text-white flex flex-row items-center text-sm gap-2">
                      <h3 className="mr-6">No servers in common</h3>
                      <h3 className="bg-primary px-3 py-1.5 text-sm font-semibold rounded-lg">Add Friend</h3>
                      <h3 className="px-3 py-1.5 text-sm font-semibold rounded-lg">Block</h3>
                    </div>
                  </span>

                  {msgs.map((msg: Msg, index: number) => {
                    const prevMsg = index > 0 ? msgs[index - 1] : null;

                    const showDateRule =
                      !prevMsg ||
                      prevMsg.time.getDate() !== msg.time.getDate() ||
                      prevMsg.time.getMonth() !== msg.time.getMonth() ||
                      prevMsg.time.getFullYear() !== msg.time.getFullYear();

                    const showUserRule = !prevMsg ? true :
                      prevMsg.owner != msg.owner ||
                      Math.abs(prevMsg.time - msg.time) >= 300000;

                    return (
                      <Fragment key={msgs.indexOf(msg)}>
                        {showDateRule && <Dateruler date={msg.time} />}
                        <MsgContent
                          owner={msg.owner}
                          content={msg.content}
                          date={msg.time}
                          showUser={showUserRule}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Message Footer */}
              <footer className="message-footer">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9D9EA5 "><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                <input
                onKeyDown={(event) => {
                  const rule : boolean = event.key == "Enter" &&
                  event.currentTarget.value.length > 0


                  if (rule) {
                    addMsg(new Msg(users[0], new Date(), event.currentTarget.value))
                    event.currentTarget.value = ""
                  }
                }}
                type="text"
                placeholder={"Message @" + users[1].displayname}
                className="outline-none text-white grow"
                />
                
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9D9EA5"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm240-240h60v-240h-60v240Zm-160 0h80q17 0 28.5-11.5T400-400v-80h-60v60h-40v-120h100v-20q0-17-11.5-28.5T360-600h-80q-17 0-28.5 11.5T240-560v160q0 17 11.5 28.5T280-360Zm280 0h60v-80h80v-60h-80v-40h120v-60H560v240Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9D9EA5"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v440L640-120H200Zm334-460 106-30q5-28-13.5-49T580-680q-25 0-42.5 17.5T520-620q0 11 4 21t10 19Zm-240 70 106-30q4-28-14-49t-46-21q-25 0-42.5 17.5T280-550q0 11 4 21t10 19Zm166 150q69 0 120-45t60-113l-320 90q26 32 62 50t78 18Zm140 160 160-160h-80q-33 0-56.5 23.5T600-280v80Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9D9EA5"><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm263.5 221.5Q659-337 684-400H276q25 63 80.5 101.5T480-260q68 0 123.5-38.5ZM324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5Z"/></svg>
                <svg xmlns="http://www.w3.org/1999/xlink" className="activityIcon_b1f768 rowIcon_b1f768" aria-hidden="true" role="img" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="oklab(0.700617 0.00173205 -0.0100245)" d="M2.06 7.61c-.25.95.31 1.92 1.26 2.18l4.3 1.15c.94.25 1.91-.31 2.17-1.26l1.15-4.3c.25-.94-.31-1.91-1.26-2.17l-4.3-1.15c-.94-.25-1.91.31-2.17 1.26l-1.15 4.3ZM12.98 7.87a2 2 0 0 0 1.75 2.95H20a2 2 0 0 0 1.76-2.95l-2.63-4.83a2 2 0 0 0-3.51 0l-2.63 4.83ZM5.86 13.27a.89.89 0 0 1 1.28 0l.75.77a.9.9 0 0 0 .54.26l1.06.12c.5.06.85.52.8 1.02l-.13 1.08c-.02.2.03.42.14.6l.56.92c.27.43.14 1-.28 1.26l-.9.58a.92.92 0 0 0-.37.48l-.36 1.02a.9.9 0 0 1-1.15.57l-1-.36a.89.89 0 0 0-.6 0l-1 .36a.9.9 0 0 1-1.15-.57l-.36-1.02a.92.92 0 0 0-.37-.48l-.9-.58a.93.93 0 0 1-.28-1.26l.56-.93c.11-.17.16-.38.14-.59l-.12-1.08c-.06-.5.3-.96.8-1.02l1.05-.12a.9.9 0 0 0 .54-.26l.75-.77ZM18.52 13.71a1.1 1.1 0 0 0-2.04 0l-.46 1.24c-.19.5-.57.88-1.07 1.07l-1.24.46a1.1 1.1 0 0 0 0 2.04l1.24.46c.5.19.88.57 1.07 1.07l.46 1.24c.35.95 1.7.95 2.04 0l.46-1.24c.19-.5.57-.88 1.07-1.07l1.24-.46a1.1 1.1 0 0 0 0-2.04l-1.24-.46a1.8 1.8 0 0 1-1.07-1.07l-.46-1.24Z"></path></svg>
              </footer>
            </div>

            {/* Info Panel */}
            <div className="info-panel-root">
              <div className="w-full h-[120px] bg-black">
                <div className="h-fit w-full flex justify-end items-end p-2 gap-2">
                  <span className="bg-black h-8 w-8 p-1 rounded-2xl flex justify-center items-center opacity-50"><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#FFFFFF"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Z"/></svg></span>
                  <span className="bg-black h-8 w-8 p-1 rounded-2xl flex justify-center items-center opacity-50"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/></svg></span>
                </div>
                
                <img
                  src={users[1].pfpUrl}
                  width={80}
                  height={80}
                  className="object-cover rounded-full relative left-4 top-6"
                />

              </div>

              <div className="w-full flex-1  flex flex-col gap-3">
                <span className="mx-4 mt-11">
                  <h1 className="text-white font-bold text-lg">{users[1].displayname}</h1>
                  <h2 className="text-white text-sm">{users[1].username}</h2>
                </span>

                <span className="mx-4 w-[90%] h-fit rounded-lg flex flex-col px-3 py-3 gap-3 bg-gray-4">
                  <h1 className="text-white text-xs font-semibold">Bio</h1>
                  <h2 className="text-white text-xs font-semibold">
                    {users[1].bio}
                  </h2>

                  <h1 className="text-white text-xs font-semibold">Member Since</h1>
                  <h2 className="text-white text-xs font-semibold">
                    {users[1].dateJoined.toLocaleString('default', { month: 'long' })} {users[1].dateJoined.getDate()}, {users[1].dateJoined.getFullYear()}
                  </h2>
                </span>

                <span className="w-full h-fit flex flex-col mt-auto mb-3">
                  <hr className="mb-3 border-gray-5"/>
                  <h1 className="w-full text-center text-sm text-gray-1">View Full Profile</h1>
                </span>
              </div>

            </div>
          </div>
        </main>
      </span>
    </>
  )
}

export default Fakecord

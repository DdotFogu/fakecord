import { useUsers } from "../App";
import ServerButton from "../components/serverbutton";
import Tab from "../components/tab";
import DmTab from "../components/dmtab";
import msg from "../components/msg";

import add from "../assets/images/add.webp";
import download from "../assets/images/download.webp"
import discover from "../assets/images/discover.webp"
import person from "../assets/images/person.webp"
import quests from "../assets/images/quests.webp"
import shop from "../assets/images/shop.webp"
import nitro from "../assets/images/nitro.webp"

import defaultpfp from "../assets/images/default-pfp.webp"
import wumpus from "../assets/images/wumpus.png"

function Fakecord() {
  const { users, msgs } = useUsers();

  // TODO CREATE VARS FOR ALL COLORS
  // TODO ADD GG SANS FONT
  // TODO FIX THE COLORING
  // TODO REFACTOR ALL THIS AFTER PROTOTYPE
  // TODO ALOT OF STUFF HERE CAN BE TURNED INTO COMPONENTS

  return (
    <>
    <div className="h-screen flex flex-col ">
      {/* Top Bar */}
        <header className="w-full h-[3.29vh] bg-dark-3 flex items-center px-3">
          <div className="flex-1 flex items-center justify-center gap-2 h-full">       
            <svg width="14px" height="14px" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
              <g>
                <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#c5c6ca" fill-rule="nonzero" />
              </g>
            </svg>

            <p className="text-white font-gg font-light text-sm">Direct Messages</p>
          </div>
            <ul className="flex flex-row absolute right-4 gap-5">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#c5c6ca"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm349-222q31-22 43-58h168v-360H200v360h168q12 36 43 58t69 22q38 0 69-22Z"/></svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#c5c6ca"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
              </li>
            </ul>
        </header>

        {/* Content area */}
        <div className="flex-1 flex">
          {/* User Bar */}
          <div className="w-103 h-15 bg-dark-3 absolute bottom-0 m-2 rounded-lg border border-dark-1 flex flex-row p-[6px] gap-2 justify-center items-center">
            <div className="w-full h-full bg-dark-3 rounded-md flex justify-start items-center p-1 gap-2">
              <img
                src={defaultpfp}
                width={32}
                height={32}
                className="object-cover rounded-3xl"
              />
              <div className="flex flex-col my-1">
                <p className="text-white font-gg font-semibold">Ddot</p>
                <p className="text-white text-xs font-gg align-top">Online</p>
              </div>
            </div>

            <div className="w-fit h-[80%] bg-dark-3 rounded-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M395-435q-35-35-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35q-50 0-85-35Zm45 315v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
            <div className="w-fit h-[80%] bg-dark-3 rounded-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>
            <div className="w-fit h-[80%] bg-dark-3 rounded-lg flex items-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z"/></svg>
            </div>
          </div>

          {/* Server Bar */}
          <aside className="bg-dark-3 w-[5vw] h-full flex flex-col items-center gap-2">
            <ServerButton iconSize={34} bgColor="#5865F2"/>
            <hr className="border-0 bg-dark-1 h-px w-8" />
            <ServerButton serverIcon={add} iconSize={24}/>
            <ServerButton serverIcon={discover} iconSize={24}/>
            <ServerButton serverIcon={download} iconSize={24}/>
          </aside>
          

          <main className="flex-1 bg-dark-2 border-x border-t border-dark-1 w-fit">
            <aside className="bg-dark-3 w-[19vw] h-full flex flex-col  items-center">
              <div className="flex justify-center items-center w-full h-fit p-2">
                <div className="bg-dark-2 w-full h-[3.1vh] text-center text-white text-sm font-light font-gg flex justify-center items-center rounded-lg border border-dark-1">
                  <p>Find or start an conversation</p>
                </div>
              </div>
              
              <hr className="border-0 bg-dark-1 h-px w-full" />
              
              <div className="w-full p-2 pb-3">
                <Tab bgColor="#282b30" serverIcon={person} iconSize={24 } height={38} text="Friends"/>
                <Tab bgColor="#282b30" serverIcon={nitro} iconSize={24 } height={38} text="Nitro"/>
                <Tab bgColor="#282b30" serverIcon={shop} iconSize={24 } height={38} text="Shop"/>
                <Tab bgColor="#282b30" serverIcon={quests} iconSize={24 } height={38} text="Quests"/>
              </div>

              <hr className="border-0 bg-dark-1 h-px w-[95%]"/>

              <span className="w-full pt-4">
                <div className="ml-4 mr-2 flex text-left text-gray-400 font-light text-sm">
                  Direct Messages
                  <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" height="17px" viewBox="0 -960 960 960" width="24px" fill="#99a1af"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                </div>
              </span>

              <div className="w-full h-full px-2 mt-1 flex flex-col">
                <DmTab bgColor="#38393E"/>
              </div>
              
            </aside>
          </main>

          <div className="w-full flex flex-col">
            <div className="bg-dark-3 w-full h-12 border-y border-dark-1 flex flex-row items-center justify-end px-2 py-2 pl-5 gap-4">
              <div className="mr-auto w-fit h-full flex items-center justify-center">
                <img
                  src={defaultpfp}
                  width={20}
                  height={20}
                  className="object-cover rounded-3xl"
                />
                <p className="text-white font-gg font-semibold ml-2">chairguy</p>
              </div>
              
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#abacb2"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#abacb2"><path d="M240-320h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm160-160q33 0 56.5-23.5T480-560q0-33-23.5-56.5T400-640q-33 0-56.5 23.5T320-560q0 33 23.5 56.5T400-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#abacb2"><path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z"/></svg>            
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#abacb2"><path d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-593-87q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
               
              <div className="bg-dark-2 w-[244px] h-[32px] rounded-lg text-light-1 border border-dark-1 text-left items-center flex text-sm pl-2">
                Search typeeshitt33
                <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#8f9097"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
              </div>
            </div>
            
            <div className="flex flex-row flex-1">
              <div className="bg-dark-1 w-full flex flex-col justify-center">
                {/* MESSAGES */}
                <div className="w-full h-full flex flex-col justify-end gap-2 px-5 mb-1">
                  <img
                  src={defaultpfp}
                  width={80}
                  height={80}
                  className="object-cover rounded-full "
                  />
                  <h1 className="font-bold text-3xl text-white">chairguy</h1>
                  <h2 className="text-white text-2xl">typeeshiit33</h2>
                  <h3 className="text-white">This is the beginning of your direct message history with <b>chairguy</b></h3>
                  <div className="text-white flex flex-row items-center text-sm gap-2">
                    <h3 className="mr-6">No servers in common</h3>
                    <h3 className="bg-primary px-3 py-1.5 text-sm font-semibold rounded-lg">Add Friend</h3>
                    <h3 className="bg-dark-2 px-3 py-1.5 text-sm font-semibold rounded-lg">Block</h3>
                  </div>
                </div>

                <div className="mx-1.5 mb-1.5 mt-auto bg-dark-2 h-17 w-[99%] rounded-lg border border-dark-1 flex flex-row items-center justify-end px-3.5 gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#99a1af"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                  <input 
                  type="text"
                  placeholder="Message @chairguy"
                  className="bg-transparent outline-none text-white mr-auto grow" />
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm371.5-748.5Q520-817 520-800t11.5 28.5Q543-760 560-760t28.5-11.5Q600-783 600-800t-11.5-28.5Q577-840 560-840t-28.5 11.5ZM360-800q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm240-240h60v-240h-60v240Zm-160 0h80q17 0 28.5-11.5T400-400v-80h-60v60h-40v-120h100v-20q0-17-11.5-28.5T360-600h-80q-17 0-28.5 11.5T240-560v160q0 17 11.5 28.5T280-360Zm280 0h60v-80h80v-60h-80v-40h120v-60H560v240Z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v440L640-120H200Zm334-460 106-30q5-28-13.5-49T580-680q-25 0-42.5 17.5T520-620q0 11 4 21t10 19Zm-240 70 106-30q4-28-14-49t-46-21q-25 0-42.5 17.5T280-550q0 11 4 21t10 19Zm166 150q69 0 120-45t60-113l-320 90q26 32 62 50t78 18Zm140 160 160-160h-80q-33 0-56.5 23.5T600-280v80Z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm263.5 221.5Q659-337 684-400H276q25 63 80.5 101.5T480-260q68 0 123.5-38.5ZM324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5Z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M183.5-183.5Q160-207 160-240t23.5-56.5Q207-320 240-320t56.5 23.5Q320-273 320-240t-23.5 56.5Q273-160 240-160t-56.5-23.5Zm240 0Q400-207 400-240t23.5-56.5Q447-320 480-320t56.5 23.5Q560-273 560-240t-23.5 56.5Q513-160 480-160t-56.5-23.5Zm240 0Q640-207 640-240t23.5-56.5Q687-320 720-320t56.5 23.5Q800-273 800-240t-23.5 56.5Q753-160 720-160t-56.5-23.5Zm-480-240Q160-447 160-480t23.5-56.5Q207-560 240-560t56.5 23.5Q320-513 320-480t-23.5 56.5Q273-400 240-400t-56.5-23.5Zm240 0Q400-447 400-480t23.5-56.5Q447-560 480-560t56.5 23.5Q560-513 560-480t-23.5 56.5Q513-400 480-400t-56.5-23.5Zm240 0Q640-447 640-480t23.5-56.5Q687-560 720-560t56.5 23.5Q800-513 800-480t-23.5 56.5Q753-400 720-400t-56.5-23.5Zm-480-240Q160-687 160-720t23.5-56.5Q207-800 240-800t56.5 23.5Q320-753 320-720t-23.5 56.5Q273-640 240-640t-56.5-23.5Zm240 0Q400-687 400-720t23.5-56.5Q447-800 480-800t56.5 23.5Q560-753 560-720t-23.5 56.5Q513-640 480-640t-56.5-23.5Zm240 0Q640-687 640-720t23.5-56.5Q687-800 720-800t56.5 23.5Q800-753 800-720t-23.5 56.5Q753-640 720-640t-56.5-23.5Z"/></svg>
                </div>
              </div>

              <div className="w-[445px] bg-dark-3 flex flex-col h-full">
                <div className="w-full h-[120px] bg-orange-200">
                  <div className="h-fit w-full flex justify-end items-end p-2 gap-2">
                    <div className="bg-black h-8 w-8 p-1 rounded-2xl flex justify-center items-center opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#FFFFFF"><path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM247-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Z"/></svg>
                    </div>

                    <div className="bg-black h-8 w-8 p-1 rounded-2xl flex justify-center items-center opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/></svg>
                    </div>
                  </div>
                  
                  <img
                    src={defaultpfp}
                    width={80}
                    height={80}
                    className="object-cover rounded-full relative left-4 top-6"
                  />

                </div>

                <div className="w-full flex-1  flex flex-col gap-3">
                  <div className="mx-4 mt-11">
                    <h1 className="text-white font-bold text-lg">chairguy</h1>
                    <h2 className="text-white text-sm">typeeshiit33</h2>
                  </div>

                  <div className="mx-4 w-[90%] h-fit bg-dark-2 rounded-lg flex flex-col px-3 py-3 gap-2">
                    <h1 className="text-white text-xs font-semibold">Member Since</h1>
                    <h2 className="text-white text-xs font-semibold">June 9, 2020</h2>
                  </div>

                  <div className="w-full h-fit flex flex-col mt-auto mb-3">
                    <hr className="mb-3 border-dark-1"/>
                    <h1 className="text-white w-full text-center text-sm">View Full Profile</h1>
                  </div>
                </div>

              </div>
            </div>

          </div>
        
        </div>
    </div>
    </>
  )
}

export default Fakecord

import { useUsers } from "../App";
import ServerButton from "../components/serverbutton";
import Tab from "../components/tab";
import DmTab from "../components/dmtab";

import add from "../assets/images/add.webp";
import download from "../assets/images/download.webp"
import discover from "../assets/images/discover.webp"
import person from "../assets/images/person.webp"
import quests from "../assets/images/quests.webp"
import shop from "../assets/images/shop.webp"
import nitro from "../assets/images/nitro.webp"

function Fakecord() {
  const { users } = useUsers();

  // TODO CREATE VARS FOR ALL COLORS
  // TODO ADD GG SANS FONT

  return (
    <>
    <div className="h-screen flex flex-col bg-dark-3">
      {/* Top Bar */}
      <header className="w-full h-[3.29vh] bg-dark-3 flex items-center px-3">
        <div className="flex-1 flex items-center justify-center gap-2 h-full">       
              <svg width="14px" height="14px" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <g>
                      <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#c5c6ca" fill-rule="nonzero">
              </path>
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
          {/* Server Bar */}
          <aside className="bg-dark-3 w-[3.84vw] h-full flex flex-col  items-center gap-2">
            <ServerButton iconSize={34} bgColor="#5865F2"/>
            <hr className="border-0 bg-dark-1 h-px w-8" />
            <ServerButton serverIcon={add} iconSize={24}/>
            <ServerButton serverIcon={discover} iconSize={24}/>
            <ServerButton serverIcon={download} iconSize={24}/>
          </aside>

          

          <main className="flex-1 bg-dark-2 border-l border-t border-light-1 ">
            <aside className="bg-dark-3 w-[19vw] h-full flex flex-col  items-center">
              <div className="flex justify-center items-center w-full h-fit p-2">
                <div className="bg-dark-2 w-full h-[3.5vh] text-center text-white text-sm font-light font-gg flex justify-center items-center rounded-lg">
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

              <div className="w-full h-full px-2 mt-1">
                <DmTab bgColor="#38393E"/>
              </div>
              
            </aside>
          </main>
        </div>
    </div>
    </>
  )
}

export default Fakecord

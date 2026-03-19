import { useUsers } from "../context/AppContext";
import { User } from "../types";

export function useUser(index: number) {
  const {
    users,
    setUserName,
    setUserDisplay,
    setUserPfpUrl,
    setUserBio,
    setUserDate,
    setUserDm,
    removeUser,
  } = useUsers();

  const user: User = users[index];

  return {  
    ...user,
    setName:    (name: string)  => setUserName(index, name),
    setDisplay: (name: string)  => setUserDisplay(index, name),
    setPfp:     (url: string)   => setUserPfpUrl(index, url),
    setBio:     (bio: string)   => setUserBio(index, bio),
    setDate:    (date: Date)    => setUserDate(index, date),
    setDm:      (val: boolean)  => setUserDm(index, val),
    remove:     ()              => removeUser(index),
    getDisplay: () => user.getDisplay(),
    getName: () => user.getName(),
    getPfp: () => user.getPfp(),
    getBio: () => user.getBio(),
    getDate: () => user.getDate(),
    getShortDate: () => user.getShortDate()
  };
}
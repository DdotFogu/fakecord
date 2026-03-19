import { useUsers } from "../context/AppContext";
import { Msg, User } from "../types";

export function useMsg(index: number) {
  const {
    msgs,
    setMsgContent,
    setMsgOwner,
    setMsgTime,
    removeMsg
  } = useUsers();

  const msg: Msg = msgs[index];

  return {  
    ...msg,
    setContent: (content: string) => setMsgContent(index, content),
    setOwner: (owner: User) => setMsgOwner(index, owner),
    setTime: (time: Date) => setMsgTime(index, time),
    remove: () => removeMsg(index),
    getContent: () => msg.getContent(),
    getOwner: () => msg.getOwner(),
    getTime: () => msg.getTime()
  };
}
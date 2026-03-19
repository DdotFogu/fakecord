import { useUsers } from "../context/AppContext";
import { Server } from "../types";

export function useServer(index: number) {
  const {
    servers,
    removeServer,
    setServerName,
    setServerPfpUrl
  } = useUsers();

  const server: Server = servers[index];

  return {  
    ...server,
    remove: () => removeServer(index),
    setName: (name: string) => setServerName(index, name),
    setPfp: (url: string) => setServerPfpUrl(index, url),
    getName: () => server.getName(),
    getPfp: () => server.getPfp()
  };
}
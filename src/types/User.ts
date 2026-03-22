import defaultPfp from "../assets/images/default-pfp.webp";

export const Presence = {
  Online: 'Online',
  Offline: 'Offline',
  Idle: 'Idle',
  DND: 'DND'
} as const;

export type Presence = typeof Presence[keyof typeof Presence];

export class User {
  username: string;
  displayname: string;
  pfpUrl: string;
  dateJoined: Date;
  bio: string;
  presence: Presence;
  removeabled : boolean = true;
  dm: boolean

  constructor(removeabled: boolean = true) {
    this.username = '';
    this.displayname = '';
    this.pfpUrl = defaultPfp;
    this.dateJoined = new Date
    this.bio = '';
    this.dm = false
    this.presence = Presence.Online;

    this.removeabled = removeabled;
  }

  getName(){
    return this.username;
  }

  getDisplay(){
    return this.displayname;
  }

  getPfp(){
    return this.pfpUrl;
  }

  getDate(){
    return this.dateJoined;
  }

  getShortDate(){
    return this.getDate().toISOString().slice(0, 16);
  }

  getBio(){
    return this.bio;
  }

  getPresence(){
    return this.presence;
  }

  isRemoveable(){
    return this.removeabled;
  }

  isDm(){
    return this.dm;
  }
}
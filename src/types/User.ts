import defaultPfp from "../assets/images/default-pfp.webp";

export class User {
  username: string;
  displayname: string;
  pfpUrl: string;
  dateJoined: Date;
  bio: string;
  removeabled : boolean = true;
  dm: boolean

  constructor(removeabled: boolean = true) {
    this.username = '';
    this.displayname = '';
    this.pfpUrl = defaultPfp;
    this.dateJoined = new Date
    this.bio = '';
    this.dm = false

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

  isRemoveable(){
    return this.removeabled;
  }

  isDm(){
    return this.dm;
  }
}
import { User } from "./User";

export class Msg {
  owner: User;
  time: Date;
  content: string;

  constructor(owner: User, content: string = '') {
    this.owner = owner;
    this.content = content;
    this.time = new Date();
  }

  getOwner(){
    return this.owner;
  }

  getTime(){
    return this.time;
  }

  getContent(){
    return this.content;
  }
}
import { Msg, User} from "./index";
import defaultPfp from "../assets/images/default-pfp.webp";

export class Dm {
    users : User[];
    msgs : Msg[];
    name : string;
    pfp : string;

    constructor(){
        this.users = [];
        this.msgs = [];
        this.name = 'new dms';
        this.pfp = defaultPfp;
    }

    getUsers(){
        return this.users;
    }

    getMsgs(){
        return this.msgs;
    }

    getName(){
        return this.name;
    }

    getPfp(){
        return this.pfp;
    }
}
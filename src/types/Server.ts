import defaultPfp from "../assets/images/default-pfp.webp";

export class Server {
  name: string;
  pfpUrl: string;

  constructor() {
    this.name = "";
    this.pfpUrl = defaultPfp;
  }

  getName() {
    return this.name;
  }

  getPfp() {
    return this.pfpUrl;
  }
}
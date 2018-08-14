import { Profile } from "./profile";
import { FirebaseApp } from "angularfire2";

export interface Flat {
    ownerID: string;
    name: string;
    jobs: any[];
    flatmates: any[];

    //TODO: probably change it from any
}
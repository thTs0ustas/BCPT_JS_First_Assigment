import homeHTML from "./home.js";
import { closeNavBar } from "../../helperFn";

// Close expanded navbar and load home HTML part

export const homePageFn = () => closeNavBar(homeHTML);

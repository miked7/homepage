import UserProfile from "./UserProfile";
import { getDomain, getSubdomain } from "../utils/url"
import { DEBUG_USER_NAME, USER_DOMAIN, isDebug } from "../utils/environment"

export const createUserProfile = () =>  {
    if (isDebug()) {
        return new UserProfile(DEBUG_USER_NAME, USER_DOMAIN);
    }
    else {
        // For development we are currently hosting at mixmi-dev.net.  Testers 
        // will have domain names at "mixmi.app" so we need to substitute that for now.
        return new UserProfile(getSubdomain(), USER_DOMAIN);
    }
};
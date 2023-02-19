import { USER_PROFILE_FILENAME, UserProfile } from "./UserProfile";
import { getDomain, getSubdomain } from "../utils/url"
import { getNameSubdomains } from "../utils/names"
import { readPublicStorageFile } from "../utils/file"
import { DEBUG_USER_NAME, USER_DOMAIN, isDebug } from "../utils/environment"

export const createUserProfile = () =>  {
    if (isDebug()) {
        return new UserProfile(DEBUG_USER_NAME, USER_DOMAIN);
    }
    else {
        return new UserProfile(getSubdomain(), USER_DOMAIN);
    }
};

export const createUserProfileFromName = (name) =>  {
    return new UserProfile(name, USER_DOMAIN);
};

export const getProfileList = async () => {

    const names = await getNameSubdomains(USER_DOMAIN);
    const userProfiles = await names.map(async name => {
        var userProfile;
        try {
            const userData = await readPublicStorageFile(name, USER_PROFILE_FILENAME);
            userProfile = new UserProfile(name, USER_DOMAIN, userData);
        } catch {
            userProfile = new UserProfile(name, USER_DOMAIN);
        }
        
        return userProfile;
    })

    return Promise.all(userProfiles);
}
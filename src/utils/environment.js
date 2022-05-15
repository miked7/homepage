// IMPORTANT!!!
// DOMAIN should be set to the host name of the app.
// Currently the two domains below are the same.  The could be different if for some text environment for example.
export const USER_DOMAIN = "mixmi.app";
export const APP_DOMAIN = "mixmi.app";

export const DEBUG_USER_NAME = "michael-thompson";

export const isDebug = () => {
    return process.env.NODE_ENV !== "production";
};
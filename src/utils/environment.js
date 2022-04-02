// IMPORTANT!!!
// DOMAIN should be set to the host name of the app.
// For now, while we use mixmi-dev.net for development we substitute mixmi.app so the user names will work.
export const DOMAIN = "mixmi.app";
export const DEV_DOMAIN = "mixmi-dev.net";

export const DEBUG_USER_NAME = "michael-thompson";
export const DEBUG_DOMAIN = "mixmi.app";

export const isDebug = () => {
    return process.env.NODE_ENV !== "production";
};
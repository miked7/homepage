import { isDebug, DEBUG_DOMAIN, DOMAIN, DEV_DOMAIN } from "./environment";

export const getDomain = () => {
    return isDebug() ? DEBUG_DOMAIN : DOMAIN;
};

export const getSubdomain = () => {
    // While we are in development using mixmi-dev.net.  Eventually we can un-comment this line once hosted at mixmmi.app.
    ////return getSubdomainInternal(window.location.host, getDomain());
    return getSubdomainInternal(window.location.host, DEV_DOMAIN);
};

export const getSubdomainInternal = (host, domain) => {
    const domainSuffix = "." + domain;

    return host.replace(domainSuffix, "");
};
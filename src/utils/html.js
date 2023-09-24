export const setIframeSize = (iframe, newWidth, newHeight) => {
    return iframe
        .replace(/width="((\d|%)+)"/g, `width="${newWidth}"`) // Replace width with 1000
        .replace(/height="((\d|%)+)"/g, `height="${newHeight}"`); // Replace height with 800
}
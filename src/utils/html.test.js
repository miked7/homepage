import { setIframeSize } from "./html";

test('setIframeSize test', () => {
    var iframeTag = '<iframe src="https://www.example.com" width="500" height="300"></iframe>';
    expect(setIframeSize(iframeTag, 20, 20) === '<iframe src="https://www.example.com" width="20" height="20"></iframe>');

    iframeTag = '<iframe src="https://www.example.com" width="100%" height="50%"></iframe>';
    expect(setIframeSize(iframeTag, 20, 20) === '<iframe src="https://www.example.com" width="20" height="20"></iframe>');
  });
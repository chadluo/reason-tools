import Refmt from '../_build/refmt/src/app.js';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({out: Refmt.refmt(request.in)});
});

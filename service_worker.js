chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "speakWord",
    title: "Speak '%s'",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info) {
  if (info.menuItemId === "speakWord" && info.selectionText) {
    chrome.tts.speak(info.selectionText, { lang: "en-US" });
  }
});

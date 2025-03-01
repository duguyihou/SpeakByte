chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "SpeakByte",
    title: "Speak '%s'",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "SpeakByte" && info.selectionText) {
    chrome.tts.speak(info.selectionText, { lang: "en-US" });
  }
});

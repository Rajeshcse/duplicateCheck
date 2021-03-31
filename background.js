console.log("background Scripts");
chrome.browserAction.onClicked.addListener(buttonCliked);
function buttonCliked() {
  alert("Dow Action ");
}

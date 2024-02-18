chrome.commands.onCommand.addListener(function(command) {
    if (command === "execute-shortcut") {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["contentScript.js"]
        });
      });
    }
    else if(command === "execute-shortcut-p1"){
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["contentScript-p1.js"]
        });
      });
    }
    else if(command === "execute-shortcut-p125"){
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["contentScript-p125.js"]
        });
      });
    }
    else if(command === "execute-shortcut-p15"){
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["contentScript-p15.js"]
        });
      });
    }
});

  
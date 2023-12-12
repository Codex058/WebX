// background.js

// Register the ruleset with the declarativeNetRequest API.

chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1234,
        priority: 1,
        action: { type: "block" },
        condition: {
          urlFilter: "*://*(.zedo.com/*)|(.roblox.com/*)", // Add the sites of the people who provide ads. Roblox, is there as an example.
          resourceTypes: [
            "main_frame",
            "sub_frame",
            "script",
            "image",
            "stylesheet",
            "object",
            "xmlhttprequest",
            "ping",
            "csp_report",
            "media",
            "font",
            "websocket",
            "other",
          ],
        },
      },
    ],
  });
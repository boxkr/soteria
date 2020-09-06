/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
/* global global, Office, self, window */
Office.onReady(() => {
  // If needed, Office.js is ready to be called
});

/**
 * Shows a notification when the add-in command is executed.
 * @param event {Office.AddinCommands.Event}
 */
function action(event) {
  const message = {
    type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
    message: "Performed action.",
    icon: "Icon.80x80",
    persistent: true
  };

  // Show a notification message
  Office.context.mailbox.item.notificationMessages.replaceAsync("action", message);

  // Be sure to indicate when the add-in command function is complete
  event.completed();
}

function scanEmail(event) {

  //want to get the body of the message,(maybe break it up into parameters needed) ,and send it out to the model


  /*

  ews way, doesnt work


  var ewsId = Office.context.mailbox.item.itemId;
  var request = '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages" xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
    '  <soap:Header><t:RequestServerVersion Version="Exchange2013" /></soap:Header>' +
    '  <soap:Body>' +
    '    <m:GetItem>' +
    '      <m:ItemShape>' +
    '        <t:BaseShape>IdOnly</t:BaseShape>' +
    '      </m:ItemShape >' +
    '      <m:ItemIds>' +
    '        <t:ItemId Id="' + ewsId + '" />' +
    '      </m:ItemIds>' +
    '    </m:GetItem>' +
    '  </soap:Body>' +
    '</soap:Envelope>';

  Office.context.mailbox.makeEwsRequestAsync(request, function (asyncResult) {
    console.log(asyncResult.value)
    res = parseTextToURL(asyncResult.value)

    const message = {
      type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
      message: res,
      icon: "Icon.80x80",
      persistent: true
    };

    Office.context.mailbox.item.notificationMessages.replaceAsync('scanEmail', message)

    event.completed();
  });
  */







  Office.context.mailbox.item.body.getAsync(
    //i want the body as text
    "text",
    { asyncContext: "Body of the function" },
    function callback(result) {
      //parse this text to find URLs
      res = parseTextToURL(result.value)
      const message = {
        type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
        message: res,
        icon: "Icon.80x80",
        persistent: true
      };

      //display this note above^
      Office.context.mailbox.item.notificationMessages.replaceAsync('scanEmail', message)

      event.completed();



    });


}

function parseTextToURL(data) {
  data = data.split(" ")

  console.log(data)
  for (i = 0; i < data.length; i++) {
    if (data[i].includes("https://" || 'http://' || 'www')) {
      return data[i]
    }

  }
  return "No links"


}

function getGlobal() {
  return typeof self !== "undefined"
    ? self
    : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
        ? global
        : undefined;
}

const g = getGlobal();

// the add-in command functions need to be available in global scope
g.action = action;
g.scanEmail = scanEmail;

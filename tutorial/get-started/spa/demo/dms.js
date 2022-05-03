// Copyright (c) Alicon.
// Licensed under the MIT License.

// <dmsInitSnippet>
// Create an authentication provider
const authProvider = {
  getAccessToken: async () => {
    // Call getToken in auth.js
    return await getToken();
  }
};
// Initialize the DMS client
const dmsClient = Aim.Client.initWithMiddleware({authProvider}, dmsOptions);
// </dmsInitSnippet>

// <getUserSnippet>
async function getUser() {
  return await dmsClient
    .api('/me')
    // Only get the fields used by the app
    .select('id,displayName,name,email,mail,userPrincipalName,mailboxSettings')
    .get();
}
// </getUserSnippet>

// <initDmsSnippet>
Aim().schemas(dmsConfig.components.schemas);
// </initDmsSnippet>

// <uploadConfigSnippet>
function uploadConfig() {
  dmsClient.api('/').post({
    config: JSON.stringify(dmsConfig),
  }).then(e => {
    console.log(e);
  })
}
// </uploadConfigSnippet>

// <getContactsSnippet>
async function getContacts() {
  try {
    let response = await dmsClient
    .api('/Contact')
    .select('name')
    .top(50)
    .get();

    updatePage(Views.list, response.value);
  } catch (error) {
    updatePage(Views.error, {
      message: 'Error getting Contacts',
      debug: error
    });
  }
}
// </getContactsSnippet>


// <updateItemSnippet>
function postItem(item, form) {
  dmsClient.api(item.url).post(form)
  .then(e => getContacts())
  .catch(console.error);
  return false;

}
// </updateItemSnippet>


// <getContactSnippet>
async function getContact(item) {
  try {
    let response = await dmsClient
    .api(`/Contact(${item.ID})`)
    .select('*')
    .get();

    updatePage(Views.item, response);
  } catch (error) {
    updatePage(Views.error, {
      message: 'Error getting Contact',
      debug: error
    });
  }
}
// </getContactSnippet>

// <deleteItemSnippet>
function deleteItem(item) {
  dmsClient.api(item.data['@id']).delete()
  .then(e => getContacts())
  .catch(console.error)
}
// </deleteItemSnippet>

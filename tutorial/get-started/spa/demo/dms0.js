// Copyright (c) Alicon.
// Licensed under the MIT License.

// <dmsInitSnippet>
const authProvider = new Aim.AuthProvider(aimClient, dmsAuthOptions);
const dmsClient = Aim.Client.initWithMiddleware({authProvider: authProvider}, dmsOptions);
// </dmsInitSnippet>

// <getUserSnippet>
async function getUser() {
  return await dmsClient
    .api('/me')
    // Only get the fields used by the app
    .select('id,displayName,mail,userPrincipalName,mailboxSettings')
    .get();
}
// </getUserSnippet>

// <initDmsSnippet>
$().schemas(dmsConfig.components.schemas);
// </initDmsSnippet>

// <uploadConfigSnippet>
function uploadConfig() {
  dmsClient.api('/').post({
    config: JSON.stringify(dmsConfig),
    client_secret: this.client_secret,
  }).then(e => {
    console.log(e.target.responseText);
    // document.location.reload();
  })
}
// </uploadConfigSnippet>

// <getItemsSnippet>
function getItems(schemaName) {
  dmsClient.api('/' + schemaName).get()
  .then(e => showList(e.body.value))
  .catch(console.error)
}
// </getItemsSnippet>

// <createNewItemSnippet>
function createNewItem(schemaName) {
  dmsClient.api('/' + schemaName).post({
    name: 'New ' + schemaName,
  })
  .then(e => showItem(e.body))
  .catch(console.error)
}
// </createNewItemSnippet>

// <getItemSnippet>
function getItem(item) {
  dmsClient.api(item.data['@id']).get()
  .then(e => showItem(e.body))
  .catch(console.error)
}
// </getItemSnippet>

// <deleteItemSnippet>
function deleteItem(item) {
  dmsClient.api(item.data['@id']).delete()
  .then(e => updatePage({messege: 'deleted'}))
  .catch(console.error)
}
// </deleteItemSnippet>




// setValue() {
//   $('attributeValue').name($('attributeName').value());
//   dmsClient
//   .api('/Item(265090)')
//   .post($('myform'))
//   .then(e => {
//     ui.updatePage({response: JSON.parse(e.target.responseText)});
//   }).catch(err => {
//     console.error(err);
//   })
//   return false;
// },
//
// getAttributes(select) {
//   console.log(1, select);
//   dmsClient
//   .api('/Item(265090)')
//   .select(select)
//   // .select('subject,organizer,start,end')
//   // .orderby('createdDateTime DESC')
//   .get()
//   .then(e => {
//     ui.updatePage({response: JSON.parse(e.target.responseText)});
//   }).catch(err => {
//     console.error(err);
//   })
// },
// setAttribute() {
//   return false;
//   // dmsClient
//   // .api('/Item(265090)')
//   // .post({
//   //   myproperty2: 'TESTMAX',
//   // })
//   // .then(e => {
//   //   updatePage({response: JSON.parse(e.target.responseText)});
//   // }).catch(err => {
//   //   console.error(err);
//   // })
// },







// authProvider.login().then(e => {
//   console.log('User logged in', e);
//   $('account').text(e.sub);
// }).catch(err => {
//   console.error('User NOT logged in', err);
//   $('logoutButton').disabled(true);
// })

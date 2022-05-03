// Copyright (c) Alicon.
// Licensed under the MIT License.

// <aimConfigSnippet>
const aimConfig = {
  auth: {
    client_id: client_id,
    redirect_uri: 'http://localhost:8080',
  },
}
const dmsOptions = {
  servers: [
    { url: 'https://aliconnect.nl/api' },
  ]
}
const aimRequest = {
  scopes: [
    'user.read',
    'id',
    'mail',
    'userPrincipalName',
    'mailboxSettings',
    'displayName',
    'name',
    'email',
    'openid',
    'profile',
  ]
}
// </aimConfigSnippet>

// <dmsConfigInit>
const schemas = {
  Contact: {
    properties: {
      name: {
        type: 'text'
      },
    }
  }
}
const dmsConfig = {
  components: {
    schemas: schemas,
  }
}
// </dmsConfigInit>

// <dmsConfigContactProperties>
schemas.Contact.properties = {
  name: {
    type: 'text'
  },
  Hobby: {
    type: 'text'
  },
  ColorEyes: {
    type: 'text'
  },
};
// </dmsConfigContactProperties>

// const dmsApi = {
//   menu: {
//     Organisation: {
//       className: 'crm',
//       Contact: {
//         className: 'contact',
//         href: 'Contact?$top=100'
//       }
//     }
//   },
//   components: {
//     schemas: {
//       Contact: {
//         properties: {
//           Name: {
//             type: 'text'
//           },
//           Hobby: {
//             type: 'text'
//           },
//         }
//       }
//     }
//   }
// }
//
// // <dmsConfigContactSnippet>
//
// // </dmsConfigContactSnippet>
//
//
// const dmsAuthOptions = {
//   scopes: [
//     'user.read',
//     'calendars.read'
//   ]
// }
//
//

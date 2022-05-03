// Copyright (c) Alicon.
// Licensed under the MIT License.

// <authInitSnippet>
// Create the main AIM instance
// configuration parameters are located in config.js
const aimClient = new Aim.UserAgentApplication(aimConfig);
// </authInitSnippet>

// <signInSnippet>
async function signIn() {
  //  Login
  try {
    // Use AIM to login
    const authResult = await aimClient.loginPopup(aimRequest);
    console.log('id_token acquired at: ' + new Date().toString());
    // Save the account username, needed for token acquisition
    sessionStorage.setItem('aimAccount', authResult.account.username);

    // Get the user's profile from Aim
    user = await getUser();
    // Save the profile in session
    sessionStorage.setItem('aimUser', JSON.stringify(user.data));
    updatePage(Views.home);
  } catch (error) {
    console.log(error);
    updatePage(Views.error, {
      message: 'Error logging in',
      debug: error
    });
  }
}
// </signInSnippet>

// <signOutSnippet>
function signOut() {
  account = null;
  sessionStorage.removeItem('aimUser');
  aimClient.logout();
}
// </signOutSnippet>

// <getTokenSnippet>
async function getToken() {
  let account = sessionStorage.getItem('aimAccount');
  if (!account){
    throw new Error(
      'User account missing from session. Please sign out and sign in again.');
  }
  try {
    // First, attempt to get the token silently
    return aimClient.account.id_token;
    console.log('SILENT');
    const silentRequest = {
      scopes: aimRequest.scopes,
      account: aimClient.getAccountByUsername(account)
    };

    const silentResult = await aimClient.acquireTokenSilent(silentRequest);
    return silentResult.accessToken;
  } catch (silentError) {
    // If silent requests fails with InteractionRequiredAuthError,
    // attempt to get the token interactively
    if (silentError instanceof Aim.InteractionRequiredAuthError) {
      const interactiveResult = await aimClient.acquireTokenPopup(aimRequest);
      return interactiveResult.accessToken;
    } else {
      throw silentError;
    }
  }
}
// </getTokenSnippet>

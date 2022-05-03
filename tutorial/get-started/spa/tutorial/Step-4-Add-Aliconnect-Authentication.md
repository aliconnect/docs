In this exercise you will extend the application from the previous exercise to support authentication with Aliconnect. This is required to obtain the necessary OAuth access token to call the Aliconnect API. In this step you will integrate the [Aliconnect JavaScript API Library](https://github.com/aliconnect/api) library into the application.

1. Create a new file in the root directory named **secret.js** and add the following code.

    :::code language="javascript" source="../demo/secret.example.js" id="dmsSecretSnippet":::

    Replace `YOUR_APP_ID_HERE` with the application ID from the Application Registration Portal.

    > [!NOTE]
    > If you're using source control such as git, now would be a good time to exclude the **secret.js** file from source control to avoid inadvertently leaking your app ID.

1. Create a new file in the root directory named **config.js** and add the following code.

    :::code language="javascript" source="../demo/config.js" id="aimConfigSnippet":::

1. Open **auth.js** and add the following code to the beginning of the file.

    :::code language="javascript" source="../demo/auth.js" id="authInitSnippet":::

# Implement sign-in

  In this section you'll implement the `signIn` and `signOut` functions.

  1. Replace the existing `signIn` function with the following.

      ```JavaScript
      async function signIn() {
        //  Login
        try {
          // Use AIM to login
          const authResult = await aimClient.loginPopup(aimRequest);
          // TEMPORARY
          updatePage(Views.error, {
            message: 'Login successful',
            debug: `Token: ${authResult.accessToken}`
          });
        } catch (error) {
          console.log(error);
          updatePage(Views.error, {
            message: 'Error logging in',
            debug: error
          });
        }
      }
      ```

      This temporary code will display the access token after a successful login.

  1. Replace the existing `signOut` function with the following.

      :::code language="javascript" source="../demo/auth.js" id="signOutSnippet":::

  1. Save your changes and refresh the page. After you sign in, you should see an error box that shows the access token.

# Get the user's profile

  In this section you'll improve the `signIn` function to use the access token to get the user's profile from Aliconnect.

  1. Add the following function in **auth.js** to retrieve the user's access token.

      :::code language="javascript" source="../demo/auth.js" id="getTokenSnippet":::

  1. Create a new file in the root of the project named **dms.js** and add the following code.

      :::code language="javascript" source="../demo/dms.js" id="dmsInitSnippet":::

      This code creates an authorization provider that wraps the `getToken` method in **auth.js**, and initializes the Aim client with this provider.

  1. Add the following function in **dms.js** to get the user's profile.

      :::code language="javascript" source="../demo/dms.js" id="getUserSnippet":::

  1. Replace the existing `signIn` function in **auth.js** with the following.

      :::code language="javascript" source="../demo/auth.js" id="signInSnippet":::

  1. Save your changes and refresh the page. After you sign in, you should end up back on the home page, but the UI should change to indicate that you are signed-in.

  1. Click the user avatar in the top right corner to access the **Sign out** link. Clicking **Sign out** resets the session and returns you to the home page.

# Storing and refreshing tokens

  At this point your application has an access token, which is sent in the `Authorization` header of API calls. This is the token that allows the app to access the Aliconnect DMS on the user's behalf.

  However, this token is short-lived. The token expires an hour after it is issued. This is where the refresh token becomes useful. The refresh token allows the app to request a new access token without requiring the user to sign in again.

  Because the app is using the AIM library, you do not have to implement any token storage or refresh logic. AIM caches the token in the browser session. The `acquireTokenSilent` method first checks the cached token, and if it is not expired, it returns it. If it is expired, it uses the cached refresh token to obtain a new one. The Aim client object calls the `getToken` method in **auth.js** on every request, ensuring that it has an up-to-date token.

# Next

  1. [Add AIM](Step-5-Add-AIM.md)

Start by creating an empty directory for the project. This can be on an HTTP server, or a directory on your development machine. If it is on your development machine, you'll need to copy it to a server for testing, or run an HTTP server on your development machine. If you don't have either of those, the next section provides instructions.

# Start a local web server (optional)

  > [!NOTE]
  > The steps in this section require [Node.js](https://nodejs.org).

  In this section you will use [http-server](https://www.npmjs.com/package/http-server) to run a simple HTTP server from the command line.

  1. Open your command-line interface (CLI) in the directory you created for the project.
  1. Run the following command to start a web server in that directory.

      ```Shell
      npx http-server -c-1
      ```

  1. Open your browser and browse to `http://localhost:8080`.

  You should see an **Index of /** page. This confirms that the HTTP server is running.

# Design the app

  In this section you'll create the basic UI layout for the application.

  1. Create a new file in the root of the project named **index.html** and add the following code.

      :::code language="html" source="../demo/index.html" id="indexSnippet":::

      This defines the basic layout of the app, including a navigation bar. It also adds the following:

      - [Bootstrap](https://getbootstrap.com/) and its supporting JavaScript
      - [FontAwesome](https://fontawesome.com/)
      - [Aliconnect JavaScript API Library](https://github.com/aliconnect/api)

      > [!TIP]
      > The page includes a favicon, (`<link rel="shortcut icon" href="aim.png">`). You can remove this line, or you can download the **aim.png** file from [GitHub](https://github.com/aliconnect/api).

  1. Create a new file named **style.css** and add the following code.

      :::code language="css" source="../demo/style.css":::

  1. Create a new file named **auth.js** and add the following code.

      ```javascript
      function signIn() {
        // TEMPORARY
        updatePage({name: 'Megan Bowen', userName: 'meganb@contoso.com'});
      }

      function signOut() {
        // TEMPORARY
        updatePage();
      }
      ```

  1. Create a new file named **ui.js** and add the following code.

      :::code language="js" source="../demo/ui.js" id="uiInitSnippet":::

  1. Save all of your changes and refresh the page. Now, the app should look very different.

# Next

  1. [Register the app](Step-3-Register-the-app.md)

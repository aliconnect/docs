In this exercise you will incorporate the Aliconnect DMS into the application. For this application, you will use the [Aliconnect JavaScript API Library](https://github.com/aliconnect/api) library to make calls to the Aliconnect DMS.

# Create data objects

  In this section, you'll use the Aliconnect JavaScript API Library to create a Contact list.

  1. Add the following to **config.js**.

      :::code language="javascript" source="../demo/config.js" id="dmsConfigInit":::

  1. Add the following function to **dms.js**.

      :::code language="javascript" source="../demo/dms.js" id="initDmsSnippet":::

      Consider what this code is doing.

      - Schema configurations are initialized

  1. Add the following function to **dms.js**.

      :::code language="javascript" source="../demo/dms.js" id="uploadConfigSnippet":::

      Consider what this code is doing.

      - Schema configurations are uploaded to the server

  1. Add the following function to **ui.js**.

      ```JavaScript
      Views.list = function(items) {
        Views.error({
          message: 'Contacts List',
          debug: items;
        })
      }
      ```

  1. Add the following function to **dms.js**.

      :::code language="javascript" source="../demo/dms.js" id="getContactsSnippet":::

      Consider what this code is doing.

      - The URL that will be called is `/Contacts`.
      - The `select` method limits the fields returned for each events to just those the view will actually use.
      - The `orderby` method sorts the results by the start time, with the earliest event being first.
      - The `top` method requests up to 50 events in the response.

  1. Save your changes and refresh the app. Sign in and click the **Contacts** link in the nav bar. If everything works, you should see a JSON dump of all contacts (that will be empty when used for the first time).

## Display the results

  In this section you will update the `Views.list` function to display the events in a more user-friendly manner.

  1. Replace the existing `Views.list` function with the following.

      :::code language="javascript" source="../demo/ui.js" id="viewsListSnippet":::

      This loops through the collection of events and adds a table row for each one.

  1. Save the changes and refresh the app. Click on the **Contacts** link and the app should now render a list of Contacts.

# Next

  1. [Create Contact](Step-6-Create-Contact.md)

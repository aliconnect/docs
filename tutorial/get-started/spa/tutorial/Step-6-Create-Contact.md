In this section you will add the ability to create a new Contact

# Create a Contact page

  1. Add the following function to **ui.js** to render a page to view the contact.

      :::code language="javascript" source="../demo/ui.js" id="viewsItemSnippet":::

      Consider what this code is doing.

      - It loops all contact properties and displays the property
        if a value is available

# Create a Contact form

  1. Add the following function to **ui.js** to render a form.

      :::code language="javascript" source="../demo/ui.js" id="editFormSnippet":::

      Consider what this code is doing.

      - It loops all properties of a item and displays a input field

  1. Add the following function to **ui.js** to use the form to edit the contact.

      :::code language="javascript" source="../demo/ui.js" id="viewsEditSnippet":::

# Create the contact

  1. Add the following function to **ui.js** to create a new Contact.

      :::code language="javascript" source="../demo/ui.js" id="viewsNewContactFormSnippet":::

  1. Save your changes and refresh the app. Click the **Contacts** nav item, then click the **New Contact** button. Fill in the values and click **Create**. The app returns to the contact view once the new contact is created.

# Next

  1. [Change Contact properties](Step-7-Change-Contact-properties.md)

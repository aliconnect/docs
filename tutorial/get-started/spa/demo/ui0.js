// Copyright (c) Alicon.
// Licensed under the MIT License.

// <uiInitSnippet>
const Views = {
  authenticatedNav(user, view) {
    const authenticatedNav = Aim('authenticated-nav').text('');
    if (user) {
      authenticatedNav.append(
        Aim('li').class('nav-item').append(
          Aim('button')
          .class(`btn btn-link nav-link${view === Views.list ? ' active' : '' }`)
          .text('Contacts')
          .on('click', e => getContacts())
        )
      )
    }
  },
  accountNav(user) {
    const accountNav = Aim('account-nav').text('');
    if (user) {
      accountNav.class('nav-item dropdown').append(
        Aim('a').class('nav-link dropdown-toggle')
        .attr('data-toggle', 'dropdown').attr('role', 'button')
        .append(
          Aim('i')
          .class('far fa-user-circle fa-lg rounded-circle align-self-center')
          .style('width: 32px'),
          Aim('div').class('dropdown-menu dropdown-menu-right').append(
            Aim('h5').class('dropdown-item-text mb-0')
            .text(user.displayName),
            Aim('p').class('dropdown-item-text text-muted mb-0')
            .text(user.mail || user.userPrincipalName),
            Aim('div').class('dropdown-divider'),
            Aim('button').class('dropdown-item')
            .text('Sign out')
            .on('click', e => signOut()),
            Aim('button').class('dropdown-item')
            .text('Upload config')
            .on('click', e => uploadConfig()),
          ),
        ),
      );
    } else {
      accountNav.class('nav-item').append(
        Aim('button').class('btn btn-link nav-link')
        .text('Sign in')
        .on('click', e => signIn())
      );
    }
  },
  home(user) {
    const mainContainer = Aim('main-container').text('');
    if (user) {
      mainContainer.append(
        Aim('h4').text(`Welcome ${user.displayName || user.name}!`)
      )
    } else {
      mainContainer.append(
        Aim('button')
        .class('btn btn-primary btn-large')
        .text('Click here to sign in')
        .on('click', e => signIn())
      )
    }
  },
  error(error) {
    const mainContainer = Aim('main-container').text('');
    mainContainer.append(
      Aim('div').class('alert alert-danger').append(
        Aim('p').class('mb-3').text(error.message),
      ),
    )
    if (error.debug) {
      mainContainer.append(
        Aim('pre').class('alert-pre border bg-light p-2').append(
          Aim('code').class('text-break text-wrap')
          .text(JSON.stringify(error.debug, null, 2))
        )
      )
    }
  }
}
function updatePage(view, data) {
  const user = JSON.parse(sessionStorage.getItem('aimUser'));
  Views.accountNav(user);
  Views.authenticatedNav(user, view);
  (view||Views.home)(data||user);
}
updatePage(Views.home);
// </uiInitSnippet>

Views.list_temp = function(items) {
  Views.error({
    message: 'Contacts List',
    debug: items,
  });
};

// <viewsListSnippet>
Views.list = function(items) {
  Aim('main-container').text('').append(
    Aim('h1').class('mb-3').text('Contacts'),
    !Views.newContactForm ? null : Aim('div').append(
      Aim('button').class('btn btn-light btn-sm mb-3').text('New Contact')
      .on('click', e => updatePage(Views.newContactForm)),
    ),
    Aim('table').class('table').append(
      Aim('thead').append(
        Aim('tr').append(
          Aim('th').text('url'),
          Aim('th').text('name'),
        ),
      ),
      Aim('tbody').append(
        items.map(
          item => Aim('tr').append(
            Aim('td').text(item.url),
            Aim('td').append(
              !Views.item
              ? Aim('span').text(item.name)
              : Aim('a').text(item.name)
              .href('#').on('click', e => getContact(item)),
            )
          )
        )
      )
    )
  );
}
// </viewsListSnippet>

// <viewsItemSnippet>
Views.item = function (item) {
  Aim('main-container').text('').append(
    Aim('h1').class('mb-3').text('Contact'),
    !Views.edit ? null : Aim('div').append(
      Aim('button').class('btn btn-light btn-sm mb-3').text('Edit')
      .on('click', e => updatePage(Views.edit, item)),
      Aim('button').class('btn btn-light btn-sm mb-3').text('Delete')
      .on('click', e => deleteItem(item)),
    ),
    Aim('table').class('table').append(
      Aim('thead').append(
        Aim('tr').append(
          Aim('th').text('Property'),
          Aim('th').text('Value'),
        ),
      ),
      Aim('tbody').append(
        Object.entries(item.properties).map(([propertyName,property]) => {
          const value = item[propertyName];
          if (value) {
            return Aim('tr').append(
              Aim('td').text(propertyName),
              Aim('td').text(value),
            )
          }
        }),
      )
    )
  );
}
// </viewsItemSnippet>

// <editFormSnippet>
function editForm (title, item) {
  return Aim('form')
  .parent(
    Aim('main-container').text('')
  )
  .on('submit', e => postItem(item, e.target))
  .append(
    Aim('h1').class('mb-3').text(title),
    Aim('table').class('table').append(
      Aim('thead').append(
        Aim('tr').append(
          Aim('th').text('Property'),
          Aim('th').text('Value'),
        ),
      ),
      Aim('tbody').append(
        Object.entries(item.properties).map(([propertyName,property]) => {
          return Aim('tr').append(
            Aim('td').text(propertyName),
            Aim('td').append(
              Aim('input').id('ev-' + propertyName).value(item[propertyName]),
            ),
          )
        }),
      ),
    ),
  );
}
// </editFormSnippet>

// <viewsEditSnippet>
Views.edit = function (item) {
  const form = editForm('New Contact', item);
  form.append(
    Aim('div').append(
      Aim('button').class('btn btn-primary mr-2').text('Save'),
      Aim('button').class('btn btn-secondary').text('Cancel')
      .type('button').on('click', e => updatePage(Views.item, item)),
    ),
  );
}
// </viewsEditSnippet>

// <viewsNewContactFormSnippet>
Views.newContactForm = function() {
  const form = editForm('New Contact', new Contact());
  form.append(
    Aim('div').append(
      Aim('button').class('btn btn-primary mr-2').text('Create'),
      Aim('button').class('btn btn-secondary').text('Cancel')
      .type('button').on('click', e => getContacts()),
    ),
  );
}
// <viewsNewContactFormSnippet>

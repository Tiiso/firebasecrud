# firebasecrud

Expectations
1. Create user authentication with firebase
2. Let the admin create, read, edit and delete events.

What the code does
1. Allows user authentication
2. Once the user is logged in, they are redirected to the dashboard to upload events
3. The user never gets to see the dashboard, they are presented with this error: "_firebase__WEBPACK_IMPORTED_MODULE_2__.default.child is not a function" originating from the Events.js component
4. The problem comes from clashing firebase versions and styles

# Input
The user provides search text and form selections to the recipe finder. This comprises a recipe name or ingredient query along with any filters in the client interface. The frontend code receives these values from the web page and delivers them to the backend API.

# Process
The backend receives the request and reads the query parameters. It looks up stored recipe data and filters matching entries. The server applies simple conditions against recipe names, ingredients, or categories and builds a matching list. The client also handles button clicks, form state, and response parsing to update the display.

# Output
A list of recipes is detailed by the app. Recipe cards or details are rendered by the app when a recipe is clicked. After adding a recipe, the added recipe is shown on the page. Once deleted, the recipe is removed and disappears from the recipe page.

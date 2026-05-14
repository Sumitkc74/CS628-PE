# Input

The Add City page has a form that allows the user to input a city's name, country, and population. Also, the user can see its details by simply clicking on the city's name in the Cities list. 

# Process

The app saves a new city to a shared list using React's Context API after the form is submitted. The user is then taken to the Cities List. In the app, React Router uses useParams to retrieve the ID of the city from the URL and when a city is clicked, it gets the appropriate city from the saved list.  

# Output

On the Cities List page, all recently added cities are displayed as clickable links. When a city is selected, its name, country and population are shown on the same page below the list.
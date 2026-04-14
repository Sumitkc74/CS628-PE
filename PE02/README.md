# Movie List

# Input

The application makes use of an array of movie objects with release years, genres, and titles. Also, it accepts a dynamic input from a dropdown menu where the user can select the genre to look through the entire collection of movies or a particular genre.

# Process

The useState hook is used by the component to monitor the user's choice. React re-renders the user interface after filtering the movie array for matches based on the selected genre.It also employs a click handler to sound an alarm each time a certain movie card is tapped.

# Output

The final output is a list of movie cards that appears in the browser. The user interface instantaneously changes to just display the movies that have been chosen using the filter. Each movie card has a simple and clean layout that clearly displays the movie's detail.
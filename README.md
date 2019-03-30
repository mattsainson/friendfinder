# Friend Finder


Friend Finder is a dating matchup site.

Your name and a path to your photo are required.

Your match is determined by comparing your answers to a ten question survey with the answers from other people that have submitted the survey.

When you submit your survey, you will be added to the Friend Finder database.

After submitting your survey, your match with their photo will be displayed. Note: Although the path to your submitted photo will be submitted and saved in the database, a random image will be displayed.

In addition, if you want to see the Friend Finder database, click the API Friends List at the bottom of the Home or Survey page.

This app uses the following technology:

HTML, JS, Chosen, jQuery, CSS
node, express
moment, fs, path

There are two defined express routes: GET /api/friends, and POST /api/friends.
There are two defined html routes: /home, /survey (and *).

This app was largely based on an existing example with the writing the functionality of the routes, and working with the app deployment structure being most of the effort.

Here are some images of the app:

![home](https://github.com/mattsainson/bamazon/blob/master/resources/home.png)
![survey](https://github.com/mattsainson/bamazon/blob/master/resources/survey.png)
![entry](https://github.com/mattsainson/bamazon/blob/master/resources/entry.png)
![match](https://github.com/mattsainson/bamazon/blob/master/resources/match.png)

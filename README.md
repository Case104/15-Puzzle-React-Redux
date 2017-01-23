![Splash](http://i.imgur.com/qN1yAgH.png)

##Start Here!

To view the app either clone it down and use `npm run start`, or visit this [Heroku Link](https://react-redux-15-puzzle.herokuapp.com/).

####Technologies Used:
 * React
 * Redux
 * Webpack
 * Babel
 * Express
 * Bootstrap

####Features:
 * Counter
 * Solvability Validation
 * New Board

##Design Thoughts

Although I could have probably completed this project much quicker with just vanilla JavaScript or jQuery, I love using React and I have been looking for an excuse to practice implimenting Redux.

At Dev Bootcamp, one of our first projects was to create a Sudoku Solver, and I applied a similar style when imagining how I was going to create the board and access specific cells. In particular, I view each cell as a coordinate of its row and column. I made a helper method (cellCoords) to allow me to grab those coordinates to manipulate the cells.

The largest frustrations that I faced were mostly involved in the styling. I tend to focus and enjoy the logic aspects of coding more than the presentational, and it takes me a little while to get things to look the way I'd like them to. Here I used Bootstrap to expedite the process, at the cost of looking like every other Bootstrap page.

##Closing

In general I really enjoyed this project. If I decide to add more to this, I would first add a solver and animate the movements to make them more user friendly. I would then add proptypes and maybe some basic testing.
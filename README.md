# Racing Simulator

A racing simulation in the browser using asynchronous JS to make multiple API calls that will update the racer position over time.

## Usage

 1. Pick a track and racer
 2. After the coutdown click the button as fast as you can to accelerate your racer

## Installation

In order to build this game, we need to run two things: the game engine API and the front end.

### Start the Server

The game engine has been compiled down to a binary so that you can run it on any system. Because of this, you cannot edit the API in any way, it is just a black box that we interact with via the API endpoints.

To run the server, locate your operating system and run the associated command in your terminal at the root of the project.

| Your OS               | Command to start the API                                  |
| --------------------- | --------------------------------------------------------- |
| Mac                   | `ORIGIN_ALLOWED=http://localhost:3000 ./bin/server-osx`   |
| Windows               | `ORIGIN_ALLOWED=http://localhost:3000 ./bin/server.exe`   |
| Linux (Ubuntu, etc..) | `ORIGIN_ALLOWED=http://localhost:3000 ./bin/server-linux` |

Note that this process will use your terminal tab, so you will have to open a new tab and navigate back to the project root to start the front end.

#### WINDOWS USERS -- Setting Environment Variables
If you are using a windows machine:
1. `cd` into the root of the project containing data.json 
2. Run the following command to add the environment variable:
```set DATA_FILE=./data.json```

If you still run into issues running the API server on your machine, you can run this project in the Udacity classroom.


### Start the Frontend

First, run your preference of `npm install && npm start` or `yarn && yarn start` at the root of this project. Then you should be able to access http://localhost:3000.

## Tech

- html
- css/scss
- javascript/ typescript




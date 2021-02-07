"use strict";
// PROVIDED CODE BELOW (LINES 1 - 80) DO NOT REMOVE
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// The store will hold all information needed globally
var store = {
    track_id: undefined,
    player_id: undefined,
    race_id: undefined,
};
// We need our javascript to wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    onPageLoad();
    setupClickHandlers();
});
function onPageLoad() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                getTracks()
                    .then(function (tracks) {
                    var html = renderTrackCards(tracks);
                    renderAt('#tracks', html);
                });
                getRacers()
                    .then(function (racers) {
                    var html = renderRacerCars(racers);
                    renderAt('#racers', html);
                });
            }
            catch (error) {
                console.log("Problem getting tracks and racers ::", error.message);
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function setupClickHandlers() {
    document.addEventListener('click', function (event) {
        var target = event.target;
        // Race track form field
        if (target.matches('.card.track')) {
            handleSelectTrack(target);
        }
        // Podracer form field
        if (target.matches('.card.podracer')) {
            handleSelectPodRacer(target);
        }
        // Submit create race form
        if (target.matches('#submit-create-race')) {
            event.preventDefault();
            // start race
            handleCreateRace();
        }
        // Handle acceleration click
        if (target.matches('#gas-peddle')) {
            handleAccelerate(target);
        }
    }, false);
}
function delay(ms) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    error_1 = _a.sent();
                    console.log("an error shouldn't be possible here");
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// ^ PROVIDED CODE ^ DO NOT REMOVE
// This async function controls the flow of the race, add the logic and error handling
function handleCreateRace() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // render starting UI
            renderAt('#race', renderRaceStartView());
            return [2 /*return*/];
        });
    });
}
function runRace(raceID) {
    return new Promise(function (resolve) {
        // TODO - use Javascript's built in setInterval method to get race info every 500ms
        /*
            TODO - if the race info status property is "in-progress", update the leaderboard by calling:
    
            renderAt('#leaderBoard', raceProgress(res.positions))
        */
        /*
            TODO - if the race info status property is "finished", run the following:
    
            clearInterval(raceInterval) // to stop the interval from repeating
            renderAt('#race', resultsView(res.positions)) // to render the results view
            reslove(res) // resolve the promise
        */
    });
    // remember to add error handling for the Promise
}
function runCountdown() {
    return __awaiter(this, void 0, void 0, function () {
        var timer_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    // wait for the DOM to load
                    return [4 /*yield*/, delay(1000)];
                case 1:
                    // wait for the DOM to load
                    _a.sent();
                    timer_1 = 3;
                    return [2 /*return*/, new Promise(function (resolve) {
                            // TODO - use Javascript's built in setInterval method to count down once per second
                            // run this DOM manipulation to decrement the countdown for the user
                            document.getElementById('big-numbers').innerHTML = --timer_1;
                            // TODO - if the countdown is done, clear the interval, resolve the promise, and return
                        })];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleSelectPodRacer(target) {
    console.log("selected a pod", target.id);
    // remove class selected from all racer options
    var selected = document.querySelector('#racers .selected');
    if (selected) {
        selected.classList.remove('selected');
    }
    // add class selected to current target
    target.classList.add('selected');
    // TODO - save the selected racer to the store
}
function handleSelectTrack(target) {
    console.log("selected a track", target.id);
    // remove class selected from all track options
    var selected = document.querySelector('#tracks .selected');
    if (selected) {
        selected.classList.remove('selected');
    }
    // add class selected to current target
    target.classList.add('selected');
    // TODO - save the selected track id to the store
}
function handleAccelerate() {
    console.log("accelerate button clicked");
    // TODO - Invoke the API call to accelerate
}
// HTML VIEWS ------------------------------------------------
// Provided code - do not remove
function renderRacerCars(racers) {
    if (!racers.length) {
        return "\n\t\t\t<h4>Loading Racers...</4>\n\t\t";
    }
    var results = racers.map(renderRacerCard).join('');
    return "\n\t\t<ul id=\"racers\">\n\t\t\t" + reuslts + "\n\t\t</ul>\n\t";
}
function renderRacerCard(racer) {
    var id = racer.id, driver_name = racer.driver_name, top_speed = racer.top_speed, acceleration = racer.acceleration, handling = racer.handling;
    return "\n\t\t<li class=\"card podracer\" id=\"" + id + "\">\n\t\t\t<h3>" + driver_name + "</h3>\n\t\t\t<p>" + top_speed + "</p>\n\t\t\t<p>" + acceleration + "</p>\n\t\t\t<p>" + handling + "</p>\n\t\t</li>\n\t";
}
function renderTrackCards(tracks) {
    if (!tracks.length) {
        return "\n\t\t\t<h4>Loading Tracks...</4>\n\t\t";
    }
    var results = tracks.map(renderTrackCard).join('');
    return "\n\t\t<ul id=\"tracks\">\n\t\t\t" + results + "\n\t\t</ul>\n\t";
}
function renderTrackCard(track) {
    var id = track.id, name = track.name;
    return "\n\t\t<li id=\"" + id + "\" class=\"card track\">\n\t\t\t<h3>" + name + "</h3>\n\t\t</li>\n\t";
}
function renderCountdown(count) {
    return "\n\t\t<h2>Race Starts In...</h2>\n\t\t<p id=\"big-numbers\">" + count + "</p>\n\t";
}
function renderRaceStartView(track, racers) {
    return "\n\t\t<header>\n\t\t\t<h1>Race: " + track.name + "</h1>\n\t\t</header>\n\t\t<main id=\"two-columns\">\n\t\t\t<section id=\"leaderBoard\">\n\t\t\t\t" + renderCountdown(3) + "\n\t\t\t</section>\n\n\t\t\t<section id=\"accelerate\">\n\t\t\t\t<h2>Directions</h2>\n\t\t\t\t<p>Click the button as fast as you can to make your racer go faster!</p>\n\t\t\t\t<button id=\"gas-peddle\">Click Me To Win!</button>\n\t\t\t</section>\n\t\t</main>\n\t\t<footer></footer>\n\t";
}
function resultsView(positions) {
    positions.sort(function (a, b) { return (a.final_position > b.final_position) ? 1 : -1; });
    return "\n\t\t<header>\n\t\t\t<h1>Race Results</h1>\n\t\t</header>\n\t\t<main>\n\t\t\t" + raceProgress(positions) + "\n\t\t\t<a href=\"/race\">Start a new race</a>\n\t\t</main>\n\t";
}
function raceProgress(positions) {
    var userPlayer = positions.find(function (e) { return e.id === store.player_id; });
    userPlayer.driver_name += " (you)";
    positions = positions.sort(function (a, b) { return (a.segment > b.segment) ? -1 : 1; });
    var count = 1;
    var results = positions.map(function (p) {
        return "\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<h3>" + count++ + " - " + p.driver_name + "</h3>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t";
    });
    return "\n\t\t<main>\n\t\t\t<h3>Leaderboard</h3>\n\t\t\t<section id=\"leaderBoard\">\n\t\t\t\t" + results + "\n\t\t\t</section>\n\t\t</main>\n\t";
}
function renderAt(element, html) {
    var node = document.querySelector(element);
    node.innerHTML = html;
}
// ^ Provided code ^ do not remove
// API CALLS ------------------------------------------------
var SERVER = 'http://localhost:8000';
function defaultFetchOpts() {
    return {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': SERVER,
        },
    };
}
// TODO - Make a fetch call (with error handling!) to each of the following API endpoints 
function getTracks() {
    // GET request to `${SERVER}/api/tracks`
    return fetch(SERVER + "/api/tracks").then(function (res) { return res.json(); });
}
function getRacers() {
    // GET request to `${SERVER}/api/cars`
    return fetch(SERVER + "/api/cars").then(function (res) { return res.json(); });
}
function createRace(player_id, track_id) {
    player_id = parseInt(player_id);
    track_id = parseInt(track_id);
    var body = { player_id: player_id, track_id: track_id };
    return fetch(SERVER + "/api/races", __assign(__assign({ method: 'POST' }, defaultFetchOpts()), { dataType: 'jsonp', body: JSON.stringify(body) }))
        .then(function (res) { return res.json(); })
        .catch(function (err) { return console.log("Problem with createRace request::", err); });
}
function getRace(id) {
    // GET request to `${SERVER}/api/races/${id}`
}
function startRace(id) {
    return fetch(SERVER + "/api/races/" + id + "/start", __assign({ method: 'POST' }, defaultFetchOpts()))
        .then(function (res) { return res.json(); })
        .catch(function (err) { return console.log("Problem with getRace request::", err); });
}
function accelerate(id) {
    // POST request to `${SERVER}/api/races/${id}/accelerate`
    // options parameter provided as defaultFetchOpts
    // no body or datatype needed for this request
}

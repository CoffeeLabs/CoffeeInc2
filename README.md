Coffee Inc.
==========

Coffee Inc. is a simple, hacky game built as a university project by students of the Free University of Bolzano for Pekka Abrahamsson's course "Introduction to Management Engineering" in 2012/2013.
The assignment was to build a game that teaches the basics of startup culture, in a fun way.

Our game is basically a mobile website (based on the Lungo.js framework) with some custom Javascript.

## How the game works
You are a startup founder with an awesome idea and want to start your own business. Your goal is to develop a quality product that will allow you to build a solid business.
However, since you don't have enough money, you will need investors to help fund the development. However, investors can be a problem, because they want equity of your company and sometimes force you to make certain decisions.

You win the game when your product quality reaches a score of 100 and you lose if you go bankrupt.

### UI elements
#### Navigation
Left to right:
1. Employee View
2. Investor View
3. Menu

#### Statusbar
Left to right: 
1. Product Score (Game Progress)
2. Employee Satisfied (How satisfied your employees are with their working conditions)
3. How many percent of the company you still own ()
4. Budget (How much money you have right now)

## Hire Employees
Icons below employee pictures (Left to right):
1. Skill
2. Minimum Salary (the employee will be unh appy if you pay hitm less than this)

## Why the game is cool
* It uses some fancy new web technologies like localstorage
* All assets are 100% vector (SVG images)
* Even animations are vector (SVGs are swapped out with JS)
* Responsive Layout
* We use a custom icon font for the monochrome icons in the UI
* Dubstep in the presentation video ![]()
 
## Issues 
* Bugs
* Lots of ugly hacks
* Doesn't work in many browsers

## Browser Support
The game works best in:
* Chromium 24 on GNU/Linux

The game kinda works in:
* Firefox 18 on GNU/Linux (Lungo.js related styling problems)
* Firefox 18 for Android (Lungo.js related styling problems)
* Firefox 18 on OSX 10.8 (Icon font looks like crap)
* Chrome 24 for Windows (Icon font looks like crap)
* Chrome 24 on OSX 10.8 (fonts look like crap)
* Chrome for Android (some weird SVG rendering bugs)
* Android 4.1 stock browser (some weird SVG rendering bugs)
* Safari on OSX 10.8 (some weird SVG rendering bugs)

The game doesn't work in:
* Internet Explorer (Windows 7 and Windows Phone 7)
* Midori on GNU/Linux
* Epiphany 3.6 on GNU/Linux
* Android 2 stock browser

If you test in devices/browsers not listed here, please report if it works/what issues you had.

## How to run the game
You can try the game here: http://5.175.154.87/CoffeeInc2

If you want to run it yourself, these are the steps neccessary:

1. Install a local webserver
2. Git clone (or download) this repository into your localhost folder
3. Open localhost/c3 in your browser (or even better, open yourpcslocalip/c3 on your mobile device)
4. Profit
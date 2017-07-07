# Cordova React Boilerplate

I wrote this as a simple starter kit for whenever I make an Android app using Cordova and Visual Studio Code as my editor. It should work for other platforms but that's what I had in mind when I made it. If this is not your setup, you should still be able to use this as a starting point but I'm catering the startup instructions specifically to this setup.

## Prerequisites

  0. Install [Node.js](https://nodejs.org/en/)
  1. Install [Cordova](https://cordova.apache.org/#getstarted)
  2. Install [Visual Studio Code](https://code.visualstudio.com/)
  3. Install the [Cordova Tools](https://github.com/Microsoft/vscode-cordova) extension for Visual Studio Code. You can do this from inside of the editor
  4. Clone this repository

## Setup

If you want to change the name of the package, open the `config.xml` and find this chunk of code:

```xml
<widget id="com.react.boilerplate" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

Change `com.react.boilerplate` to whatever you want. You'll also see a `<name>` and `<description>` that you may want to change.
If you do, I'd also suggest going to `package.json` and reflecting that change there. I'm not currently aware of a way to write it once and reflect it in both places.

----

Open a command line and go to the folder for this repository. Type in

```
cordova prepare
```

and hit Enter.

Next, run

```
npm install
```

Watch as it installs all of the modules you need.

Plug your Android device into your computer via USB. On your Android, open Settings and go to Developer Tools.
How exactly you access this may vary across devices. Enable Developer Tools and enable USB debugging.

## Building the Application

You need to run a Webpack build before every deployment. To do a single build run

```
npm run build
```

There's also a watch task (`npm run watch`) so it will re-compile whenever your files change. If you're testing on a device
you'll still need to restart the application to get the changes.

I also added a couple of tasks to Visual Studio Code so you can run them directly from the editor.

## Running the Application

### Command-Line

From the command-line enter

```
cordova run
```

then after some preparation and compilation, the app will open on your device.

The first build is always the longest. Don't worry.

### Visual Studio Code

Open this project in Visual Studio Code. Go to the Debug section (bug with a crossed out circle on it on the action bar).
You'll see a dropdown that has options like "Run Android on Device" and so forth.

After you've chosen an option, click the green arrow button or hit F5. Your debug session will begin.

To interact with breakpoints and so forth, you'll need to access the Chrome Developer Tools.

If you're running on the device and want to debug with Chrome Dev Tools, then open up the developer tools and click on the 3 dots nexts to the X in the
upper-right corner. Hover over "More tools" then click "Remote devices". It may take a moment but your device should show up there. Click on it and you
should see a list of things you could debug. Find your app and click "Inspect".

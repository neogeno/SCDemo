# SCDemo - Standard Chartered Demo App
Author: P. Chugh January 1 2019

##Overview
The task was to build a demonstration app with a GUI of my choice that calls a public testing api  https://jsonplaceholder.typicode.com/. The assumptions made here are that this is not meant to be a fully working app and only a UI showcase. Hence some parts are not implemented such as modifing/adding todos, photos, users etc and also detecting network connectivity, slow connections, offline user access and other common checking


## Instructions on building and running from Source on a Mac

### Prerequisites
* React Native
* XCode and Xcode CLI utilities
* Cocao Pods
* npm / nodeJS
* Android Studio

### iOS version

Step 1: Clone Repo

``git clone https://github.com/neogeno/SCDemo.git``

Step 2: Install dependencies

```
cd SCDemo
npm install
cd ios
pod repo update
pod install
```

Step 3: Build/Run in Simulator

``react-native run-ios``

### Android version

Step 1: Clone Repo

``git clone https://github.com/neogeno/SCDemo.git``

Step 2: Install dependencies

```
cd SCDemo
npm install
```

Step 3: Ensure Android SDK and Emulator path is correct. Replace below path as necessary
```
export ANDROID_HOME=~/Documents/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
echo $ANDROID HOME
```

Step 4: Show emulators available and run. Use ampersand to run in background process
```
emulator -list-avds
emulator @{NAME OF YOUR PREFERRED EMULATOR} &
```

Step 5: Build/Run for Simulator
``react-native run-android``

## Running Automated Tests

This project uses Detox to run end-to-end testing on the UI. The test specification is intentionally basic as it is intended to show the concept that I would use in a final app rather than implement comprehensive test case and code coverage. To run the tests for iOS type:

``detox test``




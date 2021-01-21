# sChallenge_WebClient
An Angular + TypeScript demonstration.
## Summary
A front-end SPA that provides a basic way to view and filter patients (callers) of the Telehealth system. This system is only available for supervisor's to view, as if agents try to access, they are greeted with a dashboard disabling popover that informs them of the usage and provides the option to log out.
 
Patients can be sorted by a few example categories, mainly being first name, postal code, and whether they have contracted Covid-19. Alternatively, patients can be sorted based on their birth date and the date the patient information was logged.
 
**Note:** This app was completed as a side-project under a time-limit so some time-optimizing adjustments were made to provide basic system functionality.
## How to Run
**Note:** The Web API should be running before any app interaction to facilitate back-end operations (see sChallenge_WebAPI for details).

First, download this repo to your computer.

It is recommended to use Visual Studio Code (VSC) to run this application.

To run this app, Node, NPM, and Ionic Framework are required. Node and NPM are packaged together and can be downloaded (here)[https://nodejs.org/en/download/]. To check Node and NPM have been installed successfully, run the commands `node -v` and `npm -v` to check the version of each.

Ionic Framework is a collection of UI components for cross-platofrm development that integrates with major front-end frameworks (like Angular). After installing node and npm, open a terminal and run `npm install @angular/cli` then `npm install -g @ionic/cli` to get the Ionic CLI. 

Open this repo in VSC by dragging and dropping the folder and, using the built-in terminal `cd` into the app (if not already there). Once in the directory, run `npm i` to download any missing node dependencies as node_modules are not pushed to github (for size purposes). Then run `ionic serve` and the app will start running on "http://localhost:8100" and will present you with a login screen. 

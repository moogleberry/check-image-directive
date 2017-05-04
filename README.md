# check-image-directive

You want to be able to use `ng-src` to load interpolated image urls and let them show up if an image exists, and not show the "broken image" icon if it doesn't exist.

This directive gives you the power to tell if what you loaded is actually an image or not.  

In Action: https://plnkr.co/edit/F72RcvYclONxtMbxEpa5?p=preview

## Install
* Include the `check-image-directive.js` script in your app.

> angular.module('myApp', [
'checkImageDirective'
]);

## Usage
`<img ng-src="{{foo}}" check-image />`

## Requirements
* Angular 1.x

## How does it work?
It uses Javascript's `Image` type and attaches a promise to `.onerror` and `.onload`.  This promise will resolve to a boolean representing whether the Image loaded or errored.  Non-images will error, including non-existent files (404).


Inspired by: http://stackoverflow.com/questions/22423057/angular-js-isimage-check-if-its-image-by-url

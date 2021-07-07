### Angular Konami 
-----------------
A directive that listen for the konami code on a element and broadcast an event when the code is correctly executed

#### What you should know before starting
jQuery [documentation about `keydown` event](http://api.jquery.com/keydown/) :

> The keydown event is sent to an element when the user first presses a key on the keyboard. It can be attached to any element, but the event is only sent to the element that has the focus. Focusable elements can vary between browsers, but form elements can always get focus so are reasonable candidates for this event type.

#### How to test
---------------
Because of the CDN to angularjs library, you should launch the demo with a web server... 
The simpliest way to test it, is to go to the app dir and execute this `python3 -m http.server --cgi 8000`

You can also try this [jsFiddle](http://jsfiddle.net/optyler/g0445cvc/)

#### License
-----------
MIT Licensed - with the exception that you star this repo :)


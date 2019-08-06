/*
  JavaScript is meant to add interactivity to your pages. JavaScript does this using a mechanism using events.
  Events are a part of the Document Object Model (DOM) Level 3 and every HTML element contains a set of events that can trigger JavaScript Code.
*/

// onclick Event Type


<html> 
   <head> 
      <script type = "text/javascript">  
         function sayHello() {  
            document.write ("Hello World")  
         }   
      </script> 
   </head> 
   
   <body> 
      <p> Click the following button and see result</p> 
      <input type = "button" onclick = "sayHello()" value = "Say Hello" /> 
   </body> 
</html> 



<html> 
   <head> 
      <script type = "text/javascript"> 
         function over() {  
            document.write ("Mouse Over");  
         }  
         function out() {  
            document.write ("Mouse Out");  
         }  
      </script> 
   </head> 

   <body> 
      <p>Bring your mouse inside the division to see the result:</p> 
      <div onmouseover = "over()" onmouseout = "out()"> 
         <h2> This is inside the division </h2> 
      </div> 
   </body> 
</html>


/*
         HTML 5 Standard Events
The standard HTML 5 events are listed in the following table for your reference. The script indicates a JavaScript function to be executed against that event.

Attribute	Value	Description
offline	script	Triggers when the document goes offline
onabort	script	Triggers on an abort event
onafterprint	script	Triggers after the document is printed
onbeforeonload	script	Triggers before the document load
onbeforeprint	script	Triggers before the document is printed
onblur	script	Triggers when the window loses focus
oncanplay	script	Triggers when the media can start play, but might have to stop for buffering
oncanplaythrough	script	Triggers when the media can be played to the end, without stopping for buffering
onchange	script	Triggers when an element changes
onclick	script	Triggers on a mouse click
oncontextmenu	script	Triggers when a context menu is triggered
ondblclick	script	Triggers on a mouse double-click
ondrag	script	Triggers when an element is dragged
ondragend	script	Triggers at the end of a drag operation
ondragenter	script	Triggers when an element has been dragged to a valid drop target
ondragleave	script	Triggers when an element leaves a valid drop target
ondragover	script	Triggers when an element is being dragged over a valid drop target
ondragstart	script	Triggers at the start of a drag operation
ondrop	script	Triggers when the dragged element is being dropped
ondurationchange	script	Triggers when the length of the media is changed
onemptied	script	Triggers when a media resource element suddenly becomes empty
onended	script	Triggers when the media has reached the end
onerror	script	Triggers when an error occurs
onfocus	script	Triggers when the window gets focus
onformchange	script	Triggers when a form changes
onforminput	script	Triggers when a form gets user input
onhaschange	script	Triggers when the document has changed
oninput	script	Triggers when an element gets user input
oninvalid	script	Triggers when an element is invalid
onkeydown	script	Triggers when a key is pressed
onkeypress	script	Triggers when a key is pressed and released
onkeyup	script	Triggers when a key is released
onload	script	Triggers when the document loads
onloadeddata	script	Triggers when media data is loaded
onloadedmetadata	script	Triggers when the duration and other media data of a media element is loaded
onloadstart	script	Triggers when the browser starts to load the media data
onmessage	script	Triggers when the message is triggered
onmousedown	script	Triggers when a mouse button is pressed
onmousemove	script	Triggers when the mouse pointer moves
onmouseout	script	Triggers when the mouse pointer moves out of an element
onmouseover	script	Triggers when the mouse pointer moves over an element
onmouseup	script	Triggers when a mouse button is released
onmousewheel	script	Triggers when the mouse wheel is being rotated
onoffline	script	Triggers when the document goes offline
ononline	script	Triggers when the document comes online
onpagehide	script	Triggers when the window is hidden
onpageshow	script	Triggers when the window becomes visible
onpause	script	Triggers when the media data is paused
onplay	script	Triggers when the media data is going to start playing
onplaying	script	Triggers when the media data has start playing
onpopstate	script	Triggers when the window's history changes
onprogress	script	Triggers when the browser is fetching the media data
onratechange	script	Triggers when the media data's playing rate has changed
onreadystatechange	script	Triggers when the ready-state changes
onredo	script	Triggers when the document performs a redo
onresize	script	Triggers when the window is resized
onscroll	script	Triggers when an element's scrollbar is being scrolled
onseeked	script	Triggers when a media element's seeking attribute is no longer true, and the seeking has ended
onseeking	script	Triggers when a media element's seeking attribute is true, and the seeking has begun
onselect	script	Triggers when an element is selected
onstalled	script	Triggers when there is an error in fetching media data
onstorage	script	Triggers when a document loads
onsubmit	script	Triggers when a form is submitted
onsuspend	script	Triggers when the browser has been fetching media data, but stopped before the entire media file was fetched
ontimeupdate	script	Triggers when the media changes its playing position
onundo	        script	Triggers when a document performs an undo
onunload	    script	Triggers when the user leaves the document
onvolumechange	script	Triggers when the media changes the volume, also when the volume is set to "mute"
onwaiting	script	Triggers when the media has stopped playing, but is expected to resume
*/
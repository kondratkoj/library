# library
TOP Library Project

This is the project to practice with JS constructors and objects and prototypal inheritance. 

I learned in doing this that so long as objects are stored in an array, they can have the same name. They are all distinct in their array position and in their individual values.

It's been a minute since I've done any .js coding. It's wild what I've forgotten how to do and have had to go back and look things up. 

I've been using Josh's reset.css lately. I have no preference on any one specific one, but I know it's good form to use it. 

I'm addind extra functionality to the project by giving the user the option to provide an image URL to put their own background on the book tiles. working on making the layouts and whatnot look better.

I've got they styling done I think. I've got the book cards all displaying nicely. Each has a button to delete itself and a button that pops up a dialog to add a new book.
  But, I've got a bug I can't chase down. It deletes all of the books when I try to add a new book with the required input fields filled. 
      Claude helped me find the bug. I had button type set to submit, which reloaded the webpage and cleared all of the books that weren't hard coded. That's... frustrating. added e.preventDefault

Project is finished. There was a lot that I learned and got bit by during this. I look forward to improving. 
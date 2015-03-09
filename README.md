Questions
=========

## General

 - In class we talk about ‘refactoring a code’  sometimes, something I still find very difficult. Most of the time I’m already happy when something works, do ‘beautifying ‘ it is hard for me. Are there any tactics for that or is it just trial and error?

Well, first off, refactoring isn't the same thing as beautifying. Beautifying is refining the code so it looks nice and reads easily. Refactoring is refining the code so it executes well - that is, it does the same thing, but better. It happens that a lot of good refactors also make for more readable code, but not always, and they are very much separate things. Refactors *do* always make for more *maintainable* code, however, and readability is related to maintainability. YMMV.

In terms of tactics: I'm a Derrida fanboy, so let's look at etymology. Refactoring is factoring again; 'factoring' is a term from mathematics, and means breaking the 'problem' down into smaller parts. When you're programming, the problem you write code to solve is always of the form "I want x to happen"; factoring is thinking "if x happens, that means y and z will have happened", and writing code to make y and z happen, so that when your code has finished running, x will have happened. Refactoring is what happens when you realize that 'y and z' is not the only way of describing x.

[plink plunk](http://plnkr.co/edit/2sJqBkpFYDWWEnnYDhJt?p=preview)

For example, imagine that you want a JavaScript program which outputs the odd numbers between 2 and 16: 

3, 5, 7, 9, 11, 13, 15

So you write:

`var sequence = [];`<br>
`for (var i = 3; i < 16, i++) {`<br>
`sequence.push(i);`<br>
`i = i + 2;`<br>
`}`<br>
`console.log(sequence);`

And this works perfectly. But then you realize that you did the work of deciding what numbers to output, and just figured out a way to print it, rather than making the computer do that work, so you change it:

`var sequence = [];`<br>
`for (var i = 2; i < 16; i++) {`<br>
`if (i % 2 != 0) {`<br>
`sequence.push(i)`<br>
`}`<br>
`console.log(sequence);`

Now the computer is doing the work and all you have to do is specify limits, so it's even better. But then you realize that this is a roundabout way of solving the problem, and actually a simple mathematical formula describes the sequence, so you change it again:

`var sequence = [];`<br>
`function getNumber(x) {`<br>
`return (2 * x) + 1;`<br>
`}`<br>
`for (var i = 1; i < 8; i++)`<br> 
`sequence.push(getNumber(i));`<br>
`}`<br>
`console.log(sequence);`

This is really l33t, since you abstracted out the pattern and turned it into a function. But then you figure that these limits are pretty arbitrary, and someone else (including you at a later time) might want to do the same thing but with a different range. So you change it one more time:

`function getSequence(min, max) {`<br>
`var sequence = [];`<br>
`for (var i = min; i < max; i++) {`<br>
`if (i % 2 != 0) {`<br>
`sequence.push(i);`<br>
`}`<br>
`}`<br>
`return sequence;`<br>
`}`<br>
`console.log(getSequence(2,16));`

This incorporates the best parts of all the previous versions, and the only thing that has really changed is how we think about the problem - it still outputs the same thing in all cases.

 - I'm really finding it hard to see the advantage of local storage in something I would make in JavaScript. In creating what kind of programme should I think about using local storage to my advantage?

This question is so general that there's various levels I can answer it from: hardware, software, actual use cases. 

There are two main kinds of computer storage: hard drives and RAM. The advantage of RAM is that it's extremely fast-access; the disadvantage is that it essentially only works while something is using it. Hard drives are slower to read from and write to, but things that are written generally stay written unless something directly overwrites them. (Even deleting things doesn't actually erase them, it just removes all references to them.) So, a computer is designed to make the best possible use of those properties: data it expects to use is loaded into RAM so that it can be read and written quickly; data it wants to save but doesn't need immediately is written to disk.

The thing with scripting languages like JavaScript is that they generally don't use the hard drive at all. When you declare a variable in a script, the value is being stored in your computer's RAM. So if you close the page, that memory is freed up so it can be reused by other things. localStorage is nothing more than some space on your hard drive which is set aside so you can make data persistent between different occasions of running a script. 

This means that the advantage is you can now make anything for which persistent data is necessary. For example, you can write a game that can be saved and resumed without having to keep a browser window open all the time. But that's just one example. 

 - I know this is way too late but if we have any time left over tomorrow I'd like to see how the inspector window can be used for troubleshooting.

Yes it is. But it's also easy to demonstrate so we'll probably get to it.

## Specific and short

 - Well, I did see that they are two variables, but in my head it translates to adding up all the entries of the entire journal in the index = 0 position rather than the ones that are not included anywhere else. Which I know is wrong because that's not what it does, but I can't get my head around the syntax.

First of all: who the fuck recommended a book that, in trying to teach you JavaScript, casually uses non-trivial statistics concepts and the representation of decimal numbers in binary? I retroactively apologize on JH's behalf for that because it's ridiculous. The JavaScript might be eloquent, but I am pretty good at this shit and even I would have balked at the cognitive overhead of the document itself. And the JS isn't even eloquent - it's got all the bad form JH has already told you about.

Regardless, the actual problem seems to be not knowing what something does just by looking at it. It's correct to say that Haverbeke should have written more readable code, but unfortunately it's also easy. The reality is that you're going to run into code written by programmers who take more cues from the Elder Gods than from people with common sense or decency. So, it helps to be good at figuring out what code does when it's not immediately clear. 

Key word: "does". The main thing I noticed about the question was that it said "I had a very long stare down". My first question in response is "how come you didn't just run it and see what happened?" You could, of course, try to figure it out in your head, but this is the entire reason we have computers. This may be a typical mistake of academics, or it could be because code looks more like math than like language, but either way: code is supposed to DO something. We say it works when that thing is the right thing. But you can't decide that unless you first make it actually do something.

 - And here's mine: for the Mocha assignment, I think I got the shortest code ever to pass all tests, and was actually quite surprised when all the tests passed. My code in script.es6.js: Is this really a solution or was it just Plunker being too kind to me?

	`let parseSession = function(sessionDoc){`<br>
	`if(!sessionDoc){`<br>
	`throw '';`<br>
	`}`<br>
	`let session = {};`<br>
	`let sessionSplit = sessionDoc.split('\n=');`<br>
	`let partsSplit = sessionSplit.shift().split();`<br>
	`if(sessionSplit.length === 2){`<br>
	`session.title = sessionSplit[0];`<br>
	`}`<br>
	`else {`<br>
	`throw('');`<br>
	`}`<br>
	`};`<br>

I had a similar experience, and I really think something is wrong with Plunker. Especially the line `let session = {};` seems to be causing more tests to pass than should be passing. Either way: If your test is of the form `expect(parseSession(thing)).to.equal(otherthing)` and `otherthing` is not null, then it's definitely a problem with Plunker, because your function doesn't return anything.

 - In the assignment "Do not repeat yourself", my code worked, but I know I repeated myself a lot in the templates though. I saw that you posted an optimised code, however, I'm still wondering how you combined everything?  

[plink plunk](http://plnkr.co/edit/e7Zoq9aU63ieL3B0l8Ig?p=preview)

	`[].forEach.call(document.querySelectorAll('.' + chorus), function (inPoint) {`
	`var template = document.querySelector('#' + chorus);` 

We can walk through the steps I took to refactor it? The real gist of it, though, is that I noticed there was a repeating pattern, so I took that pattern and found what was variable (meaning the adjective 'variable'), and then figured out what I had to do to get the necessary values into actual literal variables. The main 'trick' to it is the realization that the functions `querySelector` and `querySelectorAll` take strings as arguments; once you know that, and you realize that distinguishing between a class and an ID can be done textually (ie. by simple operations on a string), the 'trick' reveals itself: I'm not saying "find a class called `x`", I'm saying "put a period in front of `x` and use the resulting string to find an element" because I know that will result in finding a class called `x`.

## Specific and long

 - Sending a get request to API. I’m still nowot quite sure how the authentication works, the example that Wiha made and the Haverbeke text don’t really clear it up for me though.  I’ve been staring at it for quite a while now and can’t really seem to grasp the idea. Could we go over that again in class? Or do you know one clear example that will make me see the light here?

 - I am still having trouble getting my request to the Sunlight Congress API to return any results. I know we looked at @yeehaa's page that queried the Marvel API, but I still cannot figure out why my code doesn't work. I think this is because I am still not entirely sure what all the parts of the code are exactly supposed to do. Maybe if other people are having the same problem, it would be helpful for you to go over this with us in class on Tuesday.

Clearly it would be helpful to go over this again, so let's do that.

[plink plunk](http://plnkr.co/edit/SyomBNhQXYm0NMrrUxTl?p=preview)

Big surprise though, it doesn't work. Instead:

[git gud](https://github.com/C-F-K/ast2015apitest)

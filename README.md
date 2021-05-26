# Comm{unity}
_A project by [Jatin Puri](https://github.com/jatin-puri-coder), [Caleb Ion](https://github.com/Calebhino), [Ysabel Guiang](https://github.com/ysabel-guiang) and [Dainy Masangkay](https://github.com/dainyleen)_

## The Idea
As a part of our final group project we each has a minute to pitch any amount of ideas to the class. Each of us then ranked our top 3 projects we'd like to work on and the facilitators gathered us into teams. Jatin pitched what was then called Integrate, a one stop shop for refugees, immigrants or really anyone to find information about anything they might need to know about their region. It was positioned to help people climatize to their new region and find people of similar backgrounds and experiences in their new home.

## What we achieved
[Checkout a video demo](https://www.youtube.com/watch?v=u29dJTMzJ9M&ab_channel=CalebIon)


## The Journey
We realised very early on that this projects scope was going to be huge. Because of this we made conscious decisions to prioritise features of tested code. We ran into difficulties along the way, but for the most part we managed to push a substantial number of features that we had initial planned, of which we are incredibly proud.

### Our learnings

#### [Caleb](https://github.com/Calebhino)'s experience
At the beginning we spent a whole day planning our databases structure, wireframing and generally planning most of our project. Unfortunately there was still more we could have planned. After diving in and getting a bulk of database functions and api routes done I quickly realised we'd made some architectural design choices that were less than sub par. I ended up spending another few hours refactoring and rewriting a bunch of our API routes so they made more sense. This taught me take a step back when I'm ready to dive straight in, and think about how we can do a bit more work now that will save us time later on.

One of the biggest challenges I faced was touching AWS for the first time. It was a learning objective of mine to have an uploading image feature built in. I successfully managed to implement this using an AWS S3 bucket with the AWS sdk and multer. Touching something i'd never touched before touched upon a lesson that I'd learnt over and over again at Dev Academy. It taught me how to tackle the unknown, and how the appearance of its difficulty becomes much smaller once you get stuck in and try. 
![Gif of uploading image](https://i.imgur.com/ldET7AY.gif)

#### [Jatin](https://github.com/jatin-puri-coder)'s experience


#### [Ysabel](https://github.com/ysabel-guiang)'s experience
I spent most of my time working on adding Authorisation and Authentication. We wanted users to be able to create and account and login. If a user was logged in, they would be able to access the "What's happening" section of our website and interact with different groups. In order to implement this, I had to user Passport.js in our middleware to authenticate users.

I also spent some time in allowing users to save and unsave posts. Their saved posts could then be accessed through their account page. 

#### [Dainy](https://github.com/dainyleen)'s experience

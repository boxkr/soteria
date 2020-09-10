# Soteria
View the whole project on [Devpost!](https://devpost.com/software/soteria-r5lbum)
> Won third overall at HowdyHack2020!
> Also won 1st overall in the beginner category!


## Inspiration
Phishing is a huge problem among both companies and individuals. Soteria steps in to try and remedy this problem for the individual by utilizing a machine learning model to predict potential scams.

## What it does
Soteria is an add-on for Microsoft Outlook that scans received emails, and makes a prediction of whether or not links are scams with the help of a deep learning algorithm.

## How we built it
Soteria's front-end is built in JavaScript, utilizing the Microsoft office framework to allow for seamless integration into the platform, and cross-platform capability. We used python to create the deep learning model, and the API that allowed it to communicate with the front-end.

##How it works
First, we scan an email's body section, and parse out any URL strings. Then using the API we built we send those strings over to the deep learning model which makes an evaluation of a link's legitimacy. The model is trained on a data set consisting of features extracted from the URL that are passed to a neural network that learns to predict whether or not it's a phishing link. The model then sends it's prediction back to the front-end for processing via the same API.

## Challenges we ran into
We ran into a few front-end problems regarding mainly the API CORS policy dealing with API protocol, however the main issue we ran into is the fact that Heroku, the site we were hosting our API on, could not handle the size of our model dependencies.

## Accomplishments that we're proud of
We managed to create a fully and practically functional deep learning model with around 92% accuracy, which of course isn't SOTA, but considering the large gap between a dataset's features and implementing the extraction of those for your own model, we got impressive performance that highlights the potential for AI in our solution.

## What we learned
-We learned how to go from deep learning theory to a full implementation and then a full connection with an API for the practical application of the model. We also learned how to manage APIs and API protocols, an important skill for future projects. In addition to all of this, we learned how to approach a broad problem set, design a solution to a particular part of it and then break that problem up into many smaller parts. There's a lot of teamwork and communication involved in getting these smaller tasks to work together and tackle the continuous challenges faced by each member of the team that was a really valuable experience.


## What's next for Soteria
Obviously we aren't satisfied by how it turned out as a whole, but the individual pieces are very good. All we have to do now is find an effective deployment method for the model and we'll have an impressive application. As for new features we were thinking of a central database to track phishing attacks as they happen in the scope of a company, and to help out people who may not have the add-on. Additionally we were thinking of creating software that would utilize GPT-2 to generate phishing emails to find the holes in your company's security and address it.


# SeeFood: Hack Western 5 Project

## Link To Devpost:
https://devpost.com/software/seefood-7obsd4
- Screenshots can be found on the Devpost

## Inspiration
When you order food online, a lot of the times you are scared or hesitant to step out of your comfort zone; whether it is because you don't want to regret a purchase, or you do not remember the name of an exotic dish, SeeFood is there for your assurance and satisfaction.

## What it does
Our app scans a QR code, which transfers menu data from a restaurant website to our mobile app. Users can then select dishes to view in AR and easily make purchases from a single hand held service. We notify the customer of their order process through SMS, as well as provide a slack bot to suggest food sites that they can scan with the app when they get hungry. Data is shown visibly beside AR food in the app, displaying the names of the dish as well as the ratings. This is a visual way to ensure customers get the best food delivery experience possible, combining convenience with satisfaction.

## How we built it
We created a back end to handle server requests using Node and Express. We communicated between the mobile app through the back end, which handled requests, as well as making a mock up website where we got our menu items from. We used the SMS api provided by STDLIB to simulate a notifier that lets the user know the stages of their food delivery. We used Unity and Vuforia to create our AR portion of the app, where we use a target image as an anchor for the AR virtual space. In addition, we also created a slack bot using the STDLIB api to help users find potential restaurants to use our app on and order from, in case they get hungry.

## Challenges we ran into
We had a lot of trouble setting up the connection between our App and our backend server. We were using Unity Web Service requests, and couldn't seem to post data properly for a long time. Eventually, we debugged the problem, and pushed on with our project.

A non technical challenge that we ran into was the lack of free food assets. We had to settle for low poly models; however, replacing the assets in our demo with high res and high poly ones would just be a matter of finding an artist to work with.

## Accomplishments that we're proud of
We created multiple platforms to integrate with our application. We created a functional back end and front end website, as well as a fully functional app meeting all of the specifications that we had planned at the start of the hackathon. In addition to these milestones, we decided to use the STDLIB api to our advantage to further improve the user experience 


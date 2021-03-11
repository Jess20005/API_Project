
# Project 1 Description

Team 4 chose to create a site that utilizes the NASA picture of the day as a background and also shows a joke of the day. When a user arrives at the site they will see the joke of the day with the NASA image in the background. The user can then scroll down to see the title and description of the NASA image. Users can then select to see another joke by clicking on the "See Another Joke" button.  When the user views a joke it optionally posts the joke to our Slack channel. It limits each user to three times; which will be tracked in local storage. (See below for further information on Slack Integration.) The user can also choose to see NASA images from a different day by selecting a data from the calander date picker.

## User Story

```AS A user
I WANT TO lift my spirits with a fun random joke, and view the astronomy image of the day
SO THAT I may lighten my mood during this pandemic.
```
## Link to Site
https://jess20005.github.io/API_Project/

## Site Usage/Screenshots

```
GIVEN a site showing the NASA pic of the day.
WHEN I enter the site 
THEN I am presented with a joke.
WHEN I click on the "See Another Joke" button.
THEN I am presented with a different joke.
WHEN I scroll down the page.
THEN I am able to view a title and description of the image.
WHEN I want to see more NASA pictures from other dates.
THEN I am presented with a calendar where I can choose the date I would like to view.
```
Screenshot of main screen: (./assets/APIScreenshot1.png)

Screenshot of Image Description and Date Picker: (./assets/APIScreenshot2.png)

# Slack Integration
This application posts jokes to a private slack channel for the Project 1 Team 4 group.

An interesting issue was discovered during the testing of this integration:

The method we are using to post messages to slack is via a simple webhook URL.  This approach is insecure, as anyone armed with the webhook URL can post messages into our Slack channel.

Slack has a policy of invalidaing any webhooks that they discover "in the wild" / "in the clear".   Pushing our project code to a public repo at github was detected by Slack's automated security system, and the slack webhook was unvalidated (deleted.)

### Invalidated webhook email notification from Slack

![Email from slack about invalided webhook](./assets/img/screen01.png)

We opened a technical support case with SLACK, and they suggested that since this was a small testing acedemic exercise that we might consdier deploying through a URL forwarded:

![technical support interaction with SLACK](./assets/img/screen02.png)

After exploring a couple of options, including the one suggested by Slack technical support, we've elected for this exercise to use the WORKFLOW feature at pipedream.com.

Pipedream masks the Slack webhook from public view, preventing Slack's automated security system from invalidating the webhook.  Pipedream also offers us mulitple ways to temporary disable the slack posting (1) (2), and also offers a logging capability to help with troubleshooting.  The free account will executie 100,000 monthly invocations.

![pipedream setup screen](./assets/img/screen03.png)

So - our applicaiton calls the pipedream webhook, which in turn passes the call through to Slack.

### Technical Requirements: 

This site is interactive,intuitive and easy to navigate.

This site is responsive.

This site uses 2 server-side API's.

This site does not use alerts, confirms, or prompts.

This site is built using Bulma, a CSS Framework that is not Bootstrap.

This site also utilizes client-side local storage.

## Link to Site

You can view the link to our site here:
https://jess20005.github.io/API_Project/

## GitHub Repository

You can view the link to our GitHub repository here: 
https://github.com/Jess20005/API_Project.git
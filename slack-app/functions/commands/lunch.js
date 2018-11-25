const lib = require('lib')({token: process.env.STDLIB_TOKEN});
/**
* /hello
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  callback(null, {
    "text": "Looking for lunch suggestions? \n_Super Foods_ is one of the top rated restaurants in your area. \nWant to see what the food looks like before you buy?",
    "attachments": [
        {
            "color": "#36a64f",
            "title": "Super Foods is highly recomended for you!",
            "title_link": "https://stormy-wildwood-57759.herokuapp.com/",
            "text": "Scan this QR code with the SeeFoods app!",
            "image_url": "https://chart.googleapis.com/chart?cht=qr&chl=seefood%0A&chs=180x180&choe=UTF-8&chld=L%7C2"
        }
    ],
	"mrkdwn": true
  });
};
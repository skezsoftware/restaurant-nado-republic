const client = require("@mailchimp/mailchimp_marketing");
require('dotenv').config();

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const run = async () => {
  try {
    const response = await client.ping.get();
    console.log("Mailchimp API Response:", response);
  } catch (error) {
    console.error(`Error pinging Mailchimp: ${error.status} - ${error.response.text}`);
  }
};

run();



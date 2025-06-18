const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AThVL7HU-DqHmnn6uA0X_Y0oeaEucqe04s7Y6djCxYeln1m_5pGVWh4qjZmJ404pUCaxZvmFsp0rdcvH",
  client_secret: "EKV9qSHGzK2CPs3vWNwLjP_7W7S1Y6KWJmPj1HleqWtwgV1P5WYQ3fHJVzAT1msQzFjEpejC3ypmBoJ2",
});

module.exports = paypal;

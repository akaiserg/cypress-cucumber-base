import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I make a GET request to {string}", (url) => {
  cy.request(url).as("response");
});

Then("the response status should be {int}", (statusCode) => {
  cy.get("@response").its("status").should("eq", statusCode);
});

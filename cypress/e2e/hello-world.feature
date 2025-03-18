Feature: Hello World API Test

  Scenario: Call the Postman Echo API
    Given I make a GET request to "https://postman-echo.com/get"
    Then the response status should be 200

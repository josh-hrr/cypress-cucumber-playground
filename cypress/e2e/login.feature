Feature: Login Feature  

    Feature This feature is required to test login and sign up
    Scenario: Success account 'Sign Up' and 'Delete account'
    Given A user opening the homepage
    When A user opens the Sign up or Login page
    When A user goes to the New User Sign Up!
    When A user enters the Name and Email Address
    When A user clicks on the Signup button
    When A user enters the sign up required information
    Then A user must have the account created and will be logged in with correct user name, at the end the account should be deleted.


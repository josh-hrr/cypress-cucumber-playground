import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//comment added to test git

let myName = "JosueHtestOne";
let email = `${myName}@test.com`
let myLastName = "HTest";  
let password = myName.split('').reverse().join(''); 
let company = "TestCompany";
let address = "Guatemala";
let zipcode = "000111";
let mobileNumber = "50244441111"; 

Given("A user opening the homepage", () => {
    cy.visit("https://automationexercise.com/"); 
})

When("A user opens the Sign up or Login page", () => {
    cy.get(".navbar-nav li a[href='/login']").click();
})

When("A user goes to the New User Sign Up!", () => {
    cy.get(".signup-form").should("contain", "New User Signup!");
})

When("A user enters the Name and Email Address", () => {
    cy.get("input[data-qa='signup-name']").type(myName);
    cy.get("input[data-qa='signup-email']").type(email); 
}) 

When("A user clicks on the Signup button", () => {
    cy.get("button[data-qa='signup-button']").click();
}) 

When("A user enters the sign up required information", () => {
    cy.get(".clearfix .radio").should("be.visible");
    cy.get(".clearfix .radio").should("have.length", 2);
    cy.get(".clearfix .radio").find("#id_gender1").check();
    cy.get(".form-group").should("have.length", 15);
    cy.get("#name").should("have.value", myName);
    cy.get("#email").should("have.value", email);
    cy.get("#password").type(password);
    cy.get(".form-group select").should("have.length", 4);
    cy.get("#days").select("9");
    cy.get("#months").select("December");
    cy.get("#years").select("1996");
    cy.get(".checkbox input[type='checkbox']").should("have.length", 2); 
    cy.get(".checkbox input[type='checkbox']").check();
    cy.get(".checkbox input[type='checkbox']").uncheck();
    cy.get(".checkbox input[type='checkbox']").check();
    cy.get("#first_name").type(myName);
    cy.get("#last_name").type(myLastName);
    cy.get("#company").type(company);
    cy.get("#address1").type(address);
    cy.get("#country").select("United States");
    cy.get("#state").type("California");
    cy.get("#city").type("California City");
    cy.get("#zipcode").type(zipcode);
    cy.get("#mobile_number").type(mobileNumber);
}) 


Then("A user must have the account created and will be logged in with correct user name, at the end the account should be deleted.", () => {
    cy.get("button[data-qa='create-account']").click(); 
    cy.get("h2 b").should("contain", "Account Created!");
    cy.get("a[data-qa='continue-button']").click();
    cy.get(".navbar-nav").should("contain", `Logged in as ${myName}`);
    cy.get(".navbar-nav li a[href='/delete_account']").click();
    cy.get("h2[data-qa='account-deleted']").should("contain", "Account Deleted!");
}) 


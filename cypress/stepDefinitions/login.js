

import {Given, Then} from "@badeball/cypress-cucumber-preprocessor";
import loginObject from "../pageObject";

const vb = new loginObject()

Given("I navigate to automation exercise website", () => {
cy.visit("https://google.com/");
})

Then ("click on search", ()=>{
   // cy.get('.gLFyf').type("todaynew");

   vb.inputva().type("todaynew");
});



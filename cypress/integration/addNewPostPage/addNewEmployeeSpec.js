/* eslint-disable no-undef */
/// <reference types="cypress" />

const { pageModel } = require("./model");

describe('Add a new employee', () => {
    beforeEach(() => {
      cy.intercept("POST", "https://apigw-beta.workmotion.com/candidates/applications").as("sendApplication");
      cy.visit('/login');
    });
  
    it('[TC001] Should add new employee successfully', () => {
      pageModel.actions.typeLoginDetails();
      pageModel.actions.clickLogin();

      pageModel.actions.clickAddEmployee();
      pageModel.actions.clickCreateNew();

      pageModel.actions.clickSelectCountry();
      pageModel.actions.clickSelectEgypt();
      cy.wait("@sendApplication");
      pageModel.actions.clickGetStarted();

      pageModel.actions.FillEmployeeDetails();

    });
  });

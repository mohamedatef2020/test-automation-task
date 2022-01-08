/* eslint-disable no-undef */
/// <reference types="cypress" />

const { pageModel } = require("./model");

describe('Add a new employee', () => {
    beforeEach(() => {
      cy.intercept("POST", "https://apigw-beta.workmotion.com/candidates/applications").as("sendApplication");
      cy.intercept("GET", "https://apigw-beta.workmotion.com/action-items?direction**").as("loadNextPage");

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
      pageModel.actions.scrollDown();
      pageModel.actions.clickContinue();

      pageModel.actions.scrollDown();
      pageModel.actions.clickContinue();
      
      pageModel.actions.enterSalary();
      pageModel.actions.scrollDown();
      pageModel.actions.clickContinue();

      pageModel.actions.enterEmployeeEmail();      
      pageModel.actions.clickContinue();

      pageModel.actions.scrollDown();
      pageModel.actions.clickConfirm();
      pageModel.actions.clickFinish();

      pageModel.actions.clickActionItems();
      cy.wait("@loadNextPage");

      pageModel.actions.clickMarkAsDone();
      pageModel.actions.navigateToNextPage();
      cy.wait("@loadNextPage");

      pageModel.assertions.assertConfirmationMessage();
      pageModel.assertions.assertDone();

    });
  });

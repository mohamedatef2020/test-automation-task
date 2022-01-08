/* eslint-disable no-undef */

const loginData = require("../../testData.js/login");
const employeeData = require("../../testData.js/employee");

const pageModel = {
    selectors: {
        emailTxtBox: "#email",
        passwordTxtBox: "#password",
        loginBtn: ".sc-eCImPb",
        addEmployeeBtn: "[data-testid='add-employee-menu']",
        createNewBtn: "[data-testid='create-new-item']",
        selectCountry: ".css-1l7i409",
        selectEgypt: ".css-26l3qy-menu",
        getStartedBtn: "#onboarding-get-started-btn",
        firstNameTxtBox: '//input[@placeholder="Talent\'s first name"]',
        lastNameTxtBox: '//input[@placeholder="Talent\'s last name"]',
        jobTitleTxtBox: "//input[@placeholder='e.g. UI/UX Designer']",
        eligibilityYesBtn: "(//p[contains(@class, 'sc-gWXbKe')])[1]",
        executiveYesBtn: "(//p[contains(@class, 'sc-gWXbKe')])[3]",
        jobDescriptionTxtBox: "//p[contains(@class, 'sc-cidDSM')]",
        fullTimeBtn: "(//p[contains(@class, 'sc-gWXbKe')])[5]",
        calender: '//input[@placeholder="DD-MM-YYYY"]',
        JanuaryTenth: "//div[@aria-label='Choose Tuesday, January 11th, 2022']",
    },

    actions: {
        typeLoginDetails: ()=> {
            cy.get(pageModel.selectors.emailTxtBox).type(loginData.email);
            cy.get(pageModel.selectors.passwordTxtBox).type(loginData.password);
        },
        clickLogin: () => cy.get(pageModel.selectors.loginBtn).click(),
        clickAddEmployee: () => cy.get(pageModel.selectors.addEmployeeBtn).click(),
        clickCreateNew: () => cy.get(pageModel.selectors.createNewBtn).click(),
        clickSelectCountry: () => cy.get(pageModel.selectors.selectCountry).click().type("Egypt").wait(2000),
        clickSelectEgypt: () => cy.get(pageModel.selectors.selectEgypt).type("{enter}"),
        clickGetStarted: () => cy.get(pageModel.selectors.getStartedBtn).click(),
        FillEmployeeDetails: () => {
            cy.xpath(pageModel.selectors.firstNameTxtBox).type(employeeData.firstName);
            cy.xpath(pageModel.selectors.lastNameTxtBox).type(employeeData.lastName);
            cy.xpath(pageModel.selectors.jobTitleTxtBox).type(employeeData.jobTitle);
            cy.xpath(pageModel.selectors.eligibilityYesBtn).click();
            cy.xpath(pageModel.selectors.executiveYesBtn).click();
            cy.xpath(pageModel.selectors.jobTitleTxtBox).type(employeeData.jobDescription);
            cy.xpath(pageModel.selectors.fullTimeBtn).click();
            cy.xpath(pageModel.selectors.calender).click();
            cy.xpath(pageModel.selectors.JanuaryTenth).click();

        },

    },

    assertions: {
    },
};

module.exports = {
    pageModel,
}
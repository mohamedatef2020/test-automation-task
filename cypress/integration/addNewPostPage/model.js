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
        jobDescriptionTxtBox: "//textarea[@rows='4']",
        fullTimeBtn: "(//p[contains(@class, 'sc-gWXbKe')])[5]",
        calender: '//input[@placeholder="DD-MM-YYYY"]',
        JanuaryTenth: "//div[@aria-label='Choose Tuesday, January 25th, 2022']",
        continueBtn: "#onboarding-continue-btn",
        baseSalaryTxtBox: "//input[@placeholder='e.g. 4000']",
        employeeEmailTxtBox: "//input[@placeholder='example@email.com']",
        confirmCheckBox: ".sc-hGPBjI",
        finishBtn: "#onboarding-finish-btn",
        actionItems: "#sidebar-action-items-link > .sc-hUpaCq > .sc-gSQFLo",
        firstMarkAsDoneBtn: "(//button[@id='action-items-mark-done-btn'])[1]",
        nextPageBtn: ".rc-pagination-item-2 > a",
        confirmationMessage: 'section[data-is-completed="true"] > [style="max-width: 75%;"] > .sc-bjeSbO > [style="max-width: 500px; overflow-wrap: break-word;"]',
        DoneLabel: "(//span[@data-is-completed='true'])[1]",
    },

    actions: {
        typeLoginDetails: ()=> {
            cy.get(pageModel.selectors.emailTxtBox).type(loginData.email);
            cy.get(pageModel.selectors.passwordTxtBox).type(loginData.password);
        },
        clickLogin: () => cy.get(pageModel.selectors.loginBtn).click(),
        clickAddEmployee: () => cy.get(pageModel.selectors.addEmployeeBtn).click(),
        clickCreateNew: () => cy.get(pageModel.selectors.createNewBtn).click(),
        clickSelectCountry: () => cy.get(pageModel.selectors.selectCountry)
            .click().type(employeeData.country).wait(2000),
        clickSelectEgypt: () => cy.get(pageModel.selectors.selectEgypt).type("{enter}"),
        clickGetStarted: () => cy.get(pageModel.selectors.getStartedBtn).click(),
        FillEmployeeDetails: () => {
            cy.xpath(pageModel.selectors.firstNameTxtBox).type(employeeData.firstName);
            cy.xpath(pageModel.selectors.lastNameTxtBox).type(employeeData.lastName);
            cy.xpath(pageModel.selectors.jobTitleTxtBox).type(employeeData.jobTitle);
            cy.xpath(pageModel.selectors.eligibilityYesBtn).click();
            cy.xpath(pageModel.selectors.executiveYesBtn).click();
            cy.xpath(pageModel.selectors.jobDescriptionTxtBox).type(employeeData.jobDescription);
            cy.xpath(pageModel.selectors.fullTimeBtn).click();
            cy.xpath(pageModel.selectors.calender).click();
            cy.xpath(pageModel.selectors.JanuaryTenth).click();
        },
        enterSalary: () => cy.xpath(pageModel.selectors.baseSalaryTxtBox).type(employeeData.salary),
        clickContinue: () => cy.get(pageModel.selectors.continueBtn).click().wait(2000),
        scrollDown: () => cy.window().scrollTo("bottom", {ensureScrollable: false}),
        enterEmployeeEmail: () => cy.xpath(pageModel.selectors.employeeEmailTxtBox).type(employeeData.email),
        clickConfirm: () => cy.get(pageModel.selectors.confirmCheckBox).click(),
        clickFinish: () => cy.get(pageModel.selectors.finishBtn).click(),
        clickActionItems: () => cy.get(pageModel.selectors.actionItems).click().wait(5000),
        clickMarkAsDone: () => cy.xpath(pageModel.selectors.firstMarkAsDoneBtn).click().wait(5000),
    },

    assertions: {
        assertConfirmationMessage: () => cy.get(pageModel.selectors.confirmationMessage).should('be.visible'),
        assertDone: () => cy.xpath(pageModel.selectors.DoneLabel).should('be.visible'),
    },
};

module.exports = {
    pageModel,
}
Feature: 21vek Home page

    Background: 
        Given the User opens "Home" page

    @verify-tab-title
    Scenario: Verify tab title for "Home" page
        Then tab title is "Онлайн-гипермаркет 21vek.by"
        
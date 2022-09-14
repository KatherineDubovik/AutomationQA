Feature: 21vek Mobile Page 

    Background: 
        Given the User opens "Mobile" page

    @verify-default-sorting
    Scenario: Verify sort parameter selected by default
        Then popular is sort parameter selected by default

    @sort-items
    Scenario Outline: Sort items by sort parameters
        When the User clicks on specific <SortParameter> sort parameter
        Then the User sees that <SortParameter> sort parameter is displayed as active

        Examples:
            | SortParameter |
            | цене          |
            | популярности  |
            | скидке        |

    @random-pagination-page
    Scenario: Follow random pagination page by clicking on page number
        When the User scrolls to the paginator
        And the User clicks on random page number
        Then selected page number is active
    
    @previous-pagination-page
    Scenario: Follow previous pagination page by clicking on prev arrow at paginator
        When the User scrolls to the paginator
        And the User clicks on random page number
        And the User clicks on prev arrow at paginator
        Then the User is switched to the previous pagination page 

    @next-pagination-page
    Scenario: Follow next pagination page by clicking on next arrow at paginator
        When the User scrolls to the paginator
        And the User clicks on random page number
        And the User clicks on next arrow at paginator
        Then the User is switched to the next pagination page 

    @navigation
    Scenario: Navigate to the top of the page by clicking on Up button
        When the User clicks on Up button
        Then the User is moved to the top of the page 

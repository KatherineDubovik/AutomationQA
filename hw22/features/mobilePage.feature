Feature: 21vek Mobile Page 

    Background: 
        Given the User opens "Mobile" page

    @sortItems
    Scenario: Verify sort parameter selected by default
        Then popular is sort parameter selected by default

    Scenario Outline: Sort items by sort parameters
        When the User clicks on specific <SortParameter> sort parameter
        Then the User sees that <SortParameter> sort parameter is displayed as active

        Examples:
            | SortParameter |
            | цене          |
            | популярности  |
            | скидке        |

    @pagination
    Scenario: Follow specific pagination page by clicking on page number
        When the User scrolls to the paginator
        And the User clicks on specific page number
        Then selected page number is active
    
    Scenario: Follow previous pagination page by clicking on left arrow at paginator
        When the User scrolls to the paginator
        And the User clicks on specific page number
        And the User clicks on left arrow at paginator
        Then the User switched to previous pagination page 

    Scenario: Follow next pagination page by clicking on right arrow at paginator
        When the User scrolls to the paginator
        And the User clicks on specific page number
        And clicks on right arrow at paginator
        Then the User switches to the next pagination page 
        
    @navigation
    Scenario: Navigate to the top of the page by clicking on Up button
        When the User clicks on Up button
        Then the User is moved to the top of the page 

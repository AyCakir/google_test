Feature: google test

  Scenario Outline: As a user, I'm able to search in the google page

    Given I navigate to google page
    Then I see the title is "Google"
    When I type <SearchItem> in input box 
    #When  I click on search button  
    When Click on the first search result
    #Then I should get <title>

     Examples:
     | SearchItem         |   title                             | 
     | aws                |  Amazon.com                            |
     | aptitudeglobal     |  Aptitude Global                        | 

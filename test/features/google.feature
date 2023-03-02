Feature: google test

  Scenario Outline: As a user, I'm able to search in the google page

    Given I navigate to google page
    Then I see the title is "Google"
    When I type <keyword> in input box 
    When  I click on search button  
    Then I should get <title>

     Examples:
     | keyword  |   title                    | 
     | aws      |  Amazon.com        |
    # | aptitude |                       | 

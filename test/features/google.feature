Feature: google test

  Scenario Outline: As a user, I'm able to search in the google page

    Given I navigate to google page
    Then I see the title is "Google"
    When I type <keyword> in input box 
    #And  I click on search button  
    # Then I should get <url>

     Examples:
     | keyword  |   url                    | 
     | aws      |  https://aws.amazon.com/ |
    # | aptitude |                       | 

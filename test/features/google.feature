Feature: google page test

Background: Navigate to Google page

   Given I navigate to google page

   @Gmail
   Scenario: Gmail module should be displayed on the right-hand side

    #Given I navigate to google page
    Then I see the Gmail module on the right-hand side of the page

   @Image
   Scenario: Image module should be displayed on the right-hand side

   #Given I navigate to google page
    Then I see the Image module on the right-hand side of the page


   @SignIn


 #Scenario Outline: As a user,I'm able to sign in successfully

  # #Given I navigate to google page
  # When I click the "Sign In" button
  # When I enter my <emailAddress> and <password> click "Next"
  # Then I see the title is "Google"


#  Examples:
#      | emailAddress                 |  password                               | 
#      | ayse@aptitudeglobal.com      |                                         |


  Scenario: Privacy, Terms, and Settings links are present on the google page

   # Given I navigate to google page
    Then I should see the following links on the right-hand side bottom of the page

        | Privacy  |
        | Terms    |
        | Settings |

   
   
   Scenario Outline: As a user, I'm able to search in the google page

   # Given I navigate to google page
    Then I see the title is "Google"
    When I type <SearchItem> in input box      
    And Click on the first search result
    Then I should get <ExpectedURL>

     Examples:
     | SearchItem          |   ExpectedURL                           | 
     | aws                 | https://aws.amazon.com/                 |
     | aptitude global     | https://www.aptitudeglobal.com/         | 

  


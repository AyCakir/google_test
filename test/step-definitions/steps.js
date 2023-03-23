const { Given, When, Then, Before } = require('@wdio/cucumber-framework');
//const assert = require('assert');
//const pages = {
   // login: LoginPage
//}


Given(/^I navigate to google page$/, async () => {

     await browser.url('https://www.google.com')
     await browser.maximizeWindow()
     await browser.pause(3000)

     const poup = await $('#L2AGLb')
     if(await poup.isDisplayed()){
     await poup.click();}
      
});



Then(/^I see the title is "Google"$/, async ()=>{
    await browser.pause(5000);
    const actualTitle =  await browser.getTitle();
    console.log(actualTitle);
   
    const expectedTitle = "Google";
    await expect(browser).toHaveTitleContaining(expectedTitle);

});




Then (/^I see the Gmail module on the right-hand side of the page$/, async() => {

    await browser.pause(3000);
    const gmailLink = await $('a[href="https://mail.google.com/mail/&ogbl"]');
 
    await expect(gmailLink).toBePresent();

    });



    Then (/^I see the Image module on the right-hand side of the page$/, async() => {

        await browser.pause(3000);
        const imageModl = await $('//a[@href="https://www.google.es/imghp?hl=en&ogbl"]');
        
        await expect(imageModl).toBePresent();
    
          
        });




    Then (/^I see google apps are exist$/, async () => {

        await browser.pause(3000);
        const appsButton = await $('#gbwa');
   
        await expect(appsButton).toBePresent();

   
   });




   When(/^I click the "Sign In" button$/, async () => {
  await $('#gb_70').click();
});


   When(/^I enter my <emailAddress> and <password> click "Next"$/, async (mail,passwrd) => {
  await $('#identifierId').setValue(mail);
  await $('#identifierNext').click();
  await $('#password input[type="password"]').setValue(passwrd);
  await $('#passwordNext').click();
});


Then(/^I should see the following links on the right-hand side bottom of the page$/, async (dataTable) => {
    const links =  await dataTable.rawTable.map((row) => row[0].trim());
    const actualLinks = await $$('div[role="navigation"] a').map((link) => link.getText().trim());
    expect(actualLinks).toEqual(links);
});




When(/^I type ([\w ./:]+) in input box$/, async (text) => {
    await browser.pause(10000);
    const input = await $('input[name="q"]');
    await input.setValue(text);
    await browser.keys("Enter");
    await browser.pause(3000);

});




When(/^Click on the first search result$/, async () => {
    const ele = await $("//div[@id='search']//div[@class='g']//a[@href]"
    )
    console.log(ele.text)
    ele.click();

})

/*

When (/^I click on search button$/, async() => {
      
const searchbtn = await $('.UUbT9 input[name="btnK"]');
await searchbtn.waitForClickable({ timeout: 10000 });
 await searchbtn.click();
 await browser.pause(5000);

})
*/

Then(/^I should get ([\w ./:]+)$/, async (expectedUrl) => {
 
  await browser.pause(4000);
  const actualUrl = await browser.getUrl();
  console.log(actualUrl); 

  await browser.pause(5000);

  await expect(browser).toHaveUrlContaining(expectedUrl);
  
});



const { Given, When, Then, Before } = require('@wdio/cucumber-framework');
const assert = require('assert');
//const assert = require('assert');
//const pages = {
   // login: LoginPage
//}


Given(/^I navigate to google page$/, async () => {

     await browser.url('https://www.google.com')
     await browser.maximizeWindow()
    // await browser.pause(3000)

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
   Then (/^I'm able to click on the "Sign In" button$/, async () => {

    await browser.pause(3000);
   // const SignInBtn = await $('//img[@class="gb_ie"]');
    const signInButton = $('a[href*="accounts.google.com"]');
    signInButton.waitForExist();
    expect(signInButton).toBePresent;


});
Then(/^I see the "I'm Feeling Lucky" button$/, async () => {
    const luckyBtn = await $('input[name="btnI"]');
    assert(luckyBtn.isDisplayed(), 'Expected "I\'m Feeling Lucky" button to be displayed');
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
   
    const linksOfRight =  await dataTable.rawTable.map((row) => row[0].trim());
    const actualLinks = await $$('.iTjxkf a.pHiOh').map((link) => link.getText());
    //await browser.debug();
    console.log('..........',actualLinks);
     expect(actualLinks).toEqual(linksOfRight);
    
});


Then (/^I should see Settings is displayed$/, async () => {
    const setting = await $('//*[@jsname="LgbsSe"]');
    await expect(setting).isDisplayed;
})



When(/^I verify the following links on the Google page$/, async (data) => {
    const links = data.rawTable;

    for (let i = 1; i < links.length; i++) {
        const linkText = links[i][0];
        const linkSelector = `//*[@class="KxwPGc AghGtd"]`;
        const link = await $(linkSelector);
        const href = await link.getAttribute('href');
        console.log(href);
        

    }


});

When(/^I type ([\w ./:]+) in input box$/, async (text) => {
    await browser.pause(10000);
    const input = await $('input[name="q"]');
    await input.setValue(text);
    await browser.keys("Enter");
    await browser.pause(3000);

});




When(/^Click on the first search result$/, async () => {
    const ele = await $("//div[@id='search']//div[@class='g']//a[@href]")
    console.log(ele.text)
    ele.click();

})



Then(/^I should get ([\w ./:]+)$/, async (expectedUrl) => {
 
  await browser.pause(4000);
  const actualUrl = await browser.getUrl();
  console.log(actualUrl); 

  await browser.pause(5000);

  await expect(browser).toHaveUrlContaining(expectedUrl);
  
});



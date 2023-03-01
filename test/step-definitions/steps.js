const { Given, When, Then } = require('@wdio/cucumber-framework');


//const pages = {
   // login: LoginPage
//}

Given(/^I navigate to google page$/, async () => {

     await browser.url('https://google.com')
     await browser.maximizeWindow()
    
});
Then(/^I see the title is "Google"$/, async ()=>{
    await browser.pause(10000);
    const actualTitle =  await browser.getTitle();
    console.log(actualTitle);
   
    const expectedTitle = "Google";
    await expect(browser).toHaveTitleContaining(expectedTitle);

});
/*
When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^ (.*)$/, async () => {
   
});

*/
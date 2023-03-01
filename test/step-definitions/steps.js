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

When(/^I type (\w+) in input box$/, async (text) => {

    const input = await $('input[name="q"]');
    await input.setValue(text);
    await browser.pause(10000);




});

//Then(/^ (.*)$/, async () => {
   

//});

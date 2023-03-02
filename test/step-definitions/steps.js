const { Given, When, Then, } = require('@wdio/cucumber-framework');

//const pages = {
   // login: LoginPage
//}

Given(/^I navigate to google page$/, async () => {

     await browser.url('https://www.google.com')
     await browser.maximizeWindow()
    
});
Then(/^I see the title is "Google"$/, async ()=>{
    await browser.pause(5000);
    const actualTitle =  await browser.getTitle();
    console.log(actualTitle);
   
    const expectedTitle = "Google";
    await expect(browser).toHaveTitleContaining(expectedTitle);


});

When(/^I type (\w+) in input box$/, async (text) => {
    
    const input = await $('input[name="q"]');
    await input.setValue(text);
    await browser.keys("Enter");






});

When(/^Click on the first search result$/, async () => {
    const ele = await $('h3')
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

Then(/^I should get (\w+)$/, async (expectedUrl) => {
  // const elemnt =await $("//span[text()='" + title +"']");
  //await .waitForExist({ timeout: 5000 });

  const url = await browser.getUrl();
  await expect(url).toHaveUrl(expectedUrl);
});


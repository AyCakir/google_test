const { Given, When, Then, Before } = require('@wdio/cucumber-framework');

//const pages = {
   // login: LoginPage
//}


Given(/^I navigate to google page$/, async () => {

     await browser.url('https://www.google.com')
     await browser.maximizeWindow()
    //  await browser.pause(3000)
    //  const poup = await $('#L2AGLb')
    //  if(poup.isDisplayed()){
    //  await poup.click();}

     

    
});
Then(/^I see the title is "Google"$/, async ()=>{
    await browser.pause(5000);
    const actualTitle =  await browser.getTitle();
    console.log(actualTitle);
   
    const expectedTitle = "Google";
    await expect(browser).toHaveTitleContaining(expectedTitle);


});

When(/^I type ([\w ./:]+) in input box$/, async (text) => {
    
    const input = await $('input[name="q"]');
    await input.setValue(text);
    await browser.keys("Enter");






});



When(/^Click on the first search result$/, async () => {
    const ele = await $('#res h3')
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
  // const elemnt =await $("//span[text()='" + title +"']");
  //await .waitForExist({ timeout: 5000 });

  //const url = await browser.getUrl();
  await browser.pause(5000);
  const actualUrl = await browser.getUrl();
  console.log(actualUrl); 

  await browser.pause(10000);

  await expect(browser).toHaveUrlContaining(expectedUrl);
  


  
});


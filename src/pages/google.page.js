/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
 // Page.js
export default class Page {
 

    async open () {
        await browser.url('https://google.com')
    }
}

  /*  class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    // open () {
        
    //     return browser.url('https://google.com')
    //    // return  browser.maximizeWindow()
    // }

   // get inputbox () {
  //      return $('//*[@id="logo"]');
  //  }




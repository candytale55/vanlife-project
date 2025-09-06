

# [NAME OF THE PROJECT]


## Description / Overview / Features


## Live Demo

Check out the live demo []() hosed in Code Pen 

## Status

_Completed_: **[MONTH], 2025**
 
---

## Screenshots

In table format (2 columns x 2 rows or one horizontal line with all of them.)  
|||||
|-|-|-|-|

img/scsh-01.png  -  
img/scsh-02.png	 - 	
img/scsh-03.png  - 
img/scsh-04.png  - 
 
---
## Project Structure

_[COPY PAST IT HERE]_
---

## TODO (When I have the time)

- Task 1  

---

## Notes to Future Self

- Note1

---
## References and Useful Links

_Tutorial:  [Course / Tutorial Name](#), specifically [Project Name](#)._
_Tutorial description if there is one:_

From Scrimba courses and tutorials in [The Frontend Career Path](https://scrimba.com/fullstack-path-c0fullstack)

https://miragejs.com/ - Set a mockup server that intercepts API calls - TO get the Van's info.

Installed mirage following instructions in: https://miragejs.com/docs/getting-started/installation/ 

```bash
npm install --save-dev miragejs
```


Figma file: https://www.figma.com/design/igDA2NiMDhoaIIAqm5EnTq/-VanLife?node-id=0-1&p=f&t=MjesjYzrUfOqT5KE-0

Layout Routes: https://reactrouter.com/6.28.0/start/concepts#layout-routes 

ROute Index: https://reactrouter.com/6.28.0/start/concepts#index-routes 




/**
 * Challenge: set up the BrowserRouter and Routes!
 * Note: nothing will render to the page yet.
 */


/**
 * Challenge:
 * 1. Create an "About" component (just render another h1 that says
 *    "About page" or something more interesting of your choosing).
 * 2. Create a new Route to render the About component when the path
 *    is /about
 */





 /**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

 


 /**
 * Challenge: Create the Vans list page, Route, and Link
 * 
 * 1. Create a Vans component in the "pages" directory. For now,
 *    just render <h1>Vans page goes here 🚐</h1>
 * 2. Create a Route for the Vans page on the /vans route
 * 3. Add a Link in the nav bar to the Vans route
 */



 /**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch("https://api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 * 3. You may get an error saying "console.groupCollapsed is not
 *    a function". You can ignore it for now.
 */


/**
 * Challenge: Wrap the contents of the "van-tile" div in a 
 * Link that sends the user to `/vans/${van-id-here}`.
 */

 

  /**
   * Challenge: set up the code so we can use a layout route!
   * 
   * 1. Create a folder called "components"
   * 2. Create 2 new component files: Layout.jsx and Header.jsx
   * 3. Move the <header> code below to the Header component file. 
   *    (DON'T import that Header component here!)
   */

   /**
 * Challenge:
 * 1. Add a "Host" link to the Navbar that takes you to the "/host" path
 * 2. Create the following components in the pages/Host folder:
 *    a. Dashboard ("/host")
 *    b. Income ("/host/income")
 *    c. Reviews ("/host/reviews")
 *    These components can just have an h1 for now that says, e.g.
 *    "Host Dashboard here".
 * 3. Set up routes for each of these pages in the Routes below. FOR NOW,
 *    don't worry about nesting anything, you can just put them on the same
 *    level as the "/vans", etc. routes below.
 */

* 
          Challenge: 
          1. Turn the "/host" path into a parent route and nest
          "/host/income" and "/host/reviews" as children routes.
          Then try entering "/host/income" in the URL and see what
          happens.
          
          2. See if you can figure out why it did what it did.
          */


    /**
   * Challenge: Make the HostLayout component!
   * The HostLayout should use Links to navigate to the following
   * routes: 
   *    * Dashboard ("/host")
   *    * Income ("/host/income")
   *    * Reviews ("/host/reviews")
   * Then replace the parent "/host" route's element below with the
   * new HostLayout component you made.
   * 
   * NOTE: The dashboard route/page will be gone for now, but don't fret.
   * We'll be fixing that in the next lesson.
   */

   
/**
   * Thought experiment:
   * 
   * Re-write the vans route as a nested route. Because there's no shared
   * UI between /vans and /vans/:id, the parent "vans" route won't have its
   * own `element` prop, just a `path` prop.
   * 
   * Hint: you're not creating a Layout Route (since that's only for
   * shared UI), but you are using another kind of "pathless" route...
   */

   /**
 * Challenge: Add the footer to the site! Make a separate Footer component
 * in the components folder, and just use this as the markup:
 * 
 * <footer>&#169; 2022 #VANLIFE</footer>
 * 
 * I'm mostly wanting to test your ability to find where the footer would
 * be added, and don't care too much about getting the styling correct.
 * But if you feel you need extra CSS practice, feel free to do the styling
 * as well!
 * 
 */
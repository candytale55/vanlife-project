

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

useOutletContext: https://reactrouter.com/api/hooks/useOutletContext 

useSearchParams https://reactrouter.com/api/hooks/useSearchParams
https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

First we added the links to Vans using useSearchParams, then we used the setter function with URLSearchParams
URLSearchParams: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams


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



NAVLINK

     /**
     * Challenge - part 1:
     * Make the main navbar indicate the currently-active route. (You can
     * leave the home link alone, since it's doubling as our logo. Only
     * make changes to the /host, /about, and /vans links)
     * 
     * Use the following CSS rules:
     *      font-weight: bold;
     *      text-decoration: underline;
     *      color: #161616;
     * 
     * You can use either inline styles or a className.
     */

     /**
 * Challenge - part 2:
 * Make the host navbar indicate the currently-active route.
 * 
 * Use the following CSS rules:
 *      font-weight: bold;
 *      text-decoration: underline;
 *      color: #161616;
 * 
 * I'd recommend using an inline style this time.
 * 
 * NOTE: There will be a small bug that we'll fix 
 * after you do the challenge.
 */


  /**
   * Challenge: add the /host/vans and /host/vans/:id routes, as well
   * as the "Vans" link in the Host navbar.
   * 
   * For now, just create the stubbed-out version of the pages (i.e.
   * components that just render an <h1>). Don't worry about adding
   * navigation from /host/vans to /host/vans/:id yet - the link to
   * /host/vans is enough for now.
   * 
   * When deciding whether or not to use nested routes, keep in mind
   * what will/won't be shared between these two pages. See the Figma
   * design file (or the screenshots) to help guide your choice.
   */

   Optional Challenge


    /**
     * Challenge (not optional!): build the shared UI portion of the
     * Host Van Detail page. This is
     * 
     * Optional portion: also style it to look like the design.
     * 
     * For now, get the data from a request to `/api/host/vans/:id`
     * and display the van image, name, price, type
     */

      /**
     * Mini challenge: Try to make it so the "Back to all vans"
     * Link takes people BACK one route.
     * 
     * MAJOR HINT: we just talked about how `cd .` and `cd ..`
     * work in a terminal, and mentioned how `.` represents
     * the current route
     * 
     * MAJOR CAVEAT: it's not going to do what you think it'll
     * do, but we'll learn why and see an easy fix 🤭
     */


     /**
   * Challenge: Add the routes necessary so we can access
   * /host/vans/:id/pricing and /host/vans/:id/photos.
   * 
   * Add stubbed-out components in separate files for
   * these routes (e.g. <h2>Pricing view here</h2>). I already
   * made the `HostVanInfo.jsx`, `HostVanPricing.jsx` and
   * `HostVanPhotos.jsx` files for you, but they're empty.
   * 
   * Don't forget: you'll need to use a special tool from
   * React Router so we can keep the top info (and 
   * eventually the navbar we build) on the page while going
   * from nested route to nested route. This will require some
   * slight changes to HostVanDetail.jsx
   * 
   * Since we don't have the navbar yet, you can test them
   * by manually navigating to e.g. /host/vans/1/pricing.
   */

   /**
 * Challenge: Add the links for the navbar! Check the 
 * Figma design slide to see what the text is.
 * 
 * Make it so the link style changes to more clearly
 * indicate which route we're currently on.
 * 
 * Remember, "Details" leads to /host/vans/:id, not
 * /host/vans/:id/details, so you'll need to employ a
 * trick we recently learned for that to work.
 */


 /**
 * Challenge: check out the docs linked in the slide, and see if you
 * can implement the Outlet Context feature it talks about.
 * 
 * Part of this challenge will require you to (finally) build out those
 * nested components. Again, if you don't need CSS practice, you can
 * skip the styling part, and I'll handle that for you.
 */


Vans
    /**
     * Challenge: access the search params in this component
     * 1. Using the hook from react-router-dom, set a variable
     *    called `searchParams`
     * 2. Save the value of the `type` parameter (from the
     *    `searchParams` object) to a variable called `typeFilter`
     * 3. Log the value of the `typeFilter` to the console
     */
https://reactrouter.com/api/hooks/useSearchParams 
VansDetails
/**
 * Challenge: check out the docs linked in the slide, and see if you
 * can implement the Outlet Context feature it talks about.
 * Just make one Outlet component with two contexts
 */       

    /**
     * Challenge: filter the list of vans based on the `typeFilter`
     * we created earlier. For now, just enter "simple", "luxury",
     * or "rugged" into the search param in the URL to check your work.
     */


    /**
     * Challenge: add links to filter the vans by type. Use a hard-coded
     * `to` string like we just practiced. The types are "simple", 
     * "luxury", and "rugged".
     * 
     * For now, give the Links a className of `van-type simple` (and
     * manually replace "simple" with "luxury" and "rugged" for 
     * the Links that filter by those types.)
     * 
     * Include a Link to clear the filters. Its className should be
     * `van-type clear-filters`
     */

  

     Ref: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

     Example Jedi: 
        <button onClick={() => setSearchParams({type: "jedi"})}>Jedi</button>
        <button onClick={() => setSearchParams({type: "sith"})}>Sith</button>
        <button onClick={() => setSearchParams({})}>Clear</button>

        /**
     * Challenge: change the Links to buttons and use the
     * setSearchParams function to set the search params
     * when the buttons are clicked. Keep all the classNames
     * the same.
     * 
     * Copy of Links: 
               <Link 
                    to="?type=simple"
                    className="van-type simple"
                >Simple</Link>
                <Link 
                    to="?type=luxury"
                    className="van-type luxury"
                >Luxury</Link>
                <Link 
                    to="?type=rugged"
                    className="van-type rugged"
                >Rugged</Link>
                <Link 
                    to="."
                    className="van-type clear-filters"
                >Clear filter</Link>
     * 
     */

     Now: 

     ```jsx
      return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button 
                    onClick={() => setSearchParams({ type: "simple" }) }
                    className = "van-type simple"
                    >Simple</button>
                <button 
                    onClick={() => setSearchParams({ type: "luxury" }) }
                    className = "van-type luxury"
                    >Luxury</button>
                <button 
                    onClick={() => setSearchParams({ type: "rugged" }) }
                    className = "van-type rugged"
                    >Rugged</button>
                <button 
                    onClick={() => setSearchParams({ }) }
                    className = "van-type clear-filters"
                    >Clear</button>
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
     ```


### Link + function 

> To include more search parameters and not just hardcoded type ones (Vanilla JS).

Jedi Example code 

```jsx
  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams)
    if (value === null) {
      sp.delete(key)
    } else {
      sp.set(key, value)
    }
    return `?${sp.toString()}`
  }

  return (
    <main>
      <h2>Home</h2>
      <div>
        <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
        <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
        <Link to={genNewSearchParamString("type", null)}>Clear</Link>
      </div>
      <div>
        <button onClick={() => setSearchParams({ type: "jedi" })}>Jedi</button>
        <button onClick={() => setSearchParams({ type: "sith" })}>Sith</button>
        <button onClick={() => setSearchParams({})}>Clear</button>
      </div>
      <hr />
      {charEls}
    </main>
  );
}

```
Further Down the Rabbit Hole (JEDI)
I'm adding it for reference for next challenge:

```jsx
function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams)
    if (value === null) {
      sp.delete(key)
    } else {
      sp.set(key, value)
    }
    return `?${sp.toString()}`
  }
  
  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  return (
    <main>
      <h2>Home</h2>
      <div>
        <Link to={genNewSearchParamString("type", "jedi")}>Jedi</Link>
        <Link to={genNewSearchParamString("type", "sith")}>Sith</Link>
        <Link to={genNewSearchParamString("type", null)}>Clear</Link>
      </div>
      <div>
        <button onClick={() => handleFilterChange("type", "jedi")}>Jedi</button>
        <button onClick={() => handleFilterChange("type", "sith")}>Sith</button>
        <button onClick={() => handleFilterChange("type", null)}>Clear</button>
      </div>
      <hr />
      {charEls}
    </main>
  );
}
```

    /**
     * Challenges:
     * 1. Conditionally render the "Clear filter" button only if
     *    there's a `type` filter currently applied in the search params
     * 
     * 2. On just the 3 filter buttons (not the Clear filter button),
     *    conditionally render the className "selected" if the
     *    typeFilter value equals the value that button sets it to.
     *    (We don't have a variable for that, so it'll be a hard-coded
     *    string).
     * 
     *    Hint: `...${typeFilter === "simple" ? ...}`
     */


         /**
     * Mini-challenge: change the absolute path in the Link below
     * to a relative path. There's also one still in the HostVans.jsx
     * file that you should change, too.

         const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
    
     */





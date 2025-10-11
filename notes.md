

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

React Router useLocation https://reactrouter.com/api/hooks/useLocation
UseLocation: 
  https://reactrouter.com/api/hooks/useLocation
  https://api.reactrouter.com/v7/functions/react_router.useLocation.html 

  

## Challenges

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


## Link State

React Router useLocation https://reactrouter.com/api/hooks/useLocation

  /**
     * Challenge: modify the Link `to` prop below to send the user
     * back to the previous page with the searchParams included, if
     * they exist. (Remember we may not have anything in that state
     * if there were no filters applied before coming to this
     * van detail page, so make sure to "code defensively" to handle
     * that case.)
     */


VAN DETAIL

HISTORY STATE

```jsx
const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id} state={{ search: searchParams.toString() }}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
```

  `<Link to={van.id} state={{ search: searchParams.toString() }}>` passes the stringified query to the next route

  `console.log(searchParams.toString())` to test it 


UseLocation: 
  https://reactrouter.com/api/hooks/useLocation
  https://api.reactrouter.com/v7/functions/react_router.useLocation.html 

console.log: 
{pathname: '/vans/5', search: '', hash: '', state: {search: 'type=luxury'}, key: 'emy8w7js'}

search would have a query string if there was one. like `search: '?name=bob'` 
state: {search: 'type=luxury'}, == Object that has a search property.

/**
     * Challenge: modify the Link `to` prop below to send the user
     * back to the previous page with the searchParams included, if
     * they exist. (Remember we may not have anything in that state
     * if there were no filters applied before coming to this
     * van detail page, so make sure to "code defensively" to handle
     * that case.)
     */


This is the final solution accepted by Scrimba:

```jsx
export default function VanDetail() {
    const params = useParams()
    const location = useLocation()
    console.log(location)
    
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    /**
     * Challenge: modify the Link `to` prop below to send the user
     * back to the previous page with the searchParams included, if
     * they exist. (Remember we may not have anything in that state
     * if there were no filters applied before coming to this
     * van detail page, so make sure to "code defensively" to handle
     * that case.)
     */
    
    const search = location.state?.search || "";
    
    return (
        <div className="van-detail-container">
            <Link
                to={ `..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}
```


🔥 **Alright — let’s roast this like a senior dev reviewing a junior’s PR (with love).**
You’re clearly on the right track, but let’s dissect it line by line and talk *real-world React* reasoning — not tutorial-level fluff.

---

## 🧠 First Impressions

Your component *works*, but it has:

* Some **potential bugs** and **fragile assumptions**
* A few **React anti-patterns**
* Some **missed best practices** that’ll bite you when scaling (e.g., data fetching, state management, and rendering safety)

Let’s break it down section by section 👇

---

## ⚙️ 1. The Imports (missing and unclear)

You’re using `useParams`, `useLocation`, and `Link`, but didn’t show the imports.
Make sure to import explicitly — otherwise your linter will roast you before I do.

```jsx
import React from "react"
import { useParams, useLocation, Link } from "react-router-dom"
```

**Best practice:**
Always keep imports **ordered** (React, external libs, internal components, styles).
Helps with readability and avoids “mystery variables” for reviewers.

---

## 🧩 2. The `useParams` and `useLocation` usage

```js
const params = useParams()
const location = useLocation()
```

✅ **Good:** Clean, direct use.
⚠️ **But:** You’re relying on `params.id` being stable and valid.
In React Router, `params` can be empty initially on some transitions — so your `useEffect` might trigger a fetch with `undefined`.

**Better:**

```js
const { id } = useParams();
if (!id) return <h2>Invalid van ID</h2>;
```

---

## 🔄 3. The Data Fetching

```js
React.useEffect(() => {
  fetch(`/api/vans/${params.id}`)
    .then(res => res.json())
    .then(data => setVan(data.vans))
}, [params.id])
```

**Roast time:**

* You’re not handling **errors** or **loading states** properly.
* `data.vans` smells wrong — likely should be `data.van` (singular).
  If it’s plural, that’s confusing naming and bad API design.
* Fetch inside a `useEffect` like this is okay for small demos but **not production-grade**.

**Better pattern (modern React 18 way):**

```js
React.useEffect(() => {
  let ignore = false;
  async function loadVan() {
    try {
      const res = await fetch(`/api/vans/${id}`);
      if (!res.ok) throw new Error("Failed to fetch van");
      const data = await res.json();
      if (!ignore) setVan(data.van);
    } catch (err) {
      console.error(err);
    }
  }
  loadVan();
  return () => (ignore = true);
}, [id]);
```

✅ Avoids race conditions if the component unmounts mid-fetch.
✅ Uses `async/await` for clarity.
✅ Handles fetch failures gracefully.

---

## 🧭 4. The Navigation (Link logic)

```js
const search = location.state?.search || "";
<Link to={`..${search}`} relative="path" className="back-button">
  &larr; <span>Back to all vans</span>
</Link>
```

**This is solid defensive coding.**
👏 Nice job on the `location.state?.search || ""`.

**Minor improvement:**
Instead of concatenating blindly, use a utility function to ensure the path is normalized.
For example:

```js
const search = location.state?.search ?? "";
const backLink = `..${search}`;
```

Or even cleaner:

```js
const backTo = location.state?.from || "..";
<Link to={backTo} relative="path">...</Link>
```

That way, if your route structure changes later, it’s resilient.

---

## 🖼️ 5. Rendering and Conditional Logic

```js
{van ? (
  <div className="van-detail">...</div>
) : <h2>Loading...</h2>}
```

✅ **Good pattern** — simple conditional rendering.
⚠️ **However:** You should render an empty state placeholder or spinner *while loading*, not a header text.
Also, if `van` fails to load (e.g., network error), this will hang forever.

**Better:**

```js
if (!van) return <p>Loading van details...</p>;
```

Or even better with 3-state control:

```js
const [status, setStatus] = React.useState("loading"); // "loading" | "success" | "error"
```

---

## 💅 6. The JSX Content

```jsx
<img src={van.imageUrl} />
<i className={`van-type ${van.type} selected`}>
  {van.type}
</i>
```

**Roasts:**

* `<img>` needs `alt` text for accessibility.
* The `<i>` tag is semantically wrong here — use `<span>` or `<div>` unless it’s an actual icon.
* Hardcoding “selected” is a smell — that’s styling logic leaking into structure.

**Better:**

```jsx
<img src={van.imageUrl} alt={van.name} />
<span className={`van-type ${van.type}`}>
  {van.type}
</span>
```

---

## 🧱 7. State Naming & Shape

You’re calling it `van`, but setting it from `data.vans` (plural).
That’s inconsistent and a subtle code smell.

**Best practice:** Keep your variable names **singular/plural-consistent**:

```js
const [van, setVan] = React.useState(null);
// ...
setVan(data.van);
```

---

## 💡 8. Bonus: Code Organization and Scalability

For a small project, this is fine.
But in a real app, you’d want to:

* Move the data fetching logic to a **custom hook** (`useVan` or `useFetch`).
* Add proper **loading/error boundaries**.
* Use React Query or SWR for caching, retries, and data consistency.

Example custom hook:

```js
function useVan(id) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let ignore = false;
    async function fetchData() {
      try {
        const res = await fetch(`/api/vans/${id}`);
        if (!res.ok) throw new Error("Fetch failed");
        const json = await res.json();
        if (!ignore) setData(json.van);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
    return () => (ignore = true);
  }, [id]);

  return { data, error };
}
```

Then your component becomes:

```js
const { id } = useParams();
const { data: van, error } = useVan(id);
```

---

## 🧠 TL;DR — Roast Summary

| Area        | Issue                          | Better Practice                    |
| ----------- | ------------------------------ | ---------------------------------- |
| Fetching    | No error handling or cleanup   | Use async/await and guard unmounts |
| State       | Naming mismatch (`data.vans`)  | Keep naming consistent             |
| Rendering   | No alt text, misuse of `<i>`   | Use semantic elements              |
| Navigation  | Good defensive coding          | Prefer `location.state?.from`      |
| Resilience  | Missing loading/error handling | Add 3-state management             |
| Reusability | Inline fetch logic             | Extract to a custom hook           |

---

If you’d like, I can **rewrite your component in a “senior-level” idiomatic React 18 style** (with hooks, error handling, and clean JSX) so you can compare side-by-side.
Would you like me to do that next?

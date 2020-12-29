import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

console.log("JS is loaded!");

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};


// async: Load stuff while FE is still loading
const router = async () => {
    const routes = [
        // Placeholders
        // { path: "/", view: () => console.log("Viewing Dashboard") },
        // { path: "/posts", view: () => console.log("Viewing Posts") },
        // { path: "/settings", view: () => console.log("Viewing Settings") }

        // Using class reference
        { path: "/", view: Dashboard },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Settings }
    ];

    // Test each route for potential match 
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    };

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    // console.log(potentialMatches);
    // console.log(match);
    // console.log(match.route.view());
}

// Make sure Back-Button actually re-navigates the user
window.addEventListener("popstate", router);

// Once all content was loaded
document.addEventListener("DOMContentLoaded", () => {
    // Avoid Page Refresh when clicking a navigation link
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});
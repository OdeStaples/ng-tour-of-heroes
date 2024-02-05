# TourOfHeroes

- This project demonstrates the usage of angular components, services, routing, guards (`canDeactivate`), resolvers and signals.

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

# Code Structure

- This project has 3 user built components (dashboard, hero-info and heroes).

- The dashboard component's objective is to display the top 5 heroes.

  - clicking on any one of the anchor links navigates to hero-info component.

- The heroes component's objective is to list all the heroes available.

  - You can also add new heroes to the heroes list.
  - Additionally, clicking on any one of the anchor links navigates to hero-info component.

- The hero-info component provides information about the clicked hero/

  - You can also edit the hero name.
  - The hero data is fetched through resolver using the `id` from the route.
  - If changes are not saved, you get a popup that uses `canDeactivate` guard.
  - The back naviagtion is done through `location` that uses browser history to navigate back.

- The hero service is used for accessing and updating the heroes data.

- The hero interface has two properties - name of type string and id of type number.

# TODOs

- organize the code
- better routing (not using the browser history api)

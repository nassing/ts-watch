# ts-watch
Typescript watch project.

## Features

- Display the current time in a 24-hour format.
- The watch can switch the background color by pressing the `LIGHT` button.
- The watch has 3 modes: `Locked` mode, where the `+` button does nothing, `Setting hours` mode, where it increments the hours, and `Setting minutes` mode, where it increments the minutes.
- The user can switch between modes by pressing the `MODE` button: one press for `Setting hours` mode, two presses for `Setting minutes` mode, and three presses for `Locked` mode. Inputs have to be done under 700 milliseconds.
- A preview feature is available, where the watch displays what the mode will be if no additional button is pressed.

## UML

Project class diagram (as well as its PlantUML code) is available in `./uml/`.

## Running the project

To run the project, install npm and run the following commands:

```javascript
npm install
npm run start
```

Alternatively, the deployed version is available at https://watches.nassing.fr .

## Issues

### Configuration

The given configuration for this project was not working because it was fetching libraries from https://hc-eu-west-aws-artifactory.cloud.health.ge.com to which I did not have access. I deleted the `package-lock.json` file and regenerated it with `npm install`.

The project was still not working because it did not recognize the `require` method, so I switched the target property to `web` in the `tsconfig.json` file.

### CSS

The blinking animation is reset when a button is pressed because the HTML element is re-rendered. This could be fixed by using Sass or JS code.

The text for the current watch mode has a preview feature, where it displays what the mode will be if no additional button is pressed. However, it is not very fluid.

### MVC

The current architecture is not ideal because both controllers use models and views of another entity. I can think of 3 solutions:
- Merge the two controllers into one.
- Remove the link between `ButtonController` and `WatchView`. This is not perfect either but it reduces the coupling at the price of reactivity (the controller will not be able to re-render the view whenever a button is pressed, user will have to wait for the next re-render from the `WatchController`).
- Use a single view for both controllers.

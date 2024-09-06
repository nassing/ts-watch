# ts-watch
Typescript watch project.

## Configuration

The given configuration for this project was not working because it was fetching libraries from https://hc-eu-west-aws-artifactory.cloud.health.ge.com to which I did not have access. I deleted the `package-lock.json` file and regenerated it with `npm install`.

The project was still not working because it did not recognize the `require` method, so I switched the target property to `web` in the `tsconfig.json` file.

## Running the project

```javascript
npm install
npm run start
```

## how to deploy with github pages

1. install gh-pages package: ``` npm install gh-pages```
2. In **package.json**, add the following:
   1. ``` "homepage":"https://<github_username>/github.io/<repo-name>" ```
   2. In Scripts, add 
   ``` 
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
   
   ```
3. In terminal run deploy script as: ``` npm run deploy ```. This first runs predeploy script which builds our project in build folder then deploy script runs
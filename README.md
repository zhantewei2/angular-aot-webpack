# angular-aot-webpack
<br>
You should rename `'babelrc'` to `'.babelrc'` before you run the program;

<br>
ProdServer default of url is `'/router/'`,And you can edit it what is in the `'./config/prod-server/prod-server.js'`

<br>

####dev:

     npm start
Host Location:`localhost:3000`;
<br>
####prod:

     npm run prod
     npm run ngcStart
     npm run webpack-pro
Host Location:`localhost:3001`;

When you run `npm run webpack-pro` ,
You will get an Error: `Cannot find name 'System'`
This is normal,because i load a lazyLoadModule in `router.module.ts`

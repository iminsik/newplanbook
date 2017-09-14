# React Web

# What is the project? 
Practicing React Server and Client side rendering

## Server-side rendering
* Header
* Footer
* Merchandise Tile
* Hero Image depending on Destination

## Client-side rendering
* Hero Image depending on Destination

# How to run this app?
```
## Development
NODE_ENV=production node_modules/.bin/webpack -p
(NODE_ENV=production node_modules/.bin/webpack -p && node_modules/.bin/http-server src/static)

## Production
NODE_ENV=production node_modules/.bin/babel-node --presets react,es2015 server.js
```

# References
1. https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app : React, Webpack, React Router, Server Side Rendering, EJS
2. https://medium.com/@adamzerner/client-side-rendering-vs-server-side-rendering-a32d2cf3bfcc : Pros, Cons and Discussions on Server vs Client side rendering

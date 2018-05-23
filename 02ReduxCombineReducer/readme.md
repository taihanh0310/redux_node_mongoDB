# How to build

### Installation

```sh
cd 02ReduxCombineReducer
npm install
node server.js
open new terminal
cd 02ReduxCombineReducer
node_modules/.bin/webpack --watch
```

### MIDDLEWARES

A Redux Middleware sits between the dispatch of an action
and the reducer, basically, it allows us to execute some tasks
after an action has been dispatched and the reducer is
executed.
We can use third parties Middlewares or we can even build a
custom one for our own needs. For instance, we could create a
middleare that fires a new action when a specific action has
been dispatched and so creating chains of actions.
Let’s use a third party middleware called: redux-logger.
Redux-logger is a middleware that capture all actions and logs
nicely the previous state and the next one, providing a great
visibility on how the store is behaving.
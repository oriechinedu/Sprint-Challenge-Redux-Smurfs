1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
1.  What is middleware?
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1.  Which `react-redux` method links up our `components` with our `redux store`?

# Answers
 1. > `concat, Object.assign and Spread operator`
    > - The method to create a new object while extending the properties of another object is `Object.assign` or `Spread operator`
  
 2. > - `actions` are methods that define how the state is changed.
    > - `reducers` are methods that are used to change the state as defined by the actions
    >  - `store` is the single source of truth of the application state, it's the central location where states that are needed across the application components are stored.
    >  `store` is known as the single source of truth because it's the only place where the application states are kept, changed and retrieved from.

 3. > The difference between Application state and Component state is that a Component state is only local to the Component while Application state is for the entire Application and can be used by any Component that requires the it using the `react-redux connect` function.
   > When the state is only need by a particular Component, Component state is the right choice.When the state is needed by several Components in an Application, the Application state is the good choice. 

4. > `middleware` is a function that seats between a `Request` and ensures that a given condition is met before allowing the Request to proceed to another phase or stage.

5. > `redux-thunk` is a middleware that allows for Asynchronous actions in Redux. It does so by returning a function which takes the stores dispatch method, the dispatch method is in turn used to dispatch a synchronous actions that returns regular pure objects.

6. > The `react-redux` method the links up a component with the `redux store` is the `connect` method.
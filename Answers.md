1. What problem does the context API help solve?

Rather than drilling props down to the required component we store data on a context object and retrieve that data in the necessary components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions describe the transformation that the state will suffer reducers are responsible for updating the state.

The store is the single source of truth because all components derive their state from the store

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state describes the state of the entire application, while component state describes the state of a component, component states should be used when the states are only consumed by the component alone

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware that allows us to perform async operations with redux

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API because I understand it better

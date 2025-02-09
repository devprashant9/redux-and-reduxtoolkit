# Mastering Redux and Redux Toolkit With React-Redux

## Setting Up For Redux

- First understanding updation **mutating way** and **non mutating way**.
- Shallow Copy vs Deep Copy
- React doesn't understands the update when object is updated using **mutating way** because refrence still remains the same.
- How **state** is updated in **redux** using `function` known as **reducers**. These are plain functions but since they update **redux state** therefore they are known as **reducers**.
- The **state** and **action** parameters passed to reducer function
- What actually is **action** object and its properties with few conventions

## Setting Up Parcel to Use Redux

- redux has a method `createStore` that requires a `function` to run
- the `createStore(() => {})` returns a object with important `functions` like `getState()`, `dispatch()`, `subscribe()`
- the `getState()` is used to get the `current state`
- the `subscribe(cb)` method is called whenever there is any update in state
- the `dispatch(action)` method is used to **dispatch** events
- the `action` is a plain object with `type` property that is mandatory for eg. `action = {type: "increase", payload: 20}` and can have **data** in `payload` property.
- implemented simple functionality to increase and decrease numbers by passing **action** object
- implemented `switch case` and variables to store `action type` as per convention.

## Undersatnding Complex State by E-Commerce Cart Example

- creating a complex state by storing data on local system and then implemention `addToCart` and `wishList` from available data.
- dispatching various events to add, remove, increase, decrease items in cart based on id.
- also handling side cases like to remove item from array if users decreases quantity below 1.

## Creating and Combining Multiple Reducers to Create a Single Reducer

- understanding `multi reducers` to keep code clean.
- the `createStore` takes only 1 reducer thus `combineReducers()` helps to achieve this.
- while passing object to combine reducers method use the same `key` which is used to store actual state or else you have to deal with other variable. It's just a convention for better readability and understanding.
- dispatching all available actions

## Understanding Action Creators to Prevent Code Duplication

- simply functions that creates and returns action object and minifies code duplication
- created in same files where reducers are created

## Understanding Immer JS to Update State in Mutating Way

- it is used by redux toolkit because it helps us to update state in a mutating way
- shortens our code makes it more easy and readable
- the `produce()`methods provides a duplicate state on which we update in a mutating way and it is automatically taken care by immer behind the scenes

## Shopping Cart Project to Implement Redux

- setting up cart functionality by testing with redux dev tools
- not handled side cases

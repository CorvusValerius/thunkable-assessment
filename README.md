# Thunkable Code Assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

In the project directory, you can run:

### `yarn (or npm install)`

## Running Locally

In the project directory, you can run:

### `yarn start (or npm start)`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Design

Within the `src` folder are `components`, `lib`, and `state` folders

## Components

Usually, I like to employ a controller/component (or logical/presentational component) architecture, where the controller (or logical) component is where logic happens, such as calls to an API, data parsing, etc, but in this case, doing so would have been overkill, so I left the structure the same as I would usually do, but without the controller component.  Component-specific styles live parallel to their components.  Generic/multi-use styles, or "base" styles that are meant to be extended would be in another folder, and referenced by the component-specific styles.

## Lib
This folder houses utility functions.  I have included a couple that I routinely like to use.

## State

I used `easy-peasy` (https://easy-peasy.vercel.app/) for state management.  It is similar to Redux, but utilizes a number of convenience methods to shrink "reducers".  Since we discussed this tool on the call, I thought you would be interested in having a look at it in action.  The `thunk` function can also be asynchronous, and is what is usually used for calls to an API for data.

## Components and styles
I used the components from Ant Design, as requested.  I also utilized the `emotion` library for styles.  `Emotion` allows you to create custom styled components based on normal html tags or React components.  Props can be passed into the `emotion` styled components, so that logic can happen within the styles themselves to handle situations like _hover_ states (as you can see in this project), and many other situations.


# React User Analytics

This library enables tracking of UI events when a user interacts with a React or React Native application.

## Features

- **Progressive** - Uses latest JavaScript features and design patterns for a React codebase.
- **Extensible** - A modular architecture and usage of Dependency.Inversion patterns gives you flexibility and allows you to easily extend features.
- **TypeScript support**.

## A simple example

```jsx
// import your component
import Button from 'Button';

import withTracking from 'react-user-analytics/index';

const ButtonWithTracking = withTracking(Button);

<ButtonWithTracking
    label="click me"
    trackers={[
    {
        action: 'onClick',
        track: handleLogEvent,
    },
  ]}
/>
```

## Supported events

- Form Events
    - `onChange`
- Mouse Events
    - `onClick`
    - `onHover`

## 🔍 Why this approach?

This project uses Higher-Order Components (HOCs) to wrap existing components with tracking logic — without modifying the components themselves.

By using HOCs:

- ✅ No rewrites required – Existing components stay untouched.

- 🧩 Plug-and-play tracking – Tracking logic is attached where needed, with minimal friction.

- 🧪 A creative HOC experiment – This project explores how far we can take HOCs to inject behavior cleanly and declaratively.

- 🧠 Customizable data structure – Gain precise control over how user interaction events are structured and sent, instead of being limited by black-box analytics tools.

This approach makes it easy to scale analytics across an application without tangling up UI code — just wrap and go.

## Work in Progress

Eventually, the library will have exhaustive coverage and support for many more events, such as:

 - Wheel Events
 - Touch Events
 - Keyboard Events
 - Mouse Events
 - and more.

- User Interaction journey mapping
- Session Recording

## Instructions of Usage

1. First, import the library in your project.

2. In-order to add user-tracking ability to your component or element, import the `withTracking` function (Higher-order component) and wrap the component. Here's an example using a simple `Button` component:

`export const ButtonWithTracking = withTracking(Button)`

`ButtonWithTracking` will have all the features and properties of the `Button` component, but with interaction-tracking superpowers!

3. Finally, use `ButtonWithTracking` inside your app anywhere where you'd like to track user-events occurring on this component, such as `onClick` or `onHover`.

```jsx
import Button from 'components/Button';
import { withTracking } from 'react-user-analytics/index';

const ButtonWithTracking = withTracking(Button);

function Home() {

    function handleClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
        // app logic goes here
    }

    function logEvent(
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        interactionResource: UserInteractionResource
    ) {
        /*
            do whatever you want with the resource,
            like save it to IndexedDB, compress it, save it via API, etc
        */
        console.log(interactionResource);
    }

    return (
        <ButtonWithTracking
            type="text"
            onClick={handleClick}

            trackers={[
                // track onClick event
                {
                    action: "onClick", // event to track
                    track: logEvent, // callback function that runs whenever the event occurs
                }
            ]}
        >
    )
}

export default Home;
```

You can add multiple tracker objects within the `trackers` array if you need to track more than one event occurring within the component.

## Advanced Usage

### Mapping a user's journey

**Use-case**:
Say you have 2 react components - a `ButtonWithTracking` configured to track `onClick` events, and a `InputWithTracking` component configured to capture `onChange` events. These components are being used in 2 different pages or templates in your application - a login form, and a newsletter subscription form.

In this scenario, it is useful to capture a global 'context' within which the events occur - such as the page or the container component details, and the app version. This information is useful to plot out the user's journey, which will give you a more contextual understanding of how the user navigates through your app.

- #### Provide and capture contextual data using React Context Provider `<DataContext.Provider>`

    Using the `<DataContext.Provider>`, you can provide the global 'context' to your tracking components without having to pass them explicitly via props. Here's how:

    - Create a `DataContext` object.

```typescript
const dataContext = {
    context: "Login Form",
    app: {
        version: "1",
    },
} as UserInteraction.DataContext;
```

- Next, wrap your template or container component within `DataContext.Provider` and provide it the `dataContext` value:

```jsx
import { withTracking, DataContext, UserInteractionResource } from 'react-user-analytics/index';
import Button from 'components/Button';

const ButtonWithTracking = withTracking(Button);

function LoginForm() {

    function logEvent(
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        interactionResource: UserInteractionResource
    ) {
        console.log(interactionResource.app.version) // Will print "1"
        console.log(interactionResource.source.context); // Will print "Login Form"

    }

    return (
        <DataContext.Provider value={dataContext}> // Pass the dataContext value
            <ButtonWithTracking
                type="text"
                onClick={handleClick}

                trackers={[
                    // track onClick event
                    {
                        action: "onClick",
                        track: logEvent,

                        data: { // pass optional custom data
                            color: "blue",
                        }
                    }
                ]}
            >
        </DataContext.Provider>
    )
}

export default LoginForm;

```

This way, your tracking components nested anywhere within the provider will receive the `dataContext` object and will return it as part of the `UserInteractionResource` object.

- #### Providing Data Context as regular props

If you don't want to provide data using `DataContext.Provider` or want to override it with a different value, you can pass them explicitly via props:

```jsx
function LoginForm() {

    function logEvent(
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        interactionResource: UserInteractionResource
    ) {
        console.log(interactionResource.app.version) // Will print "0"
        console.log(interactionResource.source.context); // Will print "Login Form"

    }

    return (
        <ButtonWithTracking
            type="text"
            onClick={handleClick}

            trackers={[
                // track onClick event
                {
                    action: "onClick",
                    track: logEvent,

                    data: { // pass optional custom data
                        color: "blue",
                    }
                }
            ]}

            dataContext={{ // Pass dataContext explicitly
                app: {
                    version: "0",
                },
                context: "Login Form"
            }}
        >
    )
}

export default LoginForm;

```

In-case you have both in your application, the data context passed via props will override the values from `<DataContext.Provider>`

## API

### React

- #### Tracking Component Props

    The tracking-enabled component will accept all props required for the original component, along with the following:

    | Props         | Required |                                                         Description                                                         |                          Type |
    | :------------ | :------: | :-------------------------------------------------------------------------------------------------------------------------: | ----------------------------: |
    | `trackers`    |   Yes    | Each tracker object expects an `action` and `track` properties. Check the section below for the complete list of properties |   `UserInteraction.Tracker[]` |
    | `origin`      | Optional |                                 To provide some contextual information for the event origin                                 |                      `string` |
    | `dataContext` | Optional |                                  an object property to provide context of the taken event                                   | `UserInteraction.DataContext` |

- #### `UserInteraction.Tracker` object properties

    | Property | Required |                                                  Description                                                   |                                                        Type |
    | :------- | :------: | :------------------------------------------------------------------------------------------------------------: | ----------------------------------------------------------: |
    | `action` |   Yes    | Type of event that needs to be tracked (React Synthetic events). Can take values such as `onClick`, `onChange` |                                                    `string` |
    | `track`  |   Yes    |                                   Callback that runs when above event occurs                                   | `(e, interactionResource: UserInteractionResource) => void` |
    | `data`   | Optional |           Can be used to provide some custom data. Accessible within `UserInteractionResource.data`            |                                               `Object<any>` |

```

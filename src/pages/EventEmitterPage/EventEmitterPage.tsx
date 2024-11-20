import { emit, onEmit } from '../../codes/emitterCode';
import {
  ContentWrapper,
  Scroll,
  SyntaxHighlighterWrapper,
} from '../../components';

export const EventEmitterPage = () => {
  return (
    <div className="h-full w-full relative">
      <Scroll>
        <ContentWrapper
          headline="Managing Emitters"
          paragraph="In this section, we will explore the use of emitters within your
        application. Emitters are designed to serve as flexible tools for event
        dispatching and listening, allowing you to manage and trigger events
        independent of the application state. Unlike selectors, emitters are not
        directly tied to the store; instead, they function as a versatile
        communication layer across components."
        />
        <ContentWrapper
          paragraph="Using emitters allows you to set up event-based triggers that your
        components can listen to, providing a way to respond to events as they
        occur. This approach is particularly useful for scenarios where a store
        update is not necessary but a component still needs to be notified of an
        event."
        />
        <ContentWrapper
          paragraph="The code example below demonstrates how to set up an emitter to
        broadcast an event and listen for changes. This enables you to manage
        complex interactions between components more effectively, enhancing the
        event-driven architecture of your application."
        />

        <ContentWrapper
          headline="Emitting Events with the useEmitEvent Hook"
          paragraph="In this section, we will explore how to leverage the useEmitEvent hook to facilitate event-driven communication within your application.
        Emitters serve as a powerful mechanism to dispatch signals across your
        components without the need for direct props drilling."
        />

        <ContentWrapper
          paragraph="Below is an example demonstrating how to implement an event emitter
        using the useEmitEvent hook. This code snippet shows how to trigger an event named EMIT_AGE with a payload containing age data."
        />
        <SyntaxHighlighterWrapper codeString={emit} />

        <ContentWrapper
          paragraph="By clicking the button in SomeComponent, the emitEvent function is called, which triggers the EMIT_AGE event. This pattern allows different parts of your application to react
        to events in a decoupled manner."
        />

        <ContentWrapper
          headline="Listening for Events with the useOnEvent Hook"
          paragraph="In this section, we will discuss how to utilize the useOnEvent hook to listen for emitted events within your application. This
        mechanism allows components to respond to specific events, facilitating
        a reactive architecture that enhances communication between different
        parts of your app."
        />

        <ContentWrapper
          paragraph="Below is an example demonstrating how to implement an event listener
        using the useOnEvent hook. This code snippet shows how to listen for the EMIT_AGE event and log the event data to the console."
        />
        <SyntaxHighlighterWrapper codeString={onEmit} />

        <ContentWrapper
          paragraph="In the SomeComponentTwo, the useOnEvent hook listens for the EMIT_AGE event. When this event is triggered, the provided callback function is
        executed, allowing you to handle the event data as needed."
        />
      </Scroll>
    </div>
  );
};

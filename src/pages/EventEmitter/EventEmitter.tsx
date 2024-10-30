import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { emit, onEmit } from '../../codes/emitterCode';

export const EventEmitter = () => {
  return (
    <div>
      <h2 className="text-white font-bold text-2xl border-b pb-5 mb-5 border-gray-100/20">
        Managing Emitters
      </h2>
      <p className="text-gray-300 mb-4">
        In this section, we will explore the use of emitters within your
        application. Emitters are designed to serve as flexible tools for event
        dispatching and listening, allowing you to manage and trigger events
        independent of the application state. Unlike selectors, emitters are not
        directly tied to the store; instead, they function as a versatile
        communication layer across components.
      </p>
      <p className="text-gray-300 mb-4">
        Using emitters allows you to set up event-based triggers that your
        components can listen to, providing a way to respond to events as they
        occur. This approach is particularly useful for scenarios where a store
        update is not necessary but a component still needs to be notified of an
        event.
      </p>
      <p className="text-gray-300 mb-4">
        The code example below demonstrates how to set up an emitter to
        broadcast an event and listen for changes. This enables you to manage
        complex interactions between components more effectively, enhancing the
        event-driven architecture of your application.
      </p>

      <h2 className="text-white font-bold text-2xl border-b pb-5 mb-5 border-gray-100/20">
        Emitting Events with the useEmitEvent Hook
      </h2>
      <p className="text-gray-300 mb-4">
        In this section, we will explore how to leverage the{' '}
        <code className="bg-gray-800 text-gray-200 px-1 rounded">
          useEmitEvent
        </code>{' '}
        hook to facilitate event-driven communication within your application.
        Emitters serve as a powerful mechanism to dispatch signals across your
        components without the need for direct props drilling.
      </p>
      <p className="text-gray-300 mb-4">
        Below is an example demonstrating how to implement an event emitter
        using the{' '}
        <code className="bg-gray-800 text-gray-200 px-1 rounded">
          useEmitEvent
        </code>{' '}
        hook. This code snippet shows how to trigger an event named{' '}
        <code className="bg-gray-800 text-gray-200 px-1 rounded">EMIT_AGE</code>{' '}
        with a payload containing age data.
      </p>
      <SyntaxHighlighter
        customStyle={{
          fontSize: '.75rem',
        }}
        language="javascript"
        style={nightOwl}
      >
        {emit}
      </SyntaxHighlighter>
      <p className="text-gray-300 mb-4">
        By clicking the button in{' '}
        <code className="bg-gray-800 text-gray-200 px-1 rounded">
          SomeComponent
        </code>
        , the{' '}
        <code className="bg-gray-800 text-gray-200 px-1 rounded">
          emitEvent
        </code>{' '}
        function is called, which triggers the{' '}
        <code className="bg-gray-800 text-gray-200 px-1 rounded">EMIT_AGE</code>{' '}
        event. This pattern allows different parts of your application to react
        to events in a decoupled manner.
      </p>
      <h2 className="text-white font-bold text-2xl border-b pb-5 mb-5 border-gray-100/20">
        Listening for Events with the useOnEvent Hook
      </h2>
      <p className="text-gray-300 mb-4">
        In this section, we will discuss how to utilize the{' '}
        <code className="bg-gray-800 text-gray-200 px-1 rounded">
          useOnEvent
        </code>{' '}
        hook to listen for emitted events within your application. This
        mechanism allows components to respond to specific events, facilitating
        a reactive architecture that enhances communication between different
        parts of your app.
      </p>
      <p className="text-gray-300 mb-4">
        Below is an example demonstrating how to implement an event listener
        using the{' '}
        <code className="bg-gray-800 text-gray-200 px-1 rounded">
          useOnEvent
        </code>{' '}
        hook. This code snippet shows how to listen for the{' '}
        <code className="bg-gray-800 text-gray-200 px-1 rounded">EMIT_AGE</code>{' '}
        event and log the event data to the console.
      </p>
      <SyntaxHighlighter
        customStyle={{
          fontSize: '.75rem',
        }}
        language="javascript"
        style={nightOwl}
      >
        {onEmit}
      </SyntaxHighlighter>
      <p className="text-gray-300 mb-4">
        In the{' '}
        <code className="bg-gray-800 text-gray-200 px-1 rounded">
          SomeComponentTwo
        </code>
        , the{' '}
        <code className="bg-gray-800 text-gray-200 px-1 rounded">
          useOnEvent
        </code>{' '}
        hook listens for the{' '}
        <code className="bg-gray-800 text-gray-200 px-1 rounded">EMIT_AGE</code>{' '}
        event. When this event is triggered, the provided callback function is
        executed, allowing you to handle the event data as needed.
      </p>
    </div>
  );
};

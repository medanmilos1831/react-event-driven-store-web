import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { selectorCode } from '../../codes/selectorCode';
import { SelectorDetails } from './SelectorDetails';
// import { SelectorDetails } from './SelectorDetails'; // Create this component for detailed explanation

export const SelectorPage = () => {
  return (
    <div>
      <div className="h-full w-full relative">
        <h2 className="text-white font-bold text-2xl border-b pb-5 mb-5 border-gray-100/20">
          Managing Selectors
        </h2>
        <p className="text-gray-300 mb-4">
          In this section, we will delve into the usage of selectors within your
          application. Selectors are crucial for retrieving specific pieces of
          state from your module in a structured manner. By utilizing the{' '}
          <code className="bg-gray-800 text-gray-200 px-1 rounded">
            useModuleSelector
          </code>{' '}
          hook, you can efficiently access and display the state of your
          application.
        </p>
        <p className="text-gray-300 mb-4">
          Below is an example demonstrating how to implement a selector to
          retrieve a counter value from your state. This code snippet
          illustrates the usage of the{' '}
          <code className="bg-gray-800 text-gray-200 px-1 rounded">
            useModuleSelector
          </code>{' '}
          function, allowing you to specify the getter name and module name
          effectively.
        </p>
        <SyntaxHighlighter
          customStyle={{
            fontSize: '.75rem',
          }}
          language="javascript"
          style={nightOwl}
        >
          {selectorCode}
        </SyntaxHighlighter>
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-white">
        Properties of useModuleSelector
      </h3>
      <SelectorDetails />{' '}
      <div className="text-white">
        <h3 className="text-white text-lg font-semibold mb-2">
          Selective Data Fetching with Empty Events Array
        </h3>
        <p className="mb-4">
          When you provide an empty array for the{' '}
          <code className="bg-gray-800 text-gray-200 px-1 rounded">events</code>{' '}
          property, the selector will pull data from the store only once, during
          the initial render. This setup is beneficial when you only need a
          "snapshot" of the state or want to prevent automatic updates that
          could impact performance.
        </p>
        <p>
          If you want the component to re-render whenever specific events occur,
          you can specify those events in the array, allowing the data to update
          as needed.
        </p>
      </div>
      <div className="text-white mt-5">
        <h3 className="text-2xl font-bold text-white mb-4">
          The Philosophy of Selector Control in UI Management
        </h3>
        <p className="mb-4">
          The SelectorItem component serves as a highly controlled wrapper
          around{' '}
          <code className="bg-gray-800 px-1 rounded text-gray-200">
            useSelector
          </code>
          . This approach enables precise control over UI re-renders,
          specifically allowing state changes to trigger only on specified
          events.
        </p>
        <p className="mb-4">
          By managing when{' '}
          <code className="bg-gray-800 px-1 rounded text-gray-200">
            SelectorItem
          </code>{' '}
          re-renders, we reduce unnecessary updates to the UI, targeting only
          elements that need to reflect state changes. For example, by setting{' '}
          <code className="bg-gray-800 px-1 rounded text-gray-200">commit</code>{' '}
          to specific event names, we ensure that updates occur only in response
          to those events.
        </p>
        <p className="mb-4">
          This selective approach optimizes performance and provides a smoother
          user experience by avoiding re-renders of elements where state changes
          are irrelevant.
        </p>
      </div>
    </div>
  );
};

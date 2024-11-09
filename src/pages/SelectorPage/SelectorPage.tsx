import { selectorCode } from '../../codes/selectorCode';
import {
  ContentWrapper,
  SyntaxHighlighterWrapper,
  TableWrapper,
} from '../../components';

export const SelectorPage = () => {
  return (
    <div>
      <div className="h-full w-full relative">
        <ContentWrapper
          headline="Managing Selectors"
          paragraph="In this section, we will delve into the usage of selectors within your
          application. Selectors are crucial for retrieving specific pieces of
          state from your module in a structured manner. By utilizing the useModuleSelector hook, you can efficiently access and display the state of your
          application. Below is an example demonstrating how to implement a selector to
          retrieve a counter value from your state. This code snippet
          illustrates the usage of the useModuleSelector function, allowing you to specify the getter name and module name
          effectively."
        />
        <SyntaxHighlighterWrapper codeString={selectorCode} />
        <TableWrapper
          headline="Properties of useModuleSelector"
          list={[
            {
              property: 'getterName',
              type: 'string',
              description:
                'The name of the function used to retrieve the desired state from the module.',
            },
            {
              property: 'updateOnEvents',
              type: 'string[]',
              description:
                'An array of strings representing the events associated with the module. These commits can be dispatched to trigger state updates.',
            },
            {
              property: 'moduleName',
              type: 'string',
              description:
                'The name of the module from which the state is being selected. It helps to identify the specific module to interact with.',
            },
          ]}
        />
        <ContentWrapper
          headline="Selective Data Fetching with Empty Events Array"
          paragraph="When you provide an empty array for the events property, the selector will pull data from the store only once, during
          the initial render. This setup is beneficial when you only need a
          'snapshot' of the state or want to prevent automatic updates that
          could impact performance. If you want the component to re-render whenever specific events occur,
          you can specify those events in the array, allowing the data to update
          as needed."
        />

        <ContentWrapper
          headline="The Philosophy of Selector Control in UI Management"
          paragraph="The SelectorItem component serves as a highly controlled wrapper
          around useSelector. This approach enables precise control over UI re-renders,
          specifically allowing state changes to trigger only on specified
          events. By managing when SelectorItem re-renders, we reduce unnecessary updates to the UI, targeting only
          elements that need to reflect state changes. For example, by setting commit to specific event names, we ensure that updates occur only in response
          to those events. This selective approach optimizes performance and provides a smoother
          user experience by avoiding re-renders of elements where state changes
          are irrelevant."
        />
      </div>
    </div>
  );
};

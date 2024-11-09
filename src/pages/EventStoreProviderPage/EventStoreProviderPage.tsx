import { eventStoreProviderCode } from '../../codes/eventStoreProviderCode';
import {
  ContentWrapper,
  SyntaxHighlighterWrapper,
  TableWrapper,
} from '../../components';
export const EventStoreProviderPage = () => {
  return (
    <div className="h-full w-full relative">
      <ContentWrapper
        headline="EventStoreProvider Overview"
        paragraph={`The EventStoreProvider is the foundation of our service, designed to streamline and centralize
      state management across your application. It allows you to configure state
      modules with mutations and getters, enabling your components to interact
      with shared data effortlessly. Each module can define its own state,
      mutations, and getters, while plain JavaScript objects ensure simplicity
      and flexibility. Whether you’re working with basic state or requiring
      advanced updates and custom data accessors, EventStoreProvider provides a
      structured yet adaptable framework for smooth, organized state
      interactions across your app.`}
      />
      <SyntaxHighlighterWrapper codeString={eventStoreProviderCode} />

      <TableWrapper
        headline="Properties of EventStoreProvider"
        list={[
          {
            property: 'modules',
            type: 'ModuleType',
            description:
              'The modules array is crucial for defining distinct segments of the application state. Each module has a unique moduleName, facilitating organized management of related functionality. This modular approach enhances maintainability and scalability, making it easier to manage code and develop complex applications.',
          },
        ]}
      />

      <TableWrapper
        headline="Modules Interface"
        list={[
          {
            property: 'moduleName',
            description:
              'A unique identifier for the module, allowing for clear differentiation between various modules within the application.',
            type: 'string',
          },
          {
            property: 'state',
            description:
              'The initial state of the module, defined as a plain JavaScript object. This state can be modified through mutations.',
            type: 'unknown',
          },
          {
            property: 'mutation',
            description:
              'Defines functions to change the state of the module. Mutations are essential for modifying state in a predictable manner.',
            type: '{ [key: string]: (this: unknown, args: any) => void } | undefined',
          },
          {
            property: 'getters',
            description:
              'Functions that retrieve specific pieces of state. Getters allow for organized access to state values from components.',
            type: '{ [key: string]: (this: unknown) => any }',
          },
        ]}
      />

      <ContentWrapper
        headline="Generic Type Safety"
        paragraph={`The EventStoreProvider is designed as a generic component, allowing you to specify the
              type of the module when creating an instance. By using a syntax
              like, you can achieve type safety throughout your application. Overall, utilizing generic types in the EventStoreProvider enhances code reliability and maintainability by providing clear
              contracts for module behavior.`}
      />
    </div>
  );
};

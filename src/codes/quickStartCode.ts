export const quickStartCode = `
// Import necessary hooks and components from the service
import { EventStoreProvider, useModuleMutation, useModuleSelector } from 'react-event-driven-store';

interface ICounter {
  counter: number;
}

// Component to display and increment the counter
const CounterComponent = () => {
  // Mutation action for the 'counter' module
  const { mutate } = useModuleMutation('counter');

  // Selector to retrieve the current value from the 'counter' module
  const { value } = useModuleSelector<{
    counter: number;
  }>({
    getterName: "getCounter",
    commit: ["INC"],
    moduleName: "counter",
  });

  const { counter } = value;

  return (
    <>
      <button
        // Function to increment the counter on click
        onClick={() =>
          mutate({
            payload: 1,
            event: 'INC',
            commit: 'inc',
          })
        }
      >
        Increment counter
      </button>
      <span>Counter Value: {counter}</span>
    </>
  );
};

// Main App component, wrapping all modules within EventStoreProvider
const App = () => {
  return (
      <EventStoreProvider<[ModuleType<ICounter>]>
        modules={[
          {
            moduleName: 'counter',
            // Initial state for the 'counter' module
            state: {
              counter: 0,
            },
            mutation: { 
              // Mutation to increment the counter
              inc(value) {
                this.counter = this.counter + value.payload;
              },
              // Mutation to decrement the counter
              dec() {
                this.counter = this.counter - 1;
              },
            },
            getters: {
              // Getter to return the current counter value
              getCounter() {
                return {
                  counter: this.counter,
                };
              },
            },
          },
        ]}
      >
        <CounterComponent />
      </EventStoreProvider>
  );
};`;

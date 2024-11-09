export const quickStartCode = `
// Import necessary hooks and components from the service
import { EventStoreProvider, useModuleMutation, useModuleSelector } from 'react-event-driven-store';

interface ICounter {
  counter: number;
}

// Component to display and increment the counter
const CounterComponent = () => {
  const { mutateState } = useStateMutation();

  // Selector to retrieve the current value from the 'counter' module
  const { value } = useModuleSelector<number>({
    getterName: 'getCounter',
    updateOnEvents: ['INC'],
    moduleName: 'counter',
  });


  return (
    <>
      <button
        onClick={() =>
          mutateState({
            payload: 1,
            event: 'INC',
            commit: 'inc',
            moduleName: 'counter',
          });
        }
      >
        Increment counter
      </button>
      <span>Counter Value: {value}</span>
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
          state: {
            counter: 0,
          },
          mutation: {
            inc(value) {
              this.counter = this.counter + value.payload;
            },
            dec() {
              this.counter = this.counter - 1;
            },
          },
          getters: {
            getCounter() {
              return this.counter;
            },
          },
        },
      ]}
    >
      <CounterComponent />
    </EventStoreProvider>
  );
};`;

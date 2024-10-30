export const eventStoreProviderCode = `
import { EventStoreProvider } from 'react-event-driven-store';

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

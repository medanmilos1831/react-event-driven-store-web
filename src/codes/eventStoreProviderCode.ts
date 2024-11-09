export const eventStoreProviderCode = `
import { EventStoreProvider } from 'react-event-driven-store';

interface ICounter {
  counter: number;
}

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
      {/* UI */}
    </EventStoreProvider>
  );
};`;

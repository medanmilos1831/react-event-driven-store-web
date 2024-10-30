import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { quickStartCode } from '../../codes/quickStartCode';
import { eventStoreProviderCode } from '../../codes/eventStoreProviderCode';
import { IntroText } from './IntroText';
import { PropertiesTable } from './PropertiesTable';
import { ModuleInterfaceTable } from './ModuleInterfaceTable';
import { GenericTypeModule } from './GenericTypeModule';
export const EventStoreProviderPage = () => {
  return (
    <div className="h-full w-full relative">
      <h2 className="text-3xl font-bold mb-4 text-white">
        EventStoreProvider Overview
      </h2>
      <IntroText />
      <SyntaxHighlighter
        customStyle={{
          fontSize: '.75rem',
          marginBottom: '1rem',
        }}
        language="javascript"
        style={nightOwl}
      >
        {eventStoreProviderCode}
      </SyntaxHighlighter>

      <h3 className="text-2xl font-semibold mb-4 text-white">
        Properties of EventStoreProvider
      </h3>
      <PropertiesTable />

      <h2 className="text-2xl font-semibold text-white mb-4">
        Modules Interface
      </h2>

      <ModuleInterfaceTable />

      <GenericTypeModule />
    </div>
  );
};

import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { mutationCode } from '../../codes/mutationCode';
import { MutatonDetails } from './MutatonDetails';

export const MutationsPage = () => {
  return (
    <div>
      <div className="h-full w-full relative">
        <h2 className="text-white font-bold text-2xl border-b pb-5 mb-5 border-gray-100/20">
          Managing Mutations
        </h2>
        <p className="text-gray-300 mb-4">
          In this section, we'll explore how to manage mutations within your
          application. Mutations are essential for updating your module's state
          in a predictable manner. By utilizing the{' '}
          <code className="bg-gray-800 text-gray-200 px-1 rounded">
            useModuleMutation
          </code>{' '}
          hook, you can easily trigger state changes with minimal effort.
        </p>
        <p className="text-gray-300 mb-4">
          Below is an example of how to implement a mutation that increments a
          counter in your application. This code snippet illustrates the usage
          of the{' '}
          <code className="bg-gray-800 text-gray-200 px-1 rounded">mutate</code>{' '}
          function, allowing you to define the payload and event type
          effectively.
        </p>
        <SyntaxHighlighter
          customStyle={{
            fontSize: '.75rem',
          }}
          language="javascript"
          style={nightOwl}
        >
          {mutationCode}
        </SyntaxHighlighter>
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-white">
        Properties of mutate
      </h3>
      <MutatonDetails />
    </div>
  );
};

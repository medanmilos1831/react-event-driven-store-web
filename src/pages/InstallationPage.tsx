import SyntaxHighlighter from 'react-syntax-highlighter';
import { nnfxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const InstallationPage = () => {
  const codeString = 'npm install react-event-driven-store';
  return (
    <div className="h-full w-full">
      <h2 className="text-white mb-2 font-bold text-2xl">Installation</h2>
      <p className="text-gray-300 mb-4">
        Follow the steps below to install and set up the necessary dependencies
        for the project.
      </p>
      <SyntaxHighlighter language="javascript" style={nnfxDark}>
        {codeString}
      </SyntaxHighlighter>
      <p className="text-gray-300 mt-4">
        This setup is fully compatible with React 18+, ensuring support for the
        latest features and performance improvements.
      </p>
    </div>
  );
};

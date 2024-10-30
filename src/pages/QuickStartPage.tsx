import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { quickStartCode } from '../codes/quickStartCode';
export const QuickStartPage = () => {
  return (
    <div className="h-full w-full relative">
      <h2 className="text-white font-bold text-2xl border-b  pb-5 mb-5 border-gray-100/20">
        Quick Start
      </h2>
      <p className="text-gray-300 mb-4">
        Here’s a streamlined example to help you set up and start using our
        service in your React application with ease. Designed to integrate
        seamlessly, this service requires minimal setup, allowing you to focus
        on building great user experiences. Whether you're adding it to an
        existing project or starting fresh, this quick guide will have you up
        and running in no time.
      </p>
      <SyntaxHighlighter
        customStyle={{
          fontSize: '.75rem',
        }}
        language="javascript"
        style={nightOwl}
      >
        {quickStartCode}
      </SyntaxHighlighter>
    </div>
  );
};

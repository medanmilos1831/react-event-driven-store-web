import { quickStartCode } from '../codes/quickStartCode';
import { ContentWrapper, SyntaxHighlighterWrapper } from '../components';
export const QuickStartPage = () => {
  return (
    <div className="h-full w-full relative">
      <ContentWrapper
        headline="Quick Start"
        paragraph="Here’s a streamlined example to help you set up and start using our
        service in your React application with ease. Designed to integrate
        seamlessly, this service requires minimal setup, allowing you to focus
        on building great user experiences. Whether you're adding it to an
        existing project or starting fresh, this quick guide will have you up
        and running in no time."
      />
      <SyntaxHighlighterWrapper codeString={quickStartCode} />
    </div>
  );
};

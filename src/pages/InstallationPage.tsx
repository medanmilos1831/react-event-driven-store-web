import { ContentWrapper, SyntaxHighlighterWrapper } from '../components';
export const InstallationPage = () => {
  const codeString = 'npm install react-event-driven-store';
  return (
    <div className="h-full w-full">
      <ContentWrapper
        headline="Installation"
        paragraph="Follow the steps below to install and set up the necessary dependencies
        for the project."
      />
      <SyntaxHighlighterWrapper codeString={codeString} />

      <ContentWrapper
        paragraph="This setup is fully compatible with React 18+, ensuring support for the
        latest features and performance improvements."
      />
    </div>
  );
};

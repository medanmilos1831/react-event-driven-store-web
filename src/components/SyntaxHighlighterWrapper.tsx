import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const SyntaxHighlighterWrapper = ({
  codeString,
}: {
  codeString: string;
}) => {
  return (
    <SyntaxHighlighter
      customStyle={{
        marginBottom: '1rem',
        fontSize: '.75rem',
      }}
      language="javascript"
      style={nightOwl}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

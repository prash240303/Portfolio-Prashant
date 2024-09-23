import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeSnippet = ({ language, code }:{language:string, code:string}) => (
  <SyntaxHighlighter language={language} >
    {code}
  </SyntaxHighlighter>
);

export default CodeSnippet
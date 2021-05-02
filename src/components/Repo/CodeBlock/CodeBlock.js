import React from 'react';

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import coy from 'prismjs/themes/prism-coy.css'

const CodeBlock = ({value, lang}) => {
    return (
        <SyntaxHighlighter language={lang} style={coy}>
            {value}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;

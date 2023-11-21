import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl';

interface Props {
    Language: string
}

export default function Log() {
    const codeString = `
    #!/bin/bash

    # Hardcoded username and password (for demonstration purposes)
    valid_username="username"
    valid_password="password"
    
    echo "Please enter your username:"
    read username
    
    echo "Please enter your password:"
    read -s password
    
    if [ "$username" = "$valid_username" ] && [ "$password" = "$valid_password" ]; then
        echo "Login successful!"
        # Create a session file or set a session variable
        echo "Session created for user: $username" > session.txt
    else
        echo "Invalid username or password. Login failed."
    fi
        
    `;
    return (
        <SyntaxHighlighter language="go" style={nightOwl} customStyle={{
            backgroundColor: "transparent",
            opacity: 1,

        }} >
          {codeString}
        </SyntaxHighlighter>
    );
}
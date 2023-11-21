import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl';

interface Props {
    Language: string
}

export default function Reg() {
    const codeString = `
    #!/bin/bash

    # Prompt for username and password
    read -p "Enter username: " username
    read -s -p "Enter password: " password
    echo
    
    # Ensure SQLite database file exists, create table if not exists
    DB_FILE="users.db"
    if [ ! -f "$DB_FILE" ]; then
        sqlite3 $DB_FILE "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT);"
    fi
    
    # Insert user data into the database
    sqlite3 $DB_FILE "INSERT INTO users (username, password) VALUES ('$username', '$password');"
    
    echo "Registration successful! User added to the database."
    
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
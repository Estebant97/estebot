# Estebot: A CLI Chat Agent with File Management Tools

Estebot is a command-line interface (CLI) chat agent built with Claude 3.7 Sonnet that provides file management capabilities through natural language conversation.

## Overview

This application creates an interactive chat interface with a Claude AI assistant that can perform file operations on your local system through tool use. The assistant, named "Estebot", can:

- Read files from your filesystem
- List files and directories
- Edit text files or create new ones

## Features

- **Interactive CLI Chat**: Engage in a natural conversation with Estebot
- **File Operations**:
  - `read_file`: View the contents of any file
  - `list_files`: Display files and directories at a specified path
  - `edit_file`: Make changes to text files or create new ones
- **Token Usage Tracking**: Monitors input and output token consumption

## Requirements

- Go 1.18 or higher
- An Anthropic API key (set as an environment variable)

## Installation

1. Clone this repository
2. Set your Anthropic API key:
   ```
   export ANTHROPIC_API_KEY=your_api_key_here
   ```
3. Build the application:
   ```
   go build
   ```

## Usage

Run the application:

```
./estebot
```

Start chatting with Estebot. You can ask it to:

- "Show me what's in the main.go file"
- "List all files in the current directory"
- "Create a new file called example.txt with the content 'Hello World'"
- "Replace 'Hello World' with 'Hello Estebot' in example.txt"

Press Ctrl+C to exit the application.

## Architecture

The application uses:

- The Anthropic Go SDK to communicate with Claude 3.7 Sonnet
- Custom tool definitions to handle file operations
- A conversation loop that manages the chat flow between user and assistant

## License
Estebot is a command-line interface (CLI) chat agent built with Claude 3.7 Sonnet that provides file management capabilities through natural language conversation.
The implementation of the AI Agent was created following the guide by Thorsten Ball [How To build an Agent](https://ampcode.com/how-to-build-an-agent)

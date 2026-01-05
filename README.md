# Soma Language Support

Language support for Soma programming language powered by the SouLS language server.

## Features

- **Syntax Highlighting**: TextMate grammar + LSP semantic tokens for accurate code coloring
- **IntelliSense**: Code completion, hover information, and signature help
- **Go to Definition**: Navigate to symbol definitions across files
- **Find References**: Find all references to symbols
- **Document Symbols**: Outline view and breadcrumbs navigation
- **Diagnostics**: Real-time error and warning detection
- **Semantic Analysis**: Type-aware highlighting and cross-module references

## Requirements

- **SouLS Language Server**: The `souls` binary must be installed and available in your PATH or at `~/.sup/bin/souls`

## Installation

1. Install the SouLS language server
2. Install this extension from the VS Code Marketplace (or manually)
3. Open any `.soma` file

## Commands

This extension contributes the following commands:

- `Soma: Restart Language Server` - Restart the language server if it becomes unresponsive
- `Soma: Show Output` - Show the language server output channel for debugging

## Extension Settings

This extension works out of the box with no configuration required.

## Known Issues

Please report issues at the GitHub repository.

## Release Notes

### 0.0.1

Initial release:
- Basic language support
- LSP integration with SouLS
- Semantic token highlighting
- Code navigation features

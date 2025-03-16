#!/bin/bash

# Display a welcome message
echo "Starting ESIconnect..."
echo "----------------------------------------"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js to run this application."
    exit 1
fi

# Check if npm is installed
if command -v npm &> /dev/null; then
    # Using npm
    echo "Using npm to start the application..."
    npm run dev
elif command -v yarn &> /dev/null; then
    # Using yarn
    echo "Using yarn to start the application..."
    yarn dev
elif command -v pnpm &> /dev/null; then
    # Using pnpm
    echo "Using pnpm to start the application..."
    pnpm dev
elif command -v bun &> /dev/null; then
    # Using bun
    echo "Using bun to start the application..."
    bun run dev
else
    echo "Error: No package manager (npm, yarn, pnpm, or bun) found. Please install one to run this application."
    exit 1
fi

# This part will only execute if the application exits
echo "Application stopped." 
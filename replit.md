# goGreen

## Overview
A Node.js script that creates backdated git commits to populate your GitHub contribution graph. This tool allows you to make your profile show activity for any date in the past year.

## Project Structure
- `index.js` - Main script that generates random commits with backdated timestamps
- `data.json` - Stores commit timestamp data
- `package.json` - Node.js project configuration with dependencies

## Dependencies
- `moment` - Date and time manipulation
- `simple-git` - Git command interface
- `random` - Random number generation for commit positioning
- `jsonfile` - JSON file read/write utilities

## How It Works
The script:
1. Generates random x,y coordinates for the contribution graph
2. Creates commits with dates from the past year
3. Pushes these commits to the repository

## Running the Script
Run `node index.js` to execute. By default, it makes 100 commits.

## Recent Changes
- 2026-01-30: Initial import to Replit

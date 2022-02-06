# Zoom Joiner
[![Build](https://github.com/yavko/zoomjoiner/actions/workflows/build.yml/badge.svg)](https://github.com/yavko/zoomjoiner/actions/workflows/build.yml)  
<br />
App that literly does one thing, join zoom meetings. Why? Because.

## INSTALLATION :)
- Go to releases and download a binary (no releases yet, so not applicable for now :( )
- Download latest build from CI/CD nightly.link (not setup yet, so also not applicable)
- [Build from source](#building-from-source)

## Building from source
1. Clone the repo:
```bash
# These are shell commands run in shell ;)

# Way one (github cli needed)
gh repo clone yavko/zoomjoiner

# Way two (http clone) (git needed)
git clone https://github.com/yavko/zoomjoiner.git

# Way three (ssh clone) (ssh needs to be setup, and git is needed)
git clone git@github.com:yavko/zoomjoiner.git
```
2. Install Neutralino CLI (node is needed for install, and install only lol)
```bash
npm i -g @neutralinojs/neu 
```
3. Switch to directory
```bash
cd zoomjoiner
```

4. Install dependencies
```bash
neu update
```

5. Finally build the application (will build to `./dist/`)
```bash
neu build
```

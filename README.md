# Convert markdown file to Steam review

![Build Status](images/converter.gif)

## Table of Contents

<!-- TOC depthFrom:2 -->

- [Convert markdown file to Steam review](#convert-markdown-file-to-steam-review)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Usage](#usage)
  - [Requirements](#requirements)
  - [License](#license)

<!-- /TOC -->

## Overview

This is just a code that uses [mume](https://github.com/shd101wyy/mume#readme) to replace HTML with regular expressions.

## Usage

- Convert markdown files in the content directory to steam's review format.

```shell
pnpm install

pnpm run start # Convert markdown to Steam review format

pnpm run start -b # If you want to open the markdown file in a browser
pnpm run start -i # Output HTML file
```

## Requirements

- node.js: "^16",
- "pnpm": ">=6",

## License

The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

Copyright 2021 SARDONYX. All rights reserved.

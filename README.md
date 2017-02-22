# live-less-compiler

A simple tool for watching `.less` files in a directory,
and compiling them to `.css` on file change (using `lessc`).
Uses less-plugin-autoprefix for automatic prefix generation with `last 2 versions,> 5%,Firefox >= 20,iOS 7` settings.

### Requirements:

less-plugin-autoprefix needs to be installed globally:
`npm i -g less-plugin-autoprefix`


### How to use

Start `live-less-compiler` in the directory you want to watch.

### Development / Todo

Improvements that can be added in the future:

* Configurable autoprefix parameters

### License

MIT License

Copyright (c) 2017 Simo Iliev

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

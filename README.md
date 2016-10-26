# Reason Tools

Adds [Reason](http://facebook.github.io/reason/) to the browser.

## Getting started

Download the extension at `TBD`. You will now be able to trigger the popup with `Alt+D` (TODO: check if this is configurable in the extensions page). This command will take the text you currently have selected and paste it into a conversion area which is then translated into the corresponding Reason/Ocaml text. Reason Tools will automatically convert between `.re`, `.ml`, `.rei`, and `.mli` text.

## Contribute

To get started contributing you can clone and build the extension:

```sh
git clone https://github.com/rickyvetter/reason-tools.git
cd reason-cools
npm install # this will take a while
npm run build:js
```

once installed, you can rebuild the Reason code with `npm run build` and the js with `npm run build:js`. The JS consumed the Reason API, so always `npm run build:js` when in doubt. This will be streamlined in the future!

> [Yarn](https://github.com/yarnpkg/yarn) can also be used to make things a little faster, but there are some edge cases still being worked on: https://github.com/yarnpkg/yarn/milestone/2

To load in Chrome, go to `chrome://extensions/` and turn on Developer Mode. From there you should be able to select "Load unpacked extension..." and choose `reason-tools/_build/extension`.

### Rebel

This project uses [Rebel](https://github.com/reasonml/rebel) as it's Reason build system. It will probably help to familiarize yourself with that system before jumping into changing the build process.

### webpack

This project uses [webpack](http://webpack.github.io/) as it's JavaScript build system. Currently it isn't very integrated with Rebel, so the ability to have one command to watch all changes and incrementally build isn't really available (yet).

## Thanks

The foundation of the project is, without a doubt, [refmt-web](https://github.com/Schmavery/refmt-web). This is an awesome project by @Schmavery which does the same refmt in a web page.

[reason-web-toplevel](https://github.com/Engil/reason-web-toplevel), by @Engil was also an awesome project where a lot of the work in this project came from.

Also huge thanks to the [js_of_ocaml](https://github.com/ocsigen/js_of_ocaml) team for building a compiler that pretty effortlessly builds Reason and refmt utils in JS.

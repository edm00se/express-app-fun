# Express App Fun - Notes/Domino Edition

This is a project which:

* establishes a base version of a Node + Express app, which will serve out RESTful API(s) at specified endpoints
* has branches which are modified to show how to use alternative data sources, such as this one
* ability to expose those data sources via RESTful API

## Requirements
This currently requires the use of a 32-bit Node v5 installation, due to available the pre-built binary. As I normally run v4 (LTS) Node in 64-bit mode, I tend to recommend that in this sort of situation, people install and use [nvm](https://github.com/creationix/nvm) for *nix OSes or [nvm-windows](https://github.com/coreybutler/nvm-windows) for Windows OSes; I use both and have had success enough to be happy for the experience.

## Installation and Use
The availability of the [domino-nsf](https://www.npmjs.com/package/domino-nsf) package from npm, courtesy of [Nils Tarjei Hjelme](https://github.com/nthjelme), is in a relatively early stage (current npm published version is 0.0.3). I know he's in progress on converting some of the implementation and making it more robust overall (just [look at the _develop_ branch in the GitHub repository](https://github.com/nthjelme/nodejs-domino/tree/develop)), so do keep an eye out for his implementation instructions in the readme. My implementation here uses the currently published version to npm, 0.0.3, and I expect I'll update this branch after the new version hits.

To clone and get started with this branch:

* `git clone -b domino https://github.com/edm00se/express-app-fun.git`
* run `npm install`
* `npm start`
* open browser to [`127.0.0.1:3333`](http://127.0.0.1:3333)

## About

This is a project repository containing a boiler plate Express 4 RESTful API app in the `iseries` branch. The common application base is contained within the `master` branch.

## License

The MIT License (MIT)
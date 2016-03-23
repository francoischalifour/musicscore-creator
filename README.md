# Music Score Creator

> Music Score Creator is a musical web application offering functionalities such as editing, visualizing and transposing music sheets.

![Music Score Creator](http://francoischalifour.com/img/illustrations/musicscore-creator/main.jpg)

This project aims to get familiar with NodeJS and Express, Polymer 0.5 and web components. It is experimental but still useful to write basic music sheets.

*Built with: NodeJS, Express, Polymer, VexFlow, Mandrill API*

## Write your song

Use the keyboard (available in English and French) to write notes on the sheet. You can also change the notation, time, clef, key, tuning and also activate the tablature.

## Share your creation

Get social! Once you're done editing your music score, you can share it with your friends. It will send it as an email containing the score as an attachment and as a VexFlow code.

![Share your score](http://francoischalifour.com/img/illustrations/musicscore-creator/share.png)

## Import a music score

Do you like a music score you saw online? You can simply import the VexFlow code.

![Import your score](http://francoischalifour.com/img/illustrations/musicscore-creator/import.png)

## Download your sheet

You can finally download your masterpiece as a PDF.

![Download your score](http://francoischalifour.com/img/illustrations/musicscore-creator/download.png)

## Getting started
To build the project, you will first need to install necessary dependencies using [npm](http://npmjs.org) and [Bower](http://bower.io).

Run in the project root:

```sh
$ npm install && bower install
```

Start the server:

```sh
$ npm start
```

Or, if you have no new dependencies, simply:

```sh
$ node server/app
```

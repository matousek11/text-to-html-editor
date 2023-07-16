# Article generator from text to HTML

Input string and id of element container to generate html article content based on string. Application is made in pure javascript.

## Table of content

- [How to install](#how-to-install)
- [How to use](#how-to-use)
  - [Paragraphs](#paragraphs)
  - [Headers](#headers)
  - [Images](#images)
  - [Example](#example)

## How to install

1. Create .npmrc file.
2. Write `@matousek11:registry=https://npm.pkg.github.com` to .npmrc file.
3. Open terminal in root of your project.
4. `npm install/yarn add @matousek11/text-to-html-editor`
5. `import { createArticle } from '@matousek11/text-to-html-editor'`
6. `createArticle([text], [id of element in html])`

## How to use

You will see how to write text to generate articles from it.

### Paragraphs

Just write text.

### Headers

To create headers(h2 in HTML) wrap `#` around text.

Example:

- `#header text#`

### Images

To create images type `<div><div>` this creates container where you can put more images which have to be together. Inside container put image like `[url|alt attribute]`.

Example:

- `<div> [/img/articles/picture.jpg|Alt attribute] <div>`
- `<div> [/img/articles/picture.jpg|Alt attribute] [/img/articles/secondPicture.jpg|Alt attribute] <div>`

### Example

Raw string inserted into first parameter of method `createArticle(rawString, "content")`:

```
#This is header about text bellow#
This is text.
<div>
[/img/image.jpg|Description of image for alt]
<div>
Here are images which should be together:
<div>
[/img/image.jpg|Description of image for alt]
[/img/image.jpg|Description of image for alt]
<div>
```

Generated HTML:

```
<div id="content">
    <h2>This is header about text bellow</h2>
    <p>This is text.</p>
    <div>
        <img src="/img/image.jpg" alt="Description of image for alt"/>
    </div>
    <p>Here are images which should be together:</p>
    <div>
        <img src="/img/image.jpg" alt="Description of image for alt"/>
        <img src="/img/image.jpg" alt="Description of image for alt"/>
    </div>
</div>
```

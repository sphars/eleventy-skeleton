# Eleventy Skeleton

[![Netlify Status](https://api.netlify.com/api/v1/badges/afd45c80-67c8-4a6f-9c21-8860a2d5ea02/deploy-status)](https://app.netlify.com/sites/eleventy-skeleton/deploys)

A simple, basic site template built using [Eleventy](https://www.11ty.dev/) and [YACCK](https://sphars.github.io/yacck/).

## Demo
[Demo site on Netlify](https://eleventy-skeleton.netlify.app/)  
My personal site (coming soon)

## Status

This is a work-in-progress template, but you can use it in it's current state and it'll work great. More features may be added to this (see the [current issues](https://github.com/sphars/eleventy-skeleton/issues) for potential additions).

I will be using this for my own personal site which will have functionality that may or may not be backported to this template.

## Get Started

Requirements: Node.js and NPM

### 1. [Generate](https://github.com/sphars/eleventy-skeleton/generate) a fork of this repo 

### 2. Clone your fork to your machine
```
git clone https://github.com/{YOUR NAME}/{YOUR FORK'S REPO NAME}
```

### 3. Navigate to directory
```
cd {YOUR FORK'S REPO NAME}
```

### 4. Install the dependencies
```
npm install
```

### 5. Edit the metadata in `./src/_data/metadata.json`

### 6. Build
```
npm run build
```

or to live reload as you edit source files:
```
npm run serve
```

## Deploy

You can deploy your built site to any host that serves static websites, such as GitHub Pages, Netlify or Vercel. Be sure to indicate `./dist/` as the directory to serve from.

## Source and Distribution Files

The **source** files are located in the `./src/` directory and the **generated** files are in the `./dist/` directory. This is the directory you want to publish to your deployed site.

Occasionally, the `./dist/` directory gets out of sync when building, usually with files that have since been deleted from source. Run `npm run clean` to remove the `./dist/` folder and its contents. It will error if there is no `./dist/` directory. 

### Directory Structure

```
.
├── dist [built files]  
├── js [config files for eleventy]
└── src [site source files]
    ├── assets [site assets (images/css/js)]
    ├── _data [site data and configs]
    ├── _includes [layouts, partial files]
    ├── posts [all blog post files]
    └── tags [tag pages]
```

### Key Files

```
.
├── .eleventy.js [eleventy configuration options]
├── package.json [npm package config]
├── package-lock.json
├── README.md [you're looking at it]

└── src
    ├── _data
    │   └── metadata.json [site metadata]
    └── posts
        └── example-post.md [example post]
```

## Creating and Customizing

By default, templates are written using the [Nunjucks](https://mozilla.github.io/nunjucks/) templating language. Blog post templates (in `./src/posts/`) are written in Markdown. 

View the [Eleventy docs](https://www.11ty.dev/docs/) for more instructions on creating your content.

### Theming

I've written a custom theme for this site using my classless CSS framework, [YACCK](https://sphars.github.io/yacck/). The default font stack is the system font stack, pulled in from YACCK. Feel free to override this in `./src/_includes/partials/_head.njk` and in the CSS file.

If you don't want to use YACCK, remove the references in `_head.njk` and use whatever you'd like. The generated HTML structure follows HTML5 standard conventions and tries to keep it as simple as possible. There are some extra styles in `./src/assets/css/styles.css` you may or may not want as well.

Change out the logo and other images in `./src/assets/` to your own.

## Documentation and Other Examples

### Docs
* [Eleventy docs](https://www.11ty.dev/docs/) 
* [Nunjucks docs](https://mozilla.github.io/nunjucks/)
* [Markdown syntax](https://www.markdownguide.org/)

### Examples
* [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog) 
* [pborenstein.com](https://github.com/pborenstein/pborenstein.com)
* [Eleventy Walkthrough](https://rphunt.github.io/eleventy-walkthrough/)
* [Let's Learn Eleventy](https://www.learnwithjason.dev/let-s-learn-eleventy)

## Acknowledgements
Extended functionality following examples from [pborenstein.com](https://github.com/pborenstein/pborenstein.com)

# DOCUMENTATION

[Live Preview Here](http://enterprisewide.uat.liquidvisual.net)

---

## Installation &  Setup

This project is built with [Jekyll 2.5.3](http://jekyllrb.com) - a static site generator. It also uses [Grunt.js](http://gruntjs.com) - a JavaScript task runner and [Bower](http://bower.io) for package management. This workflow was scaffolded with a tweaked [Yeoman](http://yeoman.io) generator called [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb) which automates the process of setting it all up.

### On Mac:

You may need to install Ruby, Ruby Gems, NodeJS & Git. There are detailed instructions on the [Jekyll](http://jekyllrb.com/docs/installation/) website.

    git clone git@github.com:liquidvisual/entwde-0715.git
    cd entwde-0715
    bundle install
    npm install
    bower install
    grunt serve
    # => Now browse to http://localhost:9292

For production:

    grunt build # => to concat and minify etc

### On Windows:

Jekyll is very easy to set up on Mac OS X or Linux. On Windows, not so much. These resources should help:

[Jekyll Docs on Windows](http://jekyllrb.com/docs/windows/#installation)
[Step by Step Guide](http://jekyll-windows.juthilo.com)

---

## Referencing the Build Folder

The online repo that stores the build folder named **/dist** (generated from /src) can be found on a separate branch - under the **gh-pages** branch of this very repo.

[https://github.com/liquidvisual/entwde-0715/tree/gh-pages](https://github.com/liquidvisual/entwde-0715/tree/gh-pages)

Feel free to use it as a reference. Although it's advantageous to know how the source files are organised since the structure aims to mimic a back-end environment with proper template inheritance. Many templating questions have already been solved and this can be a benefit if you draw from the source as well as the final compiled **build** directory.

Once you get the hang of reading Jekyll templates - you'll be able to breeze through, copy-pasting everything and substituting the basic templating syntax for your own.

---

## Quick Start

**NOTE:** If you happen to use [Sublime Text](http://www.sublimetext.com/3) for a code IDE - it has a really handy plugin for syntax highlighting Jekyll templates. You can grab the [Jekyll package](https://sublime.wbond.net/packages/Jekyll) via [package control](https://sublime.wbond.net).

### 01. Copy Over /assets Directory

Jump into the [dist directory](https://github.com/liquidvisual/entwde-0715/tree/gh-pages) and grab the *entire* **/assets** folder. Put it into your project's root directory. This contains all the compiled CSS, fonts, images and JavaScript. This is important as all paths are root relative to the **/assets** folder.

That's all you'll need from the **/dist** directory. From this point on, all the action is in the **/src**.

### 02. Access /_layouts/master.html

Start with this and substitute the template logic for your own. When it comes to the assets, they compile into **/assets** on build so you'll only need to do a bit of substitution.

You can replace this:

    <!-- build:css /assets/css/minified.css -->
      <link rel="stylesheet" href="/css/some-css-file.css">
      <link rel="stylesheet" href="/css/some-css-file.css">
      <link rel="stylesheet" href="/css/some-css-file.css">
      <link rel="stylesheet" href="/css/some-css-file.css">
      <link rel="stylesheet" href="/css/some-css-file.css">
    <!-- endbuild -->

With this:

    <link rel="stylesheet" href="/assets/css/minified.css">

The same applies to Javascript. That's probably the trickiest bit that's not so obvious. The end result will look like this:

    <script src="/scripts/priority-minified.js"></script> <!-- In the head -->

    <script src="/scripts/minified.js"></script> <!-- Before closing body -->

### 03. Copy Over Partials in /_includes

Templates reference partials from this folder.

---

## How Templating Works

**NOTE:** All of these folders live inside **/src**

### /_layouts

Layouts are stored in the **/_layouts** folder and have 3 levels of heirarchy. They inherit from the bottom up.

1. master.html
2. internal.html
3. Page Layout (eg. homepage.html)

### /_includes

Some templates will draw on partials, which are just small HTML chunks inside the **/_includes** folder. These includes will sometimes use global template variables from their parent template.

### /_data

Some templates and includes will draw data (such as the navigation and locations listing) from YAML files located inside **/_data**. This keeps things external and templates are able to use basic loops and conditionals to interact with it, similiar to the logic in the back-end.


### /pages

Each Jekyll page is initiated with a single MARKDOWN file acting as the point of entry. These files contain meta data, permalinks and page specific variables which get passed into the layouts. They also contain body text which is stored as:

    {{ content }}

In the YAML front matter - these leaf pages will specify a template to use, eg. /user/preferences.html which will start at the page layouts and inherit up the chain.

### Front Matter

Every layout and markdown file (except the master) contain front matter in the form of YAML at the head of the document. This is used to specify layouts and page variables. Some data is stubbed inside the actual layout - for hinting and quick access.

As a general rule of thumb; if variables are in the front-matter, they're page variables and user editable. If they're inside the actual layout - it's for layout logic.

---

## Updating Compiled Assets

### The Quick Way

Simply create a new stylesheet or Javascript and link to it in the **master.html**. These files can store quick fixes and time sensitive updates. At a later time, they can be absorbed into the Sass files and recompiled with a **grunt build**.

In future, when updates are made - one only needs to copy over the **dist/assets** folder from the remote repo.
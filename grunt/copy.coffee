module.exports =
  config:
    expand: true
    cwd: "src"
    src: "CNAME"
    dest: "dev/"

  css:
   expand: true
   cwd: "dev"
   src: "styles/**/*.{css,scss}"
   dest: "dev/"

  html:
    expand: true
    cwd: "src"
    src: ["**/*.html", "!scripts/**/*"]
    dest: "dev/"

  js:
    expand: true
    cwd: "src"
    src: "**/*.js"
    dest: "dev/"

  fonts:
    expand: true
    flatten: true
    src: "**/*.{eot,woff,ttf}"
    dest: "dev/fonts"

  dist:
    expand: true
    cwd: "dev"
    src: ["index.html", "images/**/*", "fonts/**/*", "api/**/*"]
    dest: "dist"

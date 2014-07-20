module.exports =
  html:
    files: ["src/**/*.html", "!src/scripts/**/*.html"]
    tasks: [
      "newer:copy:html"
    ]

  templates:
    files: ["src/scripts/**/*.html"]
    tasks: [
      "html2js"
    ]

  css:
    files: ["src/**/*.scss"]
    tasks: [
      "css"
    ]

  scripts:
    files: ["src/scripts/**/*.js", "spec/**/*.coffee"]
    tasks: [
      "scripts"
    ]

  vendor:
    files: ["src/vendor/*.js"]
    tasks: [
      "vendor"
    ]

  assets:
    files: [
      "src/images/**/*"
      "src/fonts/**/*"
    ]
    tasks: [
      "assets"
    ]
  
  yaml:
    files: ["src/**/*.yaml"]
    tasks: ["dataModels"]

  options:
    livereload: true

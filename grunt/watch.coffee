module.exports =
  grunt:
    files: ["grunt/**/*.coffee"]

  bowerComponents:
    files: ["grunt/bowercopy.coffee"]
    task: [
      "bowercopy"
    ]

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
    files: ["src/scripts/**/*.js", "spec/**/*.coffee", "grunt/concat.coffee"]
    tasks: [
      "scripts"
    ]
    options:
      message: "hinting succesful"

  vendor:
    files: ["src/vendor/*.js", "grunt/concat.coffee"]
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

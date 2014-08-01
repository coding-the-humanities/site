module.exports =
  posts:
    files: [
      expand: true
      cwd: "src/yaml"
      src: ["posts/**/*.yaml"]
      dest: "src/yaml/tmp/"
    ]

  pilot:
    files: [
      expand: true
      cwd: "src/yaml"
      src: ["pilot/**/*.yaml"]
      dest: "src/yaml/tmp/"
    ]

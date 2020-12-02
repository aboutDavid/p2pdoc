module.exports = {
  installPackages: true,
  packages: [
    "normalize.min.css",
    "@editorjs/editorjs",
    "@editorjs/quote",
    "@editorjs/inline-code",
    "@editorjs/underline",
    "@editorjs/marker",
    "@editorjs/list",
    "@editorjs/code",
    "@editorjs/table",
    "@editorjs/delimiter",
    "@editorjs/simple-image",
    "@editorjs/header"
  ],
  runCmdAfterInstall: false,
  runAfterInstall: "echo Finished installing!"
};

module.exports = function htmlTemplate({ title, repoName }) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width
    initial-scale=1
    user-scalable=no"
  />
  <title>${ title }</title>
  <link
    href="https://fonts.googleapis.com/css?family=Lobster+Two:400,700"
    rel="stylesheet"
    type="text/css"
  >
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700"
    rel="stylesheet"
    type="text/css"
  >
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/prism/1.3.0/themes/prism-tomorrow.css"
  >
</head>
<body>
  <div id="root"></div>
  <script
    src="https://cdn.jsdelivr.net/prism/1.3.0/prism.js"
    type="text/javascript"
    >
  </script>
  <script
    src="https://cdn.jsdelivr.net/prism/1.3.0/components/prism-jsx.min.js"
    type="text/javascript"
    >
  </script>
  <script src="/${ repoName ? repoName : 'dist' }/bundle.js"></script>
</body>
</html>
  `;
};

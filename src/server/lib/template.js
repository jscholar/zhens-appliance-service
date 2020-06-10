const document = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zhen's Appliance Service</title>
  </head>
  <body>
    <!-- App -->
  </body>
  </html>
`;

const template = (app) => {
  return document.replace('<!-- App -->', app);
}

export default template;

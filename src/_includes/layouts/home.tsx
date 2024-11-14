export default ({ title, children }: Lume.Data, _helpers: Lume.Helpers) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="stylesheet" href="/styles/uno.css" />
      <link rel="stylesheet" href="/styles/global.css" />
      <link rel="stylesheet" href="/styles/atom-one-dark.css" />
    </head>
    <body className="bg-gray-100">
      {children}
    </body>
  </html>
);

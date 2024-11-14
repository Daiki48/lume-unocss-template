export default ({ title, children }: Lume.Data, _helpers: Lume.Helpers) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{`${title} | Lume + UnoCSS template`}</title>
      <link rel="stylesheet" href="/styles/uno.css" />
      <link rel="stylesheet" href="/styles/global.css" />
      <link rel="stylesheet" href="/styles/atom-one-dark.css" />
    </head>
    <body className="container mx-auto bg-gray-100">
      <header className="text-center text-4xl font-bold my-8">
        {title}
      </header>
      <main className="flex justify-center items-start max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl break-words">
          {children}
        </div>
      </main>
    </body>
  </html>
);

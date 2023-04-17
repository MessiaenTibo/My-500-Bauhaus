import './globals.css'
// import 'https://use.typekit.net/zwr5qux.css' // Typekit

export const metadata = {
  title: 'Create Next App',
  description: '1 Bauhaus inspired design system for Next.js',
  assets:[
    'https://use.typekit.net/zwr5qux.css',
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zwr5qux.css" />
      </head>
      <body>
        <div>
          <p>Here, Have a unicorn🦄!</p>
          {children}
        </div>
      </body>
    </html>
  )
}

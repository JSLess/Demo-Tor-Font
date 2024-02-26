
export { middleware as servePage }

import { pixelify } from 'Font'
import { Context } from 'Oak'
import { render } from 'Preact/Render'


function middleware (
    context : Context
){

    const text = context.request.url.searchParams.get('Text')
        ?? `Use the search parameter 'Text' to change this text.`

    const info = `A Tor compatible custom font`

    const ascii = pixelify(text).split('\n').join('<br>')

    context.response.body = `<!DOCTYPE html>` + render(
        <html>
            <head>

                <link
                    href = '/Style.css'
                    rel = 'stylesheet'
                />

                <script
                    type = 'module'
                    src = '/Script.js'
                />

            </head>
            <body>

                <div
                    dangerouslySetInnerHTML = {{ __html : pixelify(info).split('\n').join('<br>') }}
                    class = 'Text'
                />

                <div
                    dangerouslySetInnerHTML = {{ __html : ascii }}
                    class = 'Text'
                />

                <a
                    children = { 'GitHub' }
                    class = 'GitHub'
                    href = 'https://github.com/JSLess/Demo-Tor-Font'
                />

            </body>
        </html>
    )
}

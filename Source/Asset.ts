
export { serveAsset }

import { Context } from 'Oak'


const root = `${ Deno.cwd() }/Source/`


async function serveAsset ( context : Context ){

    const isStyle = context.request.url.pathname.includes('Style')

    const path = ( isStyle )
        ? `Style.css`
        : `Script.js`

    await context.send({ root , path })
}

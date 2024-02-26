
import { Application , Router } from 'Oak'
import { serveAsset } from './Asset.ts'
import { servePage } from './Page.tsx'


const app = new Application({
    logErrors : true
})


const router = new Router

router.get('/Script.js',serveAsset)
router.get('/Style.css',serveAsset)
router.get('/',servePage)


app.use(router.routes())
app.use(router.allowedMethods())


await app.listen({ port : 8000 })

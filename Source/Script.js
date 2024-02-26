

let zoom = 1;


const html = document.documentElement


document.addEventListener('wheel',( event ) => {

    event.preventDefault()

    zoom -= event.deltaY * 0.0004

    zoom = Math.min(Math.max(zoom,0),1)

    html.style.setProperty('--Zoom',zoom)

},{ passive : false })
const orgs = [
    { name: "Organization 1", ceo: "CEO 1", year: "1996" },
    { name: "Organization 2", ceo: "CEO 2", year: "1996" },
    { name: "Organization 3", ceo: "CEO 3", year: "1997" },
    { name: "Organization 4", ceo: "CEO 4", year: "1998" },
    { name: "Organization 5", ceo: "CEO 5", year: "1999" },
    { name: "Organization 6", ceo: "CEO 6", year: "2001" },
    { name: "Organization 7", ceo: "CEO 7", year: "2002" },
    { name: "Organization 8", ceo: "CEO 8", year: "2003" },
    { name: "Organization 9", ceo: "CEO 9", year: "2006" },
    { name: "Organization 10", ceo: "CEO 10", year: "2007" },
]

document.querySelectorAll('.logo').forEach((logo, index) => {
    logo.addEventListener('click', function(event){
        const orgData = orgs[index]
        
        // static
        document.getElementById('orgName').textContent = orgData.name
        document.getElementById('ceo').textContent = orgData.ceo
        document.getElementById('year').textContent = orgData.year

        // dynamic
        document.getElementById('mouseButton').textContent = getMouseButton(event)
        document.getElementById('coordinates').textContent = `Left: ${event.clientX}px, Top: ${event.clientY}px`
    })
})

function getMouseButton(event){
    if (event.button === 0) return "Left Button"
    if (event.button === 1) return "Middle Button"
    if (event.button === 2) return "Right Button"
    return "Unknown Button"
}

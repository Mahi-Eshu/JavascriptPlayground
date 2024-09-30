let queue1 = document.getElementById('queue1')
let queue2 = document.getElementById('queue2')

let queue1People = 4
let queue2People = 5
let guyInQueue2 = true
let isGuyMoving = false
let personSpacing = 40
let svgHeight = 400

function drawQueue(svg, people, isGuyInQueue){
  while (svg.lastChild && svg.lastChild.tagName === 'circle'){
    svg.removeChild(svg.lastChild)
  }
  const totalHeight = (people - 1) * personSpacing;
  for (let i=0; i<people; i++){
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    let cy = svgHeight - totalHeight + (i * personSpacing) - 40;
    circle.setAttribute("cx", "50")
    circle.setAttribute("cy", cy)
    circle.setAttribute("r", 15)
    circle.classList.add(i === 0 && isGuyInQueue ? 'guy' : 'person')
    svg.appendChild(circle)
  }
}

function updateQueues(){
  drawQueue(queue1, queue1People, !guyInQueue2 && !isGuyMoving)
  drawQueue(queue2, queue2People, guyInQueue2 && !isGuyMoving)
}

function startStory(){
  updateQueues()
  console.log("Guy stands in queue2.")
  
  setTimeout(() => {
    guyInQueue2 = false
    queue2People -= 1
    queue1People += 1
    updateQueues()
    console.log("Guy switches to queue1.")
  }, 2000)

  setTimeout(() => {
    queue2People -= 1
    updateQueues()
    console.log("1 people from queue2 got their tickets.")
  }, 4000)

  setTimeout(() => {
    queue1People -= 1
    updateQueues()
    console.log("1 person from queue1 got their ticket.")
  }, 6000)

  setTimeout(() => {
    queue1People -= 1
    isGuyMoving = true;
    updateQueues()
    console.log("1 person from queue1 got their ticket.")
  }, 8000)

  setTimeout(() => {
    isGuyMoving = true;
    updateQueues()
    console.log("Guy is confused and standing between the queues.")
  }, 10000)

  setTimeout(() => {
    queue1People -= 1
    queue2People -= 1
    isGuyMoving = false
    updateQueues()
    console.log("2 people from each queue got their tickets.")
  }, 12000)

  setTimeout(() => {
    queue1People += 3
    updateQueues()
    console.log("3 new people enter queue1.")
  }, 14000)

  setTimeout(() => {
    guyInQueue2 = true
    queue2People += 1
    updateQueues()
    console.log("Guy jumps back to queue2.")
  }, 16000)

  setTimeout(() => {
    queue1People -= 2
    updateQueues()
    console.log("2 person from queue1 got their ticket.")
  }, 18000)

  setTimeout(() => {
    console.log("Clerk from queue2 goes on break.")
  }, 20000)

  setTimeout(() => {
    queue2People -= 1
    queue1People += 1
    updateQueues()
    console.log("1 person from queue2 moves to queue1.")
  }, 22000)

  setTimeout(() => {
    queue1People -= 1
    updateQueues()
    console.log("1 person from queue1 got their ticket.")
  }, 24000)

  setTimeout(() => {
    guyInQueue2 = false
    queue1People += 1
    queue2People -= 1
    updateQueues()
    console.log("Guy moves to queue1.")
  }, 26000)

  setTimeout(() => {
    console.log("Clerk from queue2 comes back.")
  }, 28000)

  setTimeout(() => {
    queue1People -= 2
    queue2People += 2
    updateQueues()
    console.log("2 people from queue1 move to queue2.")
  }, 30000)

  setTimeout(() => {
    queue2People -= 1
    updateQueues()
    console.log("1 person from Queue 2 goes out")
  }, 32000)

  setTimeout(() => {
    queue2People -= 1
    updateQueues()
    console.log("Queue 2 moves fast, all people in queue2 got their tickets.")
  }, 34000)

  setTimeout(() => {
    queue1People -= 1
    queue2People -= 1
    updateQueues()
    console.log("1 person from queue1 got their ticket.")
  }, 36000)

  setTimeout(() => {
    console.log("Tickets sold out. The red guy did not get his ticket and is left standing alone.")
  }, 38000)
}

startStory()

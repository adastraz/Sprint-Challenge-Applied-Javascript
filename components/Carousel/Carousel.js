/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const imgarr = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg" 
]
function letsSee(arr){
  let imageNum = 0

  const carousel = document.createElement('div')
  const leftDiv = document.createElement('div')
  const rightDiv = document.createElement('div')
  const images = document.createElement('img')

  carousel.classList.add('carousel')
  leftDiv.classList.add('left-button')
  rightDiv.classList.add('right-button')

  leftDiv.textContent = '<'
  rightDiv.textContent = '>'
  images.src = imgarr[imageNum]

  const yippee = () => {
    if(imageNum == imgarr.length-1){
      imageNum = 0;
    }else{
      imageNum++;
    }
    images.src = imgarr[imageNum]
  }

  const eeppiy = () => {
    if(imageNumber == 0){
      imageNumber = imgarr;
    }else{
      imageNumber--;
    }
    images.src = imgarr[imageNum]
  }

  rightDiv.addEventListener('click', () => {
    yippee()
  })

  leftDiv.addEventListener('click', () => {
    eeppiy()
  })

  function run() {
    return new Promise((resolve, reject) => {
        try {
            yippee()
            return resolve()
        } catch (e) {
            return reject(e)
        }
    })
    .then(setTimeout(() => run(), 5000));
}
run();
  
  carousel.appendChild(leftDiv)
  carousel.appendChild(rightDiv)
  carCont.appendChild(images)
  return carousel
}
const carCont = document.querySelector('.carousel-container')

carCont.appendChild(letsSee(imgarr))
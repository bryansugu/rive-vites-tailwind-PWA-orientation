import './style.css'
import './tree.ts'
import './button.ts'
import './sound.js'

console.log(Animation)
document.querySelector('#app').innerHTML = `

    <img style=" width: 50%; margin-left: auto; margin-right: auto; " src="./title.svg"/>
<audio id="mi-audio" src="./horse.mp3"></audio>
<audio autoplay loop>
    <source src="./forest.mp3" type="audio/mp3">
        Tu navegador no soporta audio HTML5.d
</audio>
   <canvas id="buton-canvas" class=""></canvas>
   <div class="back-animation">
   <canvas id="rive-canvas"></canvas>
   </div>
`
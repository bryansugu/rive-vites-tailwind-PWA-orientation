import RiveCanvas, { File, Layout, Fit, Alignment } from '@rive-app/canvas-advanced';

export default async function main() {
  
const audio = new Audio('./forest.mp3');
  
  const rive = await RiveCanvas({
    locateFile: (_) => `https://unpkg.com/@rive-app/canvas-advanced@1.0.103/rive.wasm`
  });
  const canvas = document.getElementById('buton-canvas') as HTMLCanvasElement;
  canvas.height = 1000;
  canvas.width = 4500;

  canvas.addEventListener('click', function() {
    audio.play();
    //audio.muted = false;
  });
  window.addEventListener('beforeinstallprompt', function(event) {
  // Carga el archivo de sonido
  audio.muted = true;
  // Reproduce el sonido
  audio.play();
  });

  const renderer = rive.makeRenderer(canvas);
  const bytes = await (
    await fetch(new Request('./button.riv'))
  ).arrayBuffer();

  // import File as a named import from the Rive dependency
  const file = (await rive.load(new Uint8Array(bytes))) as File;

  const artboard = file.artboardByName('button_Home');
  let animation = new rive.LinearAnimationInstance(
    artboard.animationByName('Timeline 2'),
    artboard
  );

  let lastTime = 0;
  function renderLoop(time) {
    if (!lastTime) {
      lastTime = time;
    }
    const elapsedTimeMs = time - lastTime;
    const elapsedTimeSec = elapsedTimeMs / 1000;
    lastTime = time;
    renderer.clear();
    artboard.advance(elapsedTimeSec);
    animation.advance(elapsedTimeSec);
    animation.apply(1);
    renderer.save();

    renderer.align(
      rive.Fit.cover,

      rive.Alignment.center,
      {
        minX: 0,
        minY: 0,
        maxX: canvas.width,
        maxY: canvas.height
      },
      artboard.bounds,
    );


    artboard.draw(renderer);
    renderer.restore();
    rive.requestAnimationFrame(renderLoop);
  }
  rive.requestAnimationFrame(renderLoop);
}
main();
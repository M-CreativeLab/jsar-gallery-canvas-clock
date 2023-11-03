import { startClock } from './clock';

const canvasPanel = spatialDocument.getSpatialObjectById('canvas');
const canvas = canvasPanel.attachCanvasTexture(512, 512);
const ctx = canvas.getContext();

startClock(ctx);
setInterval(() => {
  startClock(ctx);
  canvas.update();
}, 1000);

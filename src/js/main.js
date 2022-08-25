import startGame from "./components/game/game";


const FIREBALL_SIZE = 22;
const WIZARD_WIDTH = 70;
const WIZARD_SPEED = 3;

const getFireballSpeed = (isMovingLeft) => isMovingLeft ? 2 : 5;
const getWizardHeight = () => 1.337 * WIZARD_WIDTH;
const getWizardX = (gameFieldWidth) => (gameFieldWidth - WIZARD_WIDTH) / 2;
const getWizardY = (height) => height / 2 * 3;

startGame(
  FIREBALL_SIZE, 
  getFireballSpeed,
  WIZARD_WIDTH,
  WIZARD_SPEED,
  getWizardHeight,
  getWizardX,
  getWizardY,
);



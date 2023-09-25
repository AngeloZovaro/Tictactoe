import GameState from "./GameState";

//faz o botao do resete quando acaba o jogo
function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className="reset-button" >
      Jogar de novo
    </button>
  );
  
}

export default Reset;

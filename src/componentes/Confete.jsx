import GameState from "./GameState";

//função que ativa o efeito de confete caso alguem ganhe
function Confete({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return (
      <div class="confetti-container"></div>
      
      );
    case GameState.playerXWins:
      return <div class="confettix-container"></div>;
    case GameState.draw:
      return <div></div>;
    default:
      return <></>;
  }
}

export default Confete;

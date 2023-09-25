import GameState from "./GameState";

//exibe na tela quem ganhou ou se empatou depois do final do jogo
function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return (
      <div className="game-over">"O" Ganhou!</div>
      
      );
    case GameState.playerXWins:
      return <div className="game-over">"X" Ganhou!</div>;
    case GameState.draw:
      return <div className="game-over">Empate!</div>;
    default:
      return <></>;
  }
}

export default GameOver;

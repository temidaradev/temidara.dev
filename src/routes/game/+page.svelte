<script>
  import Game from "../../components/Game.svelte";
  import Sakura from "../../components/Sakura.svelte";
</script>

<div class="game-container">
  <div class="sakura-overlay">
    <Sakura />
  </div>

  <h1 class="game-title">The Unspooled Self</h1>
  <p class="game-subtitle">A Journey of Self-Discovery</p>

  <Game />
</div>

<style>
  .game-container {
    position: relative;
    min-height: 100vh;
    padding: 2rem 1rem;
    background: linear-gradient(
      135deg,
      rgba(13, 12, 33, 0.95) 0%,
      rgba(45, 41, 87, 0.8) 100%
    );
    overflow: hidden;
  }

  .sakura-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.6;
  }

  .game-title {
    font-size: 3rem;
    font-weight: bold;
    color: #bd93f9; /* Purple color */
    text-align: center;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 15px rgba(189, 147, 249, 0.7);
    position: relative;
    z-index: 2;
  }

  .game-subtitle {
    font-size: 1.2rem;
    color: #ff79c6; /* Pink color */
    text-align: center;
    margin-bottom: 2rem;
    text-shadow: 0 0 8px rgba(255, 121, 198, 0.5);
    position: relative;
    z-index: 2;
  }

  /* Anime-style decorative elements */
  .game-container::before,
  .game-container::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    z-index: 1;
    opacity: 0.3;
    pointer-events: none;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .game-container::before {
    top: 5%;
    left: 5%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'%3E%3Ccircle cx='50' cy='50' r='40' stroke='%23bd93f9' stroke-width='2'/%3E%3Ccircle cx='50' cy='50' r='30' stroke='%23bd93f9' stroke-width='1'/%3E%3Cpath d='M50,10 L50,90 M10,50 L90,50' stroke='%23bd93f9' stroke-width='1' opacity='0.6'/%3E%3C/svg%3E");
    animation: pulse-rotate 15s infinite linear;
  }

  .game-container::after {
    bottom: 5%;
    right: 5%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'%3E%3Cpath d='M20,20 L80,80 M20,80 L80,20' stroke='%23ff79c6' stroke-width='2'/%3E%3Ccircle cx='50' cy='50' r='40' stroke='%23ff79c6' stroke-width='2' stroke-dasharray='10 5'/%3E%3C/svg%3E");
    animation: pulse-rotate 20s infinite linear reverse;
  }

  @keyframes pulse-rotate {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.05);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }

  @media (min-width: 768px) {
    .game-container {
      padding: 3rem;
    }

    .game-title {
      font-size: 4rem;
    }

    .game-subtitle {
      font-size: 1.5rem;
    }
  }
</style>

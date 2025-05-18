<script>
  import Neuratalk from "../../components/Neuratalk.svelte";
  import Sakura from "../../components/Sakura.svelte";
</script>

<div class="neuratalk-container">
  <div class="sakura-overlay">
    <Sakura />
  </div>

  <h1 class="neuratalk-title">NeuraTalk</h1>
  <p class="neuratalk-subtitle">Your AI Companion</p>

  <Neuratalk />
</div>

<style>
  .neuratalk-container {
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

  .neuratalk-title {
    font-size: 3rem;
    font-weight: bold;
    color: #ff79c6;
    text-align: center;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 15px rgba(255, 121, 198, 0.7);
    position: relative;
    z-index: 2;
  }

  .neuratalk-subtitle {
    font-size: 1.2rem;
    color: #bd93f9;
    text-align: center;
    margin-bottom: 2rem;
    text-shadow: 0 0 8px rgba(189, 147, 249, 0.5);
    position: relative;
    z-index: 2;
  }

  @media (min-width: 768px) {
    .neuratalk-container {
      padding: 3rem;
    }

    .neuratalk-title {
      font-size: 4rem;
    }

    .neuratalk-subtitle {
      font-size: 1.5rem;
    }
  }
</style>

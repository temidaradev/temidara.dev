<script>
  // Increased the number of petals for a more visible effect
  let petals = Array(40).fill(null);
</script>

<div class="fixed w-full h-full pointer-events-none z-0">
  {#each petals as _, i}
    <div
      class="absolute animate-float"
      style="
        left: {Math.random() * 100}%;
        animation-delay: -{Math.random() * 20}s;
        animation-duration: {15 + Math.random() * 10}s
      "
    >
      <div
        class="w-5 h-5 bg-gradient-to-br from-pink-200/80 to-pink-300/70 rotate-45 rounded-tl-3xl rounded-br-3xl animate-neon-glow"
        style="box-shadow: 0 0 10px rgba(236, 72, 153, 0.6);"
      ></div>
    </div>
  {/each}
</div>

<style>
  @keyframes float {
    0% {
      transform: translateY(-10%) translateX(0) rotate(0deg);
    }
    25% {
      transform: translateY(25vh) translateX(30px) rotate(90deg);
    }
    50% {
      transform: translateY(50vh) translateX(-30px) rotate(180deg);
    }
    75% {
      transform: translateY(75vh) translateX(30px) rotate(270deg);
    }
    100% {
      transform: translateY(100vh) translateX(0) rotate(360deg);
    }
  }

  .animate-float {
    animation: float ease-in-out infinite;
  }
</style>

<script>
  let petals = Array(15).fill(null);
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
        class="w-4 h-4 bg-gradient-to-br from-pink-200/40 to-pink-300/30 rotate-45 rounded-tl-3xl rounded-br-3xl backdrop-blur-sm animate-neon-glow"
      ></div>
    </div>
  {/each}
</div>

<style>
  @keyframes float {
    0% {
      transform: translateY(-10%) rotate(0deg);
    }
    50% {
      transform: translateY(50vh) rotate(180deg);
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
    }
  }

  .animate-float {
    animation: float linear infinite;
  }
</style>

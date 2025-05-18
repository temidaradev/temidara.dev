<script>
  import { onMount } from "svelte";

  // Responsive petal count based on device
  let petals = [];
  let isMobile = false;

  onMount(() => {
    // Check if device is mobile
    isMobile = window.innerWidth < 768;

    // Adjust petal count based on device
    const count = isMobile ? 15 : 40;
    petals = Array(count).fill(null);

    // Add resize listener to adjust petal count dynamically
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        isMobile = newIsMobile;
        const newCount = isMobile ? 15 : 40;
        petals = Array(newCount).fill(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
</script>

<div class="fixed w-full h-full pointer-events-none z-0">
  {#each petals as _, i}
    <div
      class="absolute animate-float"
      style="
        left: {Math.random() * 100}%;
        animation-delay: -{Math.random() * 20}s;
        animation-duration: {(isMobile ? 10 : 15) + Math.random() * 10}s;
        will-change: transform;
      "
    >
      <div
        class="bg-gradient-to-br from-pink-200/90 to-pink-300/80 rotate-45 rounded-tl-3xl rounded-br-3xl animate-neon-glow"
        style="
          width: {isMobile ? 8 : 15}px;
          height: {isMobile ? 8 : 15}px;
          box-shadow: 0 0 {isMobile ? 10 : 20}px rgba(236, 72, 153, {isMobile
          ? 0.6
          : 0.8});
        "
      ></div>
    </div>
  {/each}
</div>

<style>
  @keyframes float {
    0% {
      transform: translateY(-10%) translateX(0) rotate(0deg) scale(0.8);
      opacity: 0;
    }
    10% {
      opacity: 1;
      transform: translateY(5vh) translateX(10px) rotate(36deg) scale(1);
    }
    25% {
      transform: translateY(25vh) translateX(30px) rotate(90deg) scale(1.1);
    }
    40% {
      transform: translateY(40vh) translateX(15px) rotate(144deg) scale(1);
    }
    50% {
      transform: translateY(50vh) translateX(-30px) rotate(180deg) scale(0.9);
    }
    65% {
      transform: translateY(65vh) translateX(-10px) rotate(234deg) scale(1);
    }
    75% {
      transform: translateY(75vh) translateX(30px) rotate(270deg) scale(1.1);
    }
    90% {
      transform: translateY(90vh) translateX(20px) rotate(324deg) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) translateX(0) rotate(360deg) scale(0.8);
      opacity: 0;
    }
  }

  @keyframes sway {
    0%,
    100% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(5deg);
    }
  }

  .animate-float {
    animation: float ease-in-out infinite;
  }

  /* Add a subtle sway to each petal */
  .animate-float > div {
    animation: sway 3s ease-in-out infinite;
    transform-origin: center;
  }
</style>

<div class="fixed inset-0 w-full h-full -z-10">
  <div class="absolute inset-0 bg-[#0D0B1F]">
    <div
      class="absolute top-1/4 right-1/4 w-96 h-96 opacity-40 animate-spin-slow"
    >
      <div
        class="absolute inset-0 rounded-full border-2 border-pink-400/60"
      ></div>
      <div
        class="absolute inset-2 rounded-full border-2 border-purple-400/60"
      ></div>
      <div
        class="absolute inset-4 rounded-full border-2 border-pink-400/60"
      ></div>
      {#each Array(12) as _, i}
        <div
          class="absolute w-5 h-5 text-pink-400 animate-glow"
          style="
            left: 50%;
            top: 50%;
            transform: rotate({i * 30}deg) translateY(-150px) rotate(-{i *
            30}deg);
            text-shadow: 0 0 5px rgba(236, 72, 153, 0.8);
          "
        >
          ★
        </div>
      {/each}
    </div>

    <div
      class="absolute inset-0 opacity-70 bg-gradient-radial from-purple-600/40 via-pink-500/30 to-transparent animate-pulse"
    ></div>
    <div
      class="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_50%_50%,rgba(255,105,180,0.5),transparent_70%)] animate-pulse-slow"
    ></div>
    <div
      class="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,rgba(255,105,180,0.3)_1px,transparent_1px)] bg-[length:20px_20px] opacity-50"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-pink-500/20 animate-pulse-slow"
    ></div>

    {#each Array(70) as _, i}
      <div
        class="absolute rounded-full bg-gradient-to-r from-pink-400 to-purple-400 animate-magic-spark"
        style="
          left: {Math.random() * 100}%;
          top: {Math.random() * 100}%;
          width: {2 + Math.random() * 4}px;
          height: {2 + Math.random() * 4}px;
          animation-delay: -{Math.random() * 5}s;
          animation-duration: {3 + Math.random() * 4}s;
          opacity: 0.7;
          box-shadow: 0 0 5px rgba(236, 72, 153, 0.8);
        "
      ></div>
    {/each}

    {#each Array(3) as _, i}
      <div
        class="absolute h-full w-[3px] bg-gradient-to-b from-transparent via-pink-400/70 to-transparent animate-power-surge"
        style="
          left: {20 + i * 30}%;
          animation-delay: -{i * 0.5}s;
          box-shadow: 0 0 8px rgba(236, 72, 153, 0.7);
        "
      ></div>
    {/each}
  </div>

  <div class="absolute inset-0 overflow-hidden">
    {#each Array(8) as _, i}
      <div
        class="absolute h-[2px] bg-gradient-to-r from-transparent via-pink-500/60 to-transparent w-full transform animate-slide-right"
        style="
          top: {10 + i * 12}%;
          animation-delay: -{Math.random() * 5}s;
          animation-duration: {20 + Math.random() * 10}s;
        "
      ></div>
    {/each}
    {#each Array(5) as _, i}
      <div
        class="absolute w-[2px] bg-gradient-to-b from-transparent via-purple-500/60 to-transparent h-full transform animate-slide-down"
        style="
          left: {15 + i * 20}%;
          animation-delay: -{Math.random() * 5}s;
          animation-duration: {15 + Math.random() * 10}s;
        "
      ></div>
    {/each}
  </div>

  <div class="absolute inset-0">
    {#each Array(40) as _, i}
      <div
        class="absolute rounded-full bg-gradient-to-r from-pink-400/50 to-purple-400/50 animate-float-particle"
        style="
          left: {Math.random() * 100}%;
          top: {Math.random() * 100}%;
          width: {5 + Math.random() * 5}px;
          height: {5 + Math.random() * 5}px;
          box-shadow: 0 0 8px rgba(219, 39, 119, 0.6);
          animation-delay: -{Math.random() * 10}s;
          animation-duration: {20 + Math.random() * 20}s;
        "
      ></div>
    {/each}
  </div>
</div>

<style>
  @keyframes slide-right {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(100%);
    }
  }

  @keyframes slide-down {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }

  @keyframes float-particle {
    0% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0;
      filter: blur(1px);
    }
    20% {
      opacity: 1;
      filter: blur(0px);
    }
    80% {
      opacity: 1;
      filter: blur(0px);
    }
    100% {
      transform: translate(var(--move-x, 100px), var(--move-y, 100px))
        rotate(360deg);
      opacity: 0;
      filter: blur(1px);
    }
  }

  @keyframes magic-spark {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(2) rotate(180deg);
      opacity: 0;
    }
  }

  @keyframes power-surge {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }
    50% {
      opacity: 1;
      transform: scaleY(1);
    }
    100% {
      opacity: 0;
      transform: scaleY(0);
    }
  }

  @keyframes glow {
    0%,
    100% {
      opacity: 0.3;
      filter: blur(2px);
    }
    50% {
      opacity: 1;
      filter: blur(1px);
    }
  }

  .animate-slide-right {
    animation: slide-right 15s linear infinite;
  }

  .animate-slide-down {
    animation: slide-down 15s linear infinite;
  }

  .animate-float-particle {
    --move-x: 150px;
    --move-y: 150px;
    animation: float-particle 10s linear infinite;
  }

  .animate-pulse-slow {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .animate-spin-slow {
    animation: spin 20s linear infinite;
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }

  .animate-magic-spark {
    animation: magic-spark 3s ease-out infinite;
  }
</style>

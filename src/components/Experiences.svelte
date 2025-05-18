<script>
  import Sakura from "./Sakura.svelte";
  // Number of particles for floating particle effect
  let particles = Array(20).fill(null);
</script>

<div class="experiences-container">
  <!-- Sakura petals overlay for anime style -->
  <div class="sakura-overlay">
    <Sakura />
  </div>

  <!-- Cyberpunk grid background -->
  <div
    class="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.3)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30 pointer-events-none"
  ></div>

  <!-- Floating particles -->
  <div class="absolute inset-0 pointer-events-none">
    {#each particles as _, i}
      <div
        class="absolute rounded-full bg-gradient-to-r from-pink-400/50 to-violet-400/50 animate-float-particle"
        style="
          left: {Math.random() * 100}%;
          top: {Math.random() * 100}%;
          width: {5 + Math.random() * 5}px;
          height: {5 + Math.random() * 5}px;
          box-shadow: 0 0 8px rgba(139, 92, 246, 0.6);
          animation-delay: -{Math.random() * 10}s;
          animation-duration: {20 + Math.random() * 20}s;
        "
      ></div>
    {/each}
  </div>

  <!-- Decorative anime-style header -->
  <div class="relative text-center mb-10">
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl"
    ></div>
    <h1 class="text-4xl md:text-5xl relative">
      <span class="text-violet-400 anime-text-glow font-medium">私</span>
      <span class="text-pink-300 font-medium relative inline-block">
        の経験
        <span
          class="absolute -top-1 -right-1 w-2 h-2 bg-violet-400 rounded-full animate-ping"
        ></span>
      </span>
    </h1>
    <!-- Decorative lines -->
    <div
      class="w-48 h-1 mx-auto mt-4 bg-gradient-to-r from-transparent via-violet-400 to-transparent"
    ></div>
    <p class="text-sm text-violet-200/70 mt-2">
      (My Chronicles of Valor and Conquest)
    </p>
  </div>

  <main class="flex flex-col flex-1 p-4">
    <!-- Experience 1: Freelance Game Development -->
    <div class="experience-card group relative">
      <!-- Corner decorations -->
      <div
        class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-violet-400/60 -translate-x-1 -translate-y-1 group-hover:border-pink-400/80 transition-colors duration-500"
        style="box-shadow: -2px -2px 5px rgba(139, 92, 246, 0.3);"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-violet-400/60 translate-x-1 translate-y-1 group-hover:border-pink-400/80 transition-colors duration-500"
        style="box-shadow: 2px 2px 5px rgba(139, 92, 246, 0.3);"
      ></div>

      <!-- Content -->
      <h2
        class="font-bold text-xl sm:text-2xl md:text-3xl text-violet-400 group-hover:text-violet-300 transition-colors duration-300 flex items-center"
      >
        <span class="inline-block mr-3 text-pink-400 text-2xl relative">
          <i class="fa-solid fa-gamepad"></i>
          <span
            class="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full opacity-70 group-hover:animate-ping"
          ></span>
        </span>
        Artisan of the Ethereal Realms
      </h2>
      <h3 class="font-semibold text-m sm:text-l md:text-xl mt-3">
        I presently serve the noble guild <a
          href="https://github.com/jinchuugames"
          class="text-pink-400 hover:text-pink-300 relative transition-colors duration-300"
          >jinchuugames<span
            class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-all"
          ></span></a
        > as a humble artisan. Under their guidance, I employ the sorcery of GDScript
        to assist in crafting their grand interactive tapestry.
      </h3>
      <h3 class="text-s sm:text-m md:text-l mt-2 text-violet-200/80">
        September 2024 - Present
      </h3>

      <!-- Anime-style divider -->
      <div class="relative h-1.5 my-4">
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-violet-700 to-transparent opacity-70"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50 blur-sm"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"
        ></div>
      </div>

      <!-- Skills list with anime style -->
      <div class="mt-4">
        <h4 class="text-pink-400 text-lg mb-2 font-medium">
          スキル / Mystical Arts
        </h4>
        <div class="flex flex-wrap gap-2">
          <span
            class="px-2 py-1 rounded-md bg-violet-900/30 border border-violet-400/30 text-violet-200 text-sm"
            >GDScript</span
          >
          <span
            class="px-2 py-1 rounded-md bg-violet-900/30 border border-violet-400/30 text-violet-200 text-sm"
            >Game Development</span
          >
          <span
            class="px-2 py-1 rounded-md bg-violet-900/30 border border-violet-400/30 text-violet-200 text-sm"
            >Godot Engine</span
          >
        </div>
      </div>
    </div>

    <!-- Experience 2: Open Source Contributor -->
    <div class="experience-card group relative mt-8">
      <!-- Corner decorations -->
      <div
        class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-violet-400/60 -translate-x-1 -translate-y-1 group-hover:border-pink-400/80 transition-colors duration-500"
        style="box-shadow: -2px -2px 5px rgba(139, 92, 246, 0.3);"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-violet-400/60 translate-x-1 translate-y-1 group-hover:border-pink-400/80 transition-colors duration-500"
        style="box-shadow: 2px 2px 5px rgba(139, 92, 246, 0.3);"
      ></div>

      <!-- Content -->
      <h2
        class="font-bold text-xl sm:text-2xl md:text-3xl text-violet-400 group-hover:text-violet-300 transition-colors duration-300 flex items-center"
      >
        <span class="inline-block mr-3 text-pink-400 text-2xl relative">
          <i class="fa-solid fa-code-branch"></i>
          <span
            class="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full opacity-70 group-hover:animate-ping"
          ></span>
        </span>
        Keeper of the Open Scrolls
      </h2>
      <h3 class="font-semibold text-m sm:text-l md:text-xl mt-3">
        I bestow my craft upon the scrolls of open knowledge, forging arcane
        instruments for the benefit of the realm's denizens. I have unleashed
        mystic artifacts known as NeuraTalk and Drawniverse, endowing others
        with enchanted implements of artificial wisdom and vessels for creative
        expression.
      </h3>
      <h3 class="text-s sm:text-m md:text-l mt-2 text-violet-200/80">
        May 2023 - Present
      </h3>

      <!-- Anime-style divider -->
      <div class="relative h-1.5 my-4">
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-violet-700 to-transparent opacity-70"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50 blur-sm"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"
        ></div>
      </div>

      <!-- Skills list with anime style -->
      <div class="mt-4">
        <h4 class="text-pink-400 text-lg mb-2 font-medium">
          スキル / Mystical Arts
        </h4>
        <div class="flex flex-wrap gap-2">
          <span
            class="px-2 py-1 rounded-md bg-violet-900/30 border border-violet-400/30 text-violet-200 text-sm"
            >Golang</span
          >
          <span
            class="px-2 py-1 rounded-md bg-violet-900/30 border border-violet-400/30 text-violet-200 text-sm"
            >SvelteKit</span
          >
          <span
            class="px-2 py-1 rounded-md bg-violet-900/30 border border-violet-400/30 text-violet-200 text-sm"
            >AI Integration</span
          >
          <span
            class="px-2 py-1 rounded-md bg-violet-900/30 border border-violet-400/30 text-violet-200 text-sm"
            >WebRTC</span
          >
        </div>
      </div>
    </div>

    <!-- Experience 3: Self-Education -->
    <div class="experience-card group relative mt-8">
      <!-- Corner decorations -->
      <div
        class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-violet-400/60 -translate-x-1 -translate-y-1 group-hover:border-pink-400/80 transition-colors duration-500"
        style="box-shadow: -2px -2px 5px rgba(139, 92, 246, 0.3);"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-violet-400/60 translate-x-1 translate-y-1 group-hover:border-pink-400/80 transition-colors duration-500"
        style="box-shadow: 2px 2px 5px rgba(139, 92, 246, 0.3);"
      ></div>

      <!-- Content -->
      <h2
        class="font-bold text-xl sm:text-2xl md:text-3xl text-violet-400 group-hover:text-violet-300 transition-colors duration-300 flex items-center"
      >
        <span class="inline-block mr-3 text-pink-400 text-2xl relative">
          <i class="fa-solid fa-book"></i>
          <span
            class="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full opacity-70 group-hover:animate-ping"
          ></span>
        </span>
        Pilgrimage of Arcane Knowledge
      </h2>
      <h3 class="font-semibold text-m sm:text-l md:text-xl mt-3">
        My journey in the arcane arts commenced in the fifth cycle of scholarly
        tutelage, when I first gazed upon the mystic runes of C#. Following a
        period of repose to prepare for the Great Trials of Academic Entrance, I
        resumed my pursuit of enlightenment with the enigmatic sigils of Go
        (Golang). I persistently cultivate my abilities through solitary study
        of ancient tomes and the forging of practical enchanted artifacts.
      </h3>
      <h3 class="text-s sm:text-m md:text-l mt-2 text-violet-200/80">
        2018 - Present
      </h3>

      <!-- Anime-style divider -->
      <div class="relative h-1.5 my-4">
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-violet-700 to-transparent opacity-70"
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50 blur-sm"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"
        ></div>
      </div>

      <!-- Skills list with anime style -->
      <div class="mt-4">
        <h4 class="text-pink-400 text-lg mb-2 font-medium">
          スキル / Mystical Arts
        </h4>
        <div class="flex flex-wrap gap-2">
          <span
            class="px-2 py-1 rounded-md bg-violet-900/30 border border-violet-400/30 text-violet-200 text-sm"
            >C#</span
          >
          <span
            class="px-2 py-1 rounded-md bg-violet-900/30 border border-violet-400/30 text-violet-200 text-sm"
            >Golang</span
          >
          <span
            class="px-2 py-1 rounded-md bg-violet-900/30 border border-violet-400/30 text-violet-200 text-sm"
            >C/C++</span
          >
          <span
            class="px-2 py-1 rounded-md bg-violet-900/30 border border-violet-400/30 text-violet-200 text-sm"
            >Rust</span
          >
          <span
            class="px-2 py-1 rounded-md bg-violet-900/30 border border-violet-400/30 text-violet-200 text-sm"
            >Self-learning</span
          >
        </div>
      </div>
    </div>
  </main>
</div>

<style>
  .experiences-container {
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
  }

  .experience-card {
    position: relative;
    background-color: rgba(13, 12, 33, 0.7);
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid rgba(139, 92, 246, 0.2);
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.15);
    margin-bottom: 2rem;
    line-height: 1.6;
    transition: all 0.3s ease;
    z-index: 2;
    overflow: hidden;
  }

  .experience-card:hover {
    transform: translateY(-5px);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow:
      0 0 20px rgba(139, 92, 246, 0.4),
      0 0 40px rgba(216, 180, 254, 0.2);
  }

  /* Card background glow effect */
  .experience-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      225deg,
      rgba(139, 92, 246, 0.1) 0%,
      transparent 50%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }

  .experience-card:hover::before {
    opacity: 1;
  }

  /* Anime-style decorative elements */
  .experiences-container::before,
  .experiences-container::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    z-index: 1;
    opacity: 0.2;
    border-radius: 50%;
  }

  .experiences-container::before {
    top: 10%;
    left: -50px;
    background: radial-gradient(
      circle,
      rgba(139, 92, 246, 0.6) 0%,
      transparent 70%
    );
    animation: pulse 6s infinite alternate;
  }

  .experiences-container::after {
    bottom: 10%;
    right: -50px;
    background: radial-gradient(
      circle,
      rgba(216, 180, 254, 0.6) 0%,
      transparent 70%
    );
    animation: pulse 8s infinite alternate;
  }

  @keyframes pulse {
    0% {
      opacity: 0.2;
      transform: scale(1);
    }
    100% {
      opacity: 0.4;
      transform: scale(1.2);
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

  .animate-float-particle {
    --move-x: 150px;
    --move-y: 150px;
    animation: float-particle 15s linear infinite;
  }
</style>

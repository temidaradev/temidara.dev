<script>
  import { slide } from "svelte/transition";

  export let y;

  let tabs = [
    { name: "Chronicles", link: "/blog" },
    { name: "Quests", link: "/experiences" },
    { name: "Ethereal Realm", link: "/game" },
    { name: "NeuraTalk", link: "/neuratalk" },
    { name: "Send Missive", link: "/contact" },
  ];

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header class="sticky z-[10] top-0 w-full">
  <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="group">
      <h1
        class="text-xl font-medium text-pink-400 hover:text-purple-400 transition-colors duration-300"
      >
        テミダーレーデブ
      </h1>
    </a>

    <!-- Mobile Menu Button -->
    <button
      class="lg:hidden flex items-center text-pink-400 hover:text-purple-400 transition-colors duration-300"
      on:click={toggleMenu}
      aria-label="Toggle menu"
    >
      {#if menuOpen}
        <i class="fa-solid fa-xmark text-xl"></i>
      {:else}
        <i class="fa-solid fa-bars text-xl"></i>
      {/if}
    </button>

    <!-- Desktop Navigation -->
    <nav class="hidden lg:flex items-center gap-8">
      {#each tabs as tab}
        <a
          href={tab.link}
          class="group flex items-center gap-2 relative hover:-translate-y-0.5 transition-transform duration-300"
        >
          <span
            class="text-pink-400/90 hover:text-purple-400 font-medium transition-colors duration-300"
          >
            {tab.name}
          </span>
        </a>
      {/each}

      <!-- Connect Button -->
      <a
        href="https://x.com/temidaradev"
        target="_blank"
        class="px-4 py-1.5 rounded-full bg-pink-400/10 border border-pink-400/50 hover:border-purple-400/50 hover:bg-purple-400/10 transition-colors duration-300 group"
      >
        <span class="flex items-center gap-2">
          <i
            class="fa-brands fa-x-twitter text-pink-400 group-hover:text-purple-400 group-hover:rotate-12 transition-all duration-300"
          ></i>
          <span
            class="text-pink-400 group-hover:text-purple-400 font-medium transition-colors duration-300"
            >Forge Alliance</span
          >
        </span>
      </a>
    </nav>
  </div>

  <!-- Mobile Menu (Dropdown) -->
  {#if menuOpen}
    <div
      class="lg:hidden absolute w-full bg-slate-900/95 border-t border-pink-400/20 backdrop-blur-lg shadow-lg shadow-pink-500/10 animate-fade-in-down z-20"
      transition:slide={{ duration: 300 }}
    >
      <nav class="flex flex-col p-4">
        {#each tabs as tab}
          <a
            href={tab.link}
            class="py-3 px-4 text-center border-b border-pink-400/10 last:border-none"
            on:click={() => (menuOpen = false)}
          >
            <span
              class="text-pink-400/90 hover:text-purple-400 font-medium transition-colors duration-300"
            >
              {tab.name}
            </span>
          </a>
        {/each}

        <!-- Mobile Connect Button -->
        <a
          href="https://x.com/temidaradev"
          target="_blank"
          class="mt-4 py-3 px-4 rounded-md bg-pink-400/10 border border-pink-400/50 flex justify-center items-center gap-2"
          on:click={() => (menuOpen = false)}
        >
          <i class="fa-brands fa-x-twitter text-pink-400"></i>
          <span class="text-pink-400 font-medium">Forge Alliance</span>
        </a>
      </nav>
    </div>
  {/if}
</header>

<style>
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-gradient {
    animation: gradient 3s linear infinite;
    background-size: 300% 300%;
  }

  .animate-fade-in-down {
    animation: fadeInDown 0.3s forwards;
  }

  .bg-300\% {
    background-size: 300% 100%;
  }
</style>

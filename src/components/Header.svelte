<script>
  export let y;

  let tabs = [
    { name: "Projects", link: "#projects" },
    { name: "About Me", link: "#about" },
    { name: "Blog", link: "/blog" },
  ];
</script>

<header class="sticky z-[10] top-0 w-full">
  <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="group">
      <h1
        class="text-xl pixelated text-pink-400 hover:text-purple-400 transition-colors duration-300"
      >
        テミダーレーデブ
      </h1>
    </a>

    <!-- Navigation -->
    <nav class="flex items-center gap-8">
      {#each tabs as tab}
        <a
          href={tab.link}
          class="group flex items-center gap-2 relative hover:-translate-y-0.5 transition-transform duration-300"
        >
          <span
            class="text-pink-400/90 hover:text-purple-400 pixelated transition-colors duration-300"
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
            class="text-pink-400 group-hover:text-purple-400 pixelated transition-colors duration-300"
            >Connect</span
          >
        </span>
      </a>
    </nav>
  </div>
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

  .animate-gradient {
    animation: gradient 3s linear infinite;
    background-size: 300% 300%;
  }

  .bg-300\% {
    background-size: 300% 100%;
  }
</style>

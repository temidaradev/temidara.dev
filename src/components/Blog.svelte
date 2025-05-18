<script>
  let tabs = [
    {
      name: "School Life",
      icon: "fa-solid fa-school",
      description:
        "My experiences and thoughts about school life, learning journey, and academic adventures",
      link: "/blog/school",
      bgClass: "from-pink-400/10 to-purple-400/10",
    },
    {
      name: "Game Dev",
      icon: "fa-solid fa-gamepad",
      description:
        "Exploring game development, sharing insights, and documenting my progress",
      link: "/blog/game",
      bgClass: "from-purple-400/10 to-pink-400/10",
    },
    {
      name: "Tech Blog",
      icon: "fa-solid fa-code",
      description:
        "Programming tutorials, technical insights, and software development experiences",
      link: "/blog/tech",
      bgClass: "from-pink-400/10 to-purple-400/10",
    },
  ];
</script>

<div class="w-full min-h-screen p-8">
  <div class="max-w-4xl mx-auto">
    <!-- Glowing title with decorative elements -->
    <div class="relative text-center mb-16">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"
      ></div>
      <h1 class="text-4xl md:text-5xl relative">
        <span class="text-pink-400 anime-text-glow pixelated">My</span>
        <span class="text-purple-300 pixelated relative inline-block">
          Blog
          <span
            class="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-ping"
          ></span>
        </span>
      </h1>
      <!-- Decorative lines -->
      <div
        class="w-48 h-1 mx-auto mt-4 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
      ></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each tabs as tab}
        <a
          href={tab.link}
          class="group relative overflow-hidden rounded-lg bg-slate-800/50 backdrop-blur-sm border-2 border-pink-400/30 hover:border-pink-400 transition-all duration-300"
        >
          <!-- Enhanced glow effect -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-pink-400/5 to-purple-400/5"
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-r {tab.bgClass} opacity-0 group-hover:opacity-100 transition-all duration-500"
          ></div>

          <!-- Animated corner particles -->
          <div
            class="absolute top-0 right-0 w-1 h-1 bg-pink-400 rounded-full group-hover:animate-ping"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-1 h-1 bg-purple-400 rounded-full group-hover:animate-ping"
          ></div>

          <div class="p-6 relative z-10">
            <!-- Icon with enhanced glow -->
            <div class="relative">
              <div
                class="absolute inset-0 text-3xl text-pink-400 blur-sm group-hover:blur-md transition-all duration-300"
              >
                <i class={tab.icon}></i>
              </div>
              <div
                class="relative text-3xl text-pink-400 group-hover:text-pink-300 transition-colors duration-300"
              >
                <i class={tab.icon}></i>
              </div>
            </div>

            <!-- Title with glow effect -->
            <h2
              class="text-2xl mb-3 text-pink-400 group-hover:text-pink-300 transition-colors duration-300 font-bold pixelated"
            >
              {tab.name}
            </h2>

            <!-- Description -->
            <p
              class="text-purple-200/70 group-hover:text-purple-100 text-sm leading-relaxed transition-colors duration-300"
            >
              {tab.description}
            </p>

            <!-- Read More indicator -->
            <div
              class="mt-4 text-sm text-pink-400/70 group-hover:text-pink-300 transition-colors duration-300 flex items-center gap-2"
            >
              <span class="pixelated">Read More</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </div>
          </div>

          <!-- Decorative corner -->
          <div
            class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-400/30 group-hover:border-pink-400 transition-colors duration-300"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-400/30 group-hover:border-pink-400 transition-colors duration-300"
          ></div>
        </a>
      {/each}
    </div>
  </div>
</div>

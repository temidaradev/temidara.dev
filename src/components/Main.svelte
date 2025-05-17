<script>
  import Step from "./Step.svelte";
  import Techs from "./Techs.svelte";
  import Sakura from "./Sakura.svelte";
  import AnimeBg from "./AnimeBg.svelte";

  let steps = [
    {
      name: "NeuraTalk",
      icon: "fa-brands fa-github",
      href: "/neuratalk",
    },
    {
      name: "The Unspooled Self",
      icon: "fa-brands fa-github",
      href: "/game",
    },
    {
      name: "LidTek",
      icon: "fa-brands fa-github",
      href: "https://lidtek.gamu.group",
    },
    {
      name: "Drawniverse",
      icon: "fa-brands fa-github",
      href: "https://drawniverse.gamu.group",
    },
    {
      name: "Experiences",
      icon: "fa-solid fa-briefcase",
      href: "/experiences",
    },
  ];

  let benefits = [
    {
      name: "a self taught developer",
      description:
        "I taught myself to code using free online resources and by tackling real-world development challenges. My journey began with C#, which I first learned in 5th grade. I later paused to prepare for my high school entrance exams, but once I started high school, I resumed programming—this time with Go (Golang). I'm currently focused on mastering Go and aspire to become a professional Go developer. I'm also interested in Rust, particularly because of its strong presence in blockchain development, and I plan to deepen my skills in that area as well.",
    },
    {
      name: "a curious person",
      description:
        "Beyond coding, I'm deeply curious about subjects like mathematics and human psychology. In my free time, I also enjoy playing games, which often inspire me. I believe that games are a powerful medium for storytelling and creativity, and I'm excited to explore this further in my own projects.",
    },
  ];
  const languages = [
    { name: "Golang", yoe: "3 years", href: "https://go.dev" },
    {
      name: "C",
      yoe: "1 year",
      href: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      name: "C++",
      yoe: "1 year",
      href: "https://en.wikipedia.org/wiki/C%2B%2B",
    },
    {
      name: "GDScript",
      yoe: "1 year",
      href: "https://gdscript.com",
    },
    {
      name: "Rust",
      yoe: "learning",
      href: "https://www.rust-lang.org",
    },
    {
      name: "Odin",
      yoe: "learning",
      href: "https://odin-lang.org",
    },
  ];
  const real_langs = [
    {
      name: "Turkish",
      status: "native",
    },
    {
      name: "English",
      status: "C1",
    },
    {
      name: "Japanese",
      status: "learning",
    },
  ];
</script>

<AnimeBg />
<Sakura />

<main class="flex flex-col flex-1 p-4 relative backdrop-blur-sm">
  <section id="introPage" class="grid grid-cols-1 py-8 sm:py-14">
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2
        class="font-semibold text-center text-4xl sm:text-5xl md:text-6xl animate-pulse"
      >
        こんにちは! I'm{" "}
        <span class="poppins text-pink-400 anime-text-glow">Temidaradev</span>
        <div class="flex flex-col"></div>
      </h2>
      <div class="flex flex-col sm:-32">
        <h6 class="text-2xl pixelated text-purple-300">Languages That I Use</h6>
        <div class="flex flex-wrap flex-row gap-2">
          {#each languages as { name, yoe, href }}
            <a
              {href}
              target="_blank"
              class="px-3 py-1 rounded-md border-2 border-pink-500/50 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/20 duration-200 flex cursor-pointer bg-slate-900/50 backdrop-blur-sm"
            >
              <p class="poppins text-lg text-pink-200">
                {name}
                <span class="text-sm text-purple-300">{yoe}</span>
              </p>
            </a>
          {/each}
        </div>
        <h6 class="text-2xl pixelated text-purple-300 mt-4">
          Real Language That I Know
        </h6>
        <div class="flex flex-wrap flex-row gap-2">
          {#each real_langs as { name, status }}
            <div
              class="px-3 py-1 rounded-md border-2 border-purple-500/50 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 duration-200 flex cursor-pointer bg-slate-900/50 backdrop-blur-sm"
            >
              <p class="poppins text-lg text-purple-200">
                {name}
                <span class="text-sm text-pink-300">{status}</span>
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  <section id="projects" class="flex flex-col gap-24">
    <div class="flex flex-col gap-4 text-center relative">
      <div
        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-30"
      ></div>

      <div class="relative">
        <h6
          class="text-lg sm:text-xl md:text-2xl pixelated text-purple-300 animate-pulse"
        >
          クリエイティブな冒険
        </h6>
        <p class="text-sm text-purple-200/70 mt-1">
          (A few of my creative endeavors)
        </p>
      </div>

      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl relative">
        Curious To{" "}
        <span class="poppins text-pink-400 anime-text-glow animate-pulse"
          >See</span
        >
        My Work?
        <div
          class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"
        ></div>
      </h3>
    </div>

    <a
      href="https://github.com/temidaradev"
      target="_blank"
      class="mx-auto px-6 py-3 rounded-full border-2 border-pink-400/50 flex items-center gap-3 -mb-4 sm:-mb-0 -mt-10 hover:border-purple-400 hover:shadow-lg hover:shadow-pink-400/20 duration-300 bg-slate-900/50 backdrop-blur-sm group transform hover:scale-105 transition-all"
    >
      <i
        class="fa-brands fa-github text-pink-400 text-xl group-hover:rotate-12 transition-transform duration-300"
      ></i>
      <p
        class="text-pink-200 group-hover:text-purple-200 transition-colors duration-300"
      >
        チェック GitHub
      </p>
    </a>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 md:gap-6 relative"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-purple-400/5 rounded-lg filter blur-3xl"
      ></div>
      <Step step={steps[0]}>
        <p>
          A GUI App For Your Local{" "}
          <strong class="text-violet-400">Ollama</strong> LLMs
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          My First 3D Psychological Horror{" "}
          <strong class="text-violet-400">Game</strong>
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Organization of Our{" "}
          <strong class="text-violet-400">Duo</strong> Team
        </p>
      </Step>
      <Step step={steps[3]}>
        <p>
          Making a fun multiplayer drawing game using{" "}
          <strong class="text-violet-400">Golang, Svelte, and WebRTC!</strong>
        </p>
      </Step>
      <Step step={steps[4]}>
        <p>
          You can check my past experiences by clicking{" "}
          <strong class="text-violet-400">Here</strong>!!!
        </p>
      </Step>
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div class="relative flex flex-col gap-2 text-center">
      <!-- Top decorative line -->
      <div
        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-50"
      ></div>

      <h6 class="text-lg sm:text-xl md:text-2xl pixelated text-purple-300">
        Want To Know More?
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A Bit <span class="poppins text-purple-400 anime-text-glow">About</span>
        Me
      </h3>

      <!-- Bottom decorative line -->
      <div
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"
      ></div>
    </div>

    <p
      class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl pixelated text-pink-400 anime-text-glow"
    >
      I am . . .
    </p>

    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8 group">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-purple-400/50 font-semibold group-hover:text-pink-400/70 transition-colors duration-300"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3
              class="text-2xl sm:text-3xl md:text-5xl text-purple-300 group-hover:text-pink-300 transition-colors duration-300"
            >
              {benefit.name}
            </h3>
            <p
              class="text-purple-100/80 group-hover:text-white/90 transition-colors duration-300 leading-relaxed"
            >
              {benefit.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>

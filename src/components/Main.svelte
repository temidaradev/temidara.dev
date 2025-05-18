<script>
  import Step from "./Step.svelte";
  import Techs from "./Techs.svelte";

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
      name: "a self-taught practitioner of arcane arts",
      description:
        "Through ancient tomes and trials of the realm, I didst train mine own self in the mystic arts of code. Mine quest began with the runes of C#, which I first mastered in mine fifth year of scholarly pursuit. A time of respite followed as I prepared for the Great Trials of Academic Entrance, but upon ascending to the halls of higher learning, I resumed mine craft—this time with the ancient magic of Go (Golang). In these present days, I doth focus upon mastering Go, aspiring to become a venerable sage of its ways. The enigmatic powers of Rust also beckon me, for its dominion extends into the blockchain realm, and I shall endeavor to harness its might.",
    },
    {
      name: "a seeker of forgotten knowledge",
      description:
        "Beyond the arcane scripts, mine curiosity stretches to the celestial mathematics and the mysteries of mortal minds. In times of repose, I partake in the revelries of interactive tales, which oft inspire mine own thinking. Verily, I believe these games to be vessels of profound narrative power and creative fire, and I am most eager to weave such enchantments into mine own creations.",
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

<main class="flex flex-col flex-1 p-4 relative">
  <section id="introPage" class="grid grid-cols-1 py-8 sm:py-14">
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2
        class="font-semibold text-center text-4xl sm:text-5xl md:text-6xl animate-pulse"
      >
        こんにちは! Hark, 'tis I,{" "}
        <span class="poppins text-pink-400 anime-text-glow">Temidaradev</span>
        <div class="flex flex-col"></div>
      </h2>
      <div class="flex flex-col sm:-32">
        <h6 class="text-2xl font-medium text-purple-300">
          Tongues in Which I Am Versed
        </h6>
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
        <h6 class="text-2xl font-medium text-purple-300 mt-4">
          Mortal Tongues in Which I Am Proficient
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
        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60"
      ></div>

      <div class="relative">
        <h6
          class="text-lg sm:text-xl md:text-2xl py-5 font-medium text-purple-300 animate-pulse"
        >
          クリエイティブな冒険
        </h6>
        <p class="text-sm text-purple-200/70 mt-1">
          (Mine Noble Quests of Arcane Creation and Enlightenment)
        </p>
      </div>

      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl relative">
        Dost Thou{" "}
        <span class="poppins text-pink-400 anime-text-glow animate-pulse"
          >Yearn</span
        >
        To Gaze Upon Mine Sacred Works?
        <div
          class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-70"
          style="box-shadow: 0 0 10px rgba(167, 139, 250, 0.5);"
        ></div>
      </h3>
    </div>

    <a
      href="https://github.com/temidaradev"
      target="_blank"
      class="mx-auto px-6 py-3 rounded-full border-2 border-pink-400/50 flex items-center gap-3 -mb-4 sm:-mb-0 -mt-10 hover:border-purple-400 hover:shadow-lg hover:shadow-pink-400/20 duration-300 bg-slate-900/50 group transform hover:scale-105 transition-all"
    >
      <i
        class="fa-brands fa-github text-pink-400 text-xl group-hover:rotate-12 transition-transform duration-300"
      ></i>
      <p
        class="text-pink-200 group-hover:text-purple-200 transition-colors duration-300"
      >
        Behold Mine Ancient Scrolls of Knowledge
      </p>
    </a>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 md:gap-6 relative"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-lg filter blur-3xl"
      ></div>
      <Step step={steps[0]}>
        <p>
          A Mystical Portal for Thine Local{" "}
          <strong class="text-violet-400">Ollama</strong> Enchantments, Wrought by
          Mine Own Hand
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Mine First Dimensional Nightmare, Forged in the{" "}
          <strong class="text-violet-400">Crucible of Mind and Spirit</strong>
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Fellowship of Our Most Noble{" "}
          <strong class="text-violet-400">Twain</strong> Order, United in Sacred
          Purpose
        </p>
      </Step>
      <Step step={steps[3]}>
        <p>
          Forging a Grand Realm for the Fellowship of Artisans through{" "}
          <strong class="text-violet-400"
            >Golang Enchantments, Svelte Incantations, and WebRTC Arcane
            Bindings!</strong
          >
        </p>
      </Step>
      <Step step={steps[4]}>
        <p>
          Thou mayest traverse mine chronicles of olden campaigns by beckoning{" "}
          <strong class="text-violet-400">Hither</strong>, O Curious Traveler!!!
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
        class="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-70"
        style="box-shadow: 0 0 8px rgba(236, 72, 153, 0.4);"
      ></div>

      <h6 class="text-lg sm:text-xl md:text-2xl font-medium text-purple-300">
        Wish to Know More of Me?
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A Brief <span class="poppins text-purple-400 anime-text-glow"
          >Chronicle</span
        >
        of Mine Origins
      </h3>

      <!-- Bottom decorative line -->
      <div
        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"
      ></div>
    </div>

    <p
      class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl font-medium text-pink-400 anime-text-glow"
    >
      Verily, I am . . .
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

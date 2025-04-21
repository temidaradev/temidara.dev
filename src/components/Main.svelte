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
      name: "a self taught developer",
      description:
        "I taught myself to code using free online resources and problem solving involved in development. I started with C# but learned C# in 5th grade. When my high school entrance exam came, I stopped programming and started again in high school. I started with Golang and I am still learning Golang and I want to be a full stack developer",
    },
    {
      name: "a curious person",
      description:
        "I have curiosity on other things, not only coding... I also like playing electric guitar and mathematics at all and I love searching about human psychology and I love playing games!",
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
      status: "A1",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section id="introPage" class="grid grid-cols-1 py-8 sm:py-14">
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-center text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">Temidaradev</span>
        <div class="flex flex-col"></div>
      </h2>
      <div class="flex flex-col sm:-32">
        <h6 class="text-2xl">Languages That I Use</h6>
        <div class="flex flex-wrap flex-row gap-1">
          {#each languages as { name, yoe, href }}
            <a
              {href}
              target="_blank"
              class="px-1 rounded-md border border-solid border-slate-500 hover:border-slate-800 duration-200 flex cursor-pointer"
            >
              <p class="poppins text-lg text-slate-300">
                {name} <span class="text-sm text-slate-500">{yoe}</span>
              </p>
            </a>
          {/each}
        </div>
        <h6 class="text-2xl">Real Language That I Know</h6>
        <div class="flex flex-wrap flex-row gap-1">
          {#each real_langs as { name, status }}
            <div
              class="px-1 rounded-md border border-solid border-slate-500 hover:border-slate-800 duration-200 flex cursor-pointer"
            >
              <p class="poppins text-lg text-slate-300">
                {name} <span class="text-sm text-slate-500">{status}</span>
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  <section id="projects" class="flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        A few of my creative endeavors
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious To <span class="poppins text-violet-400">See</span> My Work?
      </h3>
    </div>
    <a
      href="https://github.com/temidaradev"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-brands fa-github"></i>
      <p>Check My Github</p>
    </a>
    <div class="grid grid-cols-3 gap-12 lg:gap-8 md:gap-4 sm:gap-2">
      <Step step={steps[0]}>
        <p>
          A GUI App For Your Local <strong class="text-violet-400"
            >Ollama</strong
          > LLMs
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          My First 3D Psychological Horror <strong class="text-violet-400"
            >Game</strong
          >
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Organization of Our <strong class="text-violet-400">Duo</strong> Team
        </p>
      </Step>
      <Step step={steps[3]}>
        <p>
          Making a fun multiplayer drawing game using <strong
            class="text-violet-400">Golang, Svelte, and WebRTC!</strong
          >
        </p>
      </Step>
      <Step step={steps[4]}>
        <p>
          You can check my past experiences by clicking <strong
            class="text-violet-400">Here</strong
          >!!!
        </p>
      </Step>
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-lg sm:text-xl md:text-2xl">Want To Know More?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A Bit <span class="poppins text-violet-400">About</span> Me
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>

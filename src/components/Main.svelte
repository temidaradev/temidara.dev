<script>
  import Step from './Step.svelte';

  let steps = [
    { name: 'LidTek', icon: 'fa-brands fa-github' },
    { name: 'Experiences', icon: 'fa-solid fa-briefcase' },
  ];

  let benefits = [
    {
      name: 'a self taught developer',
      description:
        'I taught myself to code using free online resources and problem solving involved in development. I started with C# but learned C# in 5th grade. When my high school entrance exam came, I stopped programming and started again in high school. I started with Golang and I am still learning Golang and I want to be a full stack developer',
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section id="introPage" class="grid grid-cols-1 py-8 sm:py-14">
    <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
      <h2 class="font-semibold text-center text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">Temidara</span> <br />
        Wants To Be A
        <span class="poppins text-violet-400">Fullstack Developer</span>
      </h2>
      <p class="text-base text-center sm:text-lg md:text-cl">
        <span class="text-violet-400">Techs</span> That I Use
      </p>
      <a
        href="https://x.com/temidaradev"
        target="_blank"
        class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        ></div>
        <h4 class="relative z-9">Get In Touch &rarr;</h4>
      </a>
    </div>
  </section>
  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors</h6>
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
    <div class="grid grid-cols-2 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          Making a fun multiplayer drawing game using <strong class="text-violet-400"
            >Golang, Svelte, and WebRTC!</strong
          >
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          You can check my past experiences by clicking <strong class="text-violet-400">Here</strong
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
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <div class="flex gap-6 sm:gap-8">
          <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
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

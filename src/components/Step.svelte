<script>
  export let step;
</script>

<a
  href={step.href}
  target="_blank"
  class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border-2 border-pink-400/50 text-center cursor-pointer group hover:border-purple-400 duration-500 hover:shadow-lg hover:shadow-pink-400/20 bg-slate-900/50 relative overflow-visible hover:transform hover:scale-[1.02] transition-all"
>
  <!-- Background gradients and effects -->
  <div
    class="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
  ></div>

  <!-- Decorative corner effects -->
  <div
    class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-400/60 -translate-x-1 -translate-y-1 group-hover:border-purple-400/80 transition-colors duration-500"
    style="box-shadow: -2px -2px 5px rgba(236, 72, 153, 0.3);"
  ></div>
  <div
    class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-400/60 translate-x-1 translate-y-1 group-hover:border-purple-400/80 transition-colors duration-500"
    style="box-shadow: 2px 2px 5px rgba(236, 72, 153, 0.3);"
  ></div>

  <!-- Logo container with enhanced effects -->
  <div
    class="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-slate-950 to-slate-900/90 grid place-items-center text-4xl md:text-5xl duration-300 text-pink-400 rounded-full border-4 border-pink-400/20 group-hover:border-purple-400/50 group-hover:scale-110 transform transition-all group-hover:-rotate-12 group-hover:shadow-xl group-hover:shadow-pink-400/20 z-10 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-pink-400/10 before:to-purple-400/10 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
  >
    <div
      class="relative z-20 group-hover:animate-pulse transition-all duration-300"
    >
      <i class={step.icon} />
    </div>
  </div>

  <!-- Content with enhanced typography and spacing -->
  <div class="mt-8 relative">
    <h3
      class="font-medium text-xl sm:text-2xl md:text-3xl text-purple-300 group-hover:text-pink-300 transition-colors duration-300 group-hover:transform group-hover:scale-105"
    >
      {step.name}
    </h3>
    <div
      class="text-purple-200/90 group-hover:text-pink-200 transition-colors duration-300 mt-3 relative"
    >
      <slot />
    </div>
  </div>

  <!-- Footer with enhanced explore button -->
  <div class="flex-1 flex justify-between gap-4 items-end mt-4">
    <div
      class="ml-auto cursor-pointer group-hover:text-pink-400 duration-300 relative overflow-hidden"
    >
      <p
        class="anime-text-glow pixelated animate-pulse flex items-center gap-2 group-hover:transform group-hover:translate-x-1 transition-transform"
      >
        探索する
        <span
          class="inline-block transform group-hover:translate-x-1 transition-transform duration-300"
          >→</span
        >
      </p>
      <div
        class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
      ></div>
    </div>
  </div>
</a>

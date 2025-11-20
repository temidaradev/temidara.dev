<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import Sakura from "../components/Sakura.svelte";
  import { onMount } from "svelte";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import { browser, dev } from "$app/environment";
  import { afterNavigate } from "$app/navigation";
  import { track } from "@vercel/analytics";

  if (browser && !dev) {
    onMount(() => {
      try {
        injectAnalytics();
      } catch (error) {
        console.debug("Vercel Analytics initialization failed");
      }

      afterNavigate(() => {
        try {
          track("pageview");
        } catch (e) {
          // ignore if track isn't available
        }
      });
    });
  }

  let y = 0;
  let innerHeight = 0;
  let innerWidth = 0;

  function goTop() {
    document.body.scrollIntoView({ behavior: "smooth" });
  }
</script>

<Sakura />

<div
  class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <div
    class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
      (y > 0
        ? "opacity-full pointer-events-auto"
        : "pointer-events-none opacity-0")}
  >
    <button
      on:click={goTop}
      class="ml-auto rounded-full aspect-square bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer"
    >
      <i class="fa-solid fa-arrow-up grid place-items-center aspect-square">
      </i>
    </button>
  </div>
  <Header {y} />
  <slot></slot>
  <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />

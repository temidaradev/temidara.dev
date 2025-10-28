<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import Sakura from "../components/Sakura.svelte";
    import { onMount } from 'svelte';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
    import { browser } from '$app/environment';

    // Only inject analytics in the browser on Vercel deployments
    if (browser) {
        onMount(() => {
            // Only inject if we're on a Vercel domain (analytics only works on Vercel)
            if (window.location.hostname.includes('vercel.app') || 
                window.location.hostname.includes('vercel.com') ||
                window.location.hostname === 'temidara.rocks') {
                try {
                    injectAnalytics();
                } catch (error) {
                    // Silently handle if analytics isn't enabled
                    console.debug('Vercel Analytics initialization failed');
                }
            }
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
            <i
                class="fa-solid fa-arrow-up grid place-items-center aspect-square"
            >
            </i>
        </button>
    </div>
    <Header {y} />
    <slot></slot>
    <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />

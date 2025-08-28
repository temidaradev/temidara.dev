<script>
  // Posts for Tech Blog
  import { onMount } from "svelte";
  import RustP2PChat from "../../../components/blog/RustP2PChat.svelte";
  let posts = [
    {
      title:
        "Introducing rust-p2p-chat: A Minimal Peer-to-Peer CLI Chat App in Rust",
      date: "2025-08-22",
      summary:
        "A simple, open-source command-line chat application in Rust for peer-to-peer, encrypted messaging with no central server.",
      component: RustP2PChat,
      webm: "https://github.com/user-attachments/assets/1325c830-45b2-4e6a-bf31-a450a923bb86",
    },
  ];

  let selectedPost = null;

  function showPost(post) {
    selectedPost = post;
  }

  function backToList() {
    selectedPost = null;
  }

  import { afterUpdate, onDestroy } from "svelte";
  let proseDiv;
  let observer;

  function replaceWebmLinksWithVideo() {
    if (!proseDiv) return;
    // Find all anchor tags linking to .webm files
    const links = proseDiv.querySelectorAll('a[href$=".webm"]');
    links.forEach((link) => {
      const url = link.getAttribute("href");
      // Only replace if not already replaced
      if (!link.dataset.webmReplaced) {
        const video = document.createElement("video");
        video.setAttribute("controls", "");
        video.setAttribute(
          "class",
          "rounded-lg shadow-lg max-w-full h-auto bg-black border border-pink-400/20 my-4"
        );
        video.innerHTML = `<source src="${url}" type="video/webm">Your browser does not support the WebM video format.`;
        link.parentNode.insertBefore(video, link);
        link.style.display = "none";
        link.dataset.webmReplaced = "true";
      }
    });
  }

  afterUpdate(() => {
    replaceWebmLinksWithVideo();
    // Optionally, observe for further changes
    if (observer) observer.disconnect();
    observer = new MutationObserver(replaceWebmLinksWithVideo);
    if (proseDiv)
      observer.observe(proseDiv, { childList: true, subtree: true });
  });

  onDestroy(() => {
    if (observer) observer.disconnect();
  });
</script>

<div class="w-full min-h-screen p-8">
  <div class="max-w-3xl mx-auto">
    <div class="relative text-center mb-16">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"
      ></div>
      <h1 class="text-4xl md:text-5xl relative">
        <span class="text-pink-400 anime-text-glow font-medium">Tech</span>
        <span class="text-purple-300 font-medium relative inline-block">
          Blog
          <span
            class="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-ping"
          ></span>
        </span>
      </h1>
      <div
        class="w-48 h-1 mx-auto mt-4 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
      ></div>
    </div>

    {#if !selectedPost}
      <div class="space-y-6">
        {#each posts as post}
          <button
            on:click={() => showPost(post)}
            class="w-full text-left block p-6 rounded-lg bg-slate-800/60 border border-pink-400/10 hover:border-pink-400/40 transition-all duration-200 cursor-pointer"
          >
            <div class="flex flex-col gap-1">
              <span class="text-pink-300 text-xl font-semibold"
                >{post.title}</span
              >
              <span class="text-xs text-purple-200/60">{post.date}</span>
              <span class="text-purple-100/80 text-base">{post.summary}</span>
            </div>
          </button>
        {/each}
      </div>
    {:else}
      <div class="mb-6">
        <button
          on:click={backToList}
          class="text-pink-300 hover:text-pink-200 text-sm mb-4 flex items-center gap-2"
        >
          <i class="fa-solid fa-arrow-left"></i> Back to posts
        </button>
        {#if selectedPost.webm}
          <div class="mb-4 flex justify-center">
            <video
              controls
              class="rounded-lg shadow-lg max-w-full h-auto bg-black border border-pink-400/20"
            >
              <source src={selectedPost.webm} type="video/webm" />
              <track kind="captions" label="No captions" />
              Your browser does not support the WebM video format.
            </video>
          </div>
        {/if}
        <div
          class="prose prose-invert max-w-none bg-slate-900/60 rounded-xl border border-pink-400/10 p-4"
        >
          {#if selectedPost.component}
            <svelte:component this={selectedPost.component} let:htmlContent>
              {@html htmlContent &&
                htmlContent.replace(
                  /<a href=\"(.*?\.webm)\".*?>(.*?)<\/a>/g,
                  (match, url, text) =>
                    `<video controls class='rounded-lg shadow-lg max-w-full h-auto bg-black border border-pink-400/20 my-4'><source src='${url}' type='video/webm'>Your browser does not support the WebM video format.</video>`
                )}
            </svelte:component>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>

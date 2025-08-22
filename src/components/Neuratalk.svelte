<script>
  import { marked } from "marked";
  import "../styles/markdown.css";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  const url =
    "https://raw.githubusercontent.com/temidaradev/NeuraTalk/refs/heads/master/README.md";

  const fallbackContent = `
# NeuraTalk

A modern, user-friendly GUI application for interacting with local Ollama language models. NeuraTalk provides a clean interface for chatting with AI models while offering customization options for a personalized experience.

## Features

★ Clean, intuitive interface
★ Support for multiple Ollama models
★ Customizable chat settings
★ Conversation history
★ Code highlighting and markdown support

## Getting Started

1. Install Ollama on your system
2. Pull your desired language models
3. Launch NeuraTalk and start chatting
  `;

  let content = "";
  let error = null;
  let isLoading = true;

  async function fetchContent() {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(url, {
        signal: controller.signal,
        cache: "no-cache",
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn(
          "Failed to fetch README from GitHub, using fallback content"
        );
        return marked(fallbackContent);
      }

      const text = await response.text();
      if (!text || text.trim().length < 10) {
        console.warn(
          "Received empty or invalid content from GitHub, using fallback content"
        );
        return marked(fallbackContent);
      }

      return marked(text);
    } catch (e) {
      console.error("Error fetching content:", e);
      return marked(fallbackContent);
    } finally {
      isLoading = false;
      error = null;
    }
  }

  onMount(() => {
    fetchContent().then((result) => {
      content = result;
    });
  });
</script>

<div class="relative py-6">
  {#if isLoading}
    <div class="flex justify-center items-center h-40" in:fade>
      <div class="loading-container">
        <span class="text-pink-400 text-xl">Loading NeuraTalk...</span>
        <div class="loading-animation"></div>
      </div>
    </div>
  {:else if error}
    <div class="error-container" in:fade>
      <p class="text-red-400 text-center text-lg">Error: {error}</p>
      <button
        class="retry-button mt-4"
        on:click={() => {
          isLoading = true;
          error = null;
          fetchContent().then((result) => {
            content = result;
          });
        }}
      >
        Try Again
      </button>
    </div>
  {:else}
    <div class="markdown-wrapper" in:fly={{ y: 20, duration: 600 }}>
      <div class="markdown-content">
        {@html content}
      </div>
    </div>
  {/if}
</div>

<style>
  .markdown-wrapper {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
  }

  .markdown-wrapper::before,
  .markdown-wrapper::after {
    content: "";
    position: absolute;
    width: 120px;
    height: 120px;
    z-index: -1;
    opacity: 0.4;
    pointer-events: none;
  }

  .markdown-wrapper::before {
    top: -30px;
    left: -30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'%3E%3Cpath d='M30,10 Q55,5 70,20 Q85,35 80,60 Q75,85 50,90 Q25,95 15,70 Q5,45 30,10' stroke='%23ff79c6' stroke-width='2'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
  }

  .markdown-wrapper::after {
    bottom: -30px;
    right: -30px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'%3E%3Cpath d='M30,10 Q55,5 70,20 Q85,35 80,60 Q75,85 50,90 Q25,95 15,70 Q5,45 30,10' stroke='%23bd93f9' stroke-width='2'/%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(180deg);
  }

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .loading-animation {
    position: relative;
    width: 60px;
    height: 4px;
    background: rgba(255, 121, 198, 0.2);
    border-radius: 4px;
    overflow: hidden;
  }

  .loading-animation::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 30%;
    background: #ff79c6;
    border-radius: 4px;
    animation: loading 1.5s infinite ease;
  }

  @keyframes loading {
    0% {
      left: -30%;
    }
    100% {
      left: 100%;
    }
  }

  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
  }

  .retry-button {
    padding: 0.5rem 1.5rem;
    background-color: rgba(255, 121, 198, 0.2);
    border: 1px solid #ff79c6;
    color: #ff79c6;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .retry-button:hover {
    background-color: rgba(255, 121, 198, 0.3);
    box-shadow: 0 0 10px rgba(255, 121, 198, 0.4);
  }
</style>

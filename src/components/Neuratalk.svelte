<script>
  import { marked } from "marked";
  import "../styles/markdown.css";

  const url =
    "https://raw.githubusercontent.com/temidaradev/NeuraTalk/refs/heads/master/README.md";

  let content = "";
  let error = null;

  async function fetchContent() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch content");
      const text = await response.text();
      return marked(text);
    } catch (e) {
      error = e.message;
      return "Failed to load content. Please try again later.";
    }
  }
</script>

<div class="markdown-content">
  {#await fetchContent()}
    <p class="text-pink-400">Loading...</p>
  {:then content}
    {@html content}
  {:catch error}
    <p class="text-red-400">Error: {error}</p>
  {/await}
</div>

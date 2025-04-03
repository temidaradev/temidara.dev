<script>
  import { marked } from "marked";
  import "../styles/markdown.css"; // Stil dosyasını ekliyoruz

  const url =
    "https://raw.githubusercontent.com/temidaradev/NeuraTalk/refs/heads/main/README.md";
</script>

<div class="markdown-content">
  {#await fetch(url).then((r) => r.text()) then text}
    {@html marked(text)}
  {/await}
</div>

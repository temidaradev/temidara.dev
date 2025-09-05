<script>
  import RustP2PChat from "../../../../components/blog/RustP2PChat.svelte";
  import Sakura from "../../../../components/Sakura.svelte";
  import VideoPlayer from "../../../../components/VideoPlayer.svelte";
</script>

<div class="blog-container">
  <div class="sakura-overlay">
    <Sakura />
  </div>

  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="blog-content">
      <RustP2PChat />
      <VideoPlayer
        title="Rust P2P Chat Demo"
        readmeUrl="https://raw.githubusercontent.com/temidaradev/rust-p2p-chat/refs/heads/serve-cli/README.md"
        placeholder="/static/video-placeholder.jpg"
      />
    </div>

    <div class="mt-8 text-center">
      <a href="/blog/tech" class="back-link"> ← Back to Tech Blog </a>
    </div>
  </div>
</div>

<style>
  .blog-container {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(
      135deg,
      rgba(13, 12, 33, 0.95) 0%,
      rgba(45, 41, 87, 0.8) 100%
    );
    overflow: hidden;
  }

  .sakura-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.15;
  }

  .blog-content {
    position: relative;
    z-index: 2;
    background: rgba(40, 42, 54, 0.98);
    border-radius: 16px;
    border: 1px solid rgba(255, 121, 198, 0.15);
    backdrop-filter: blur(20px);
    padding: 2.5rem;
    margin: 2rem 0;
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 121, 198, 0.1);
    transition: all 0.3s ease;
  }

  .blog-content:hover {
    border-color: rgba(255, 121, 198, 0.25);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 121, 198, 0.2);
  }

  .blog-content :global(.markdown-content) {
    color: #f8f8f2;
    font-size: 1rem;
    line-height: 1.7;
  }

  .blog-content :global(h1) {
    color: #ff79c6;
    margin-top: 2rem;
    margin-bottom: 1.25rem;
    font-size: 1.875rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .blog-content :global(h2) {
    color: #bd93f9;
    margin-top: 1.75rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
  }

  .blog-content :global(h3) {
    color: #8be9fd;
    margin-top: 1.5rem;
    margin-bottom: 0.875rem;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4;
  }

  .blog-content :global(h4) {
    color: #50fa7b;
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
  }

  .blog-content :global(h5) {
    color: #ffb86c;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
  }

  .blog-content :global(h6) {
    color: #f1fa8c;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.4;
  }

  .blog-content :global(p) {
    margin-bottom: 1.25rem;
    line-height: 1.7;
    color: rgba(248, 248, 242, 0.9);
  }

  .blog-content :global(code) {
    background: rgba(68, 71, 90, 0.9);
    color: #50fa7b;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    font-family: "Fira Code", "JetBrains Mono", monospace;
    font-size: 0.875em;
    border: 1px solid rgba(80, 250, 123, 0.2);
  }

  .blog-content :global(pre) {
    background: rgba(40, 42, 54, 0.95);
    padding: 1.5rem;
    border-radius: 12px;
    overflow-x: auto;
    margin: 1.5rem 0;
    border: 1px solid rgba(189, 147, 249, 0.2);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }

  .blog-content :global(pre code) {
    background: none;
    padding: 0;
    border: none;
    color: #f8f8f2;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #ff79c6;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
    padding: 0.75rem 1.5rem;
    border: 1px solid rgba(255, 121, 198, 0.3);
    border-radius: 8px;
    background: rgba(255, 121, 198, 0.1);
    backdrop-filter: blur(10px);
  }

  .back-link:hover {
    color: #ff92d0;
    border-color: rgba(255, 121, 198, 0.6);
    background: rgba(255, 121, 198, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 121, 198, 0.3);
  }

  @media (min-width: 768px) {
    .blog-content {
      padding: 3rem;
    }
  }
</style>

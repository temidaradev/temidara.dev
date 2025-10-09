<script>
    import NixOS from "../../../../components/blog/NixOS.svelte";
    import Sakura from "../../../../components/Sakura.svelte";
    import VideoPlayer from "../../../../components/VideoPlayer.svelte";
</script>

<div class="blog-container">
    <div class="sakura-overlay">
        <Sakura />
    </div>

    <div class="max-w-4xl mx-auto px-4 py-8">
        <div class="blog-content">
            <NixOS />
            <VideoPlayer
                title="NixOS Configuration Demo"
                readmeUrl="https://raw.githubusercontent.com/temidaradev/nixos/refs/heads/master/README.md"
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
        background: rgba(30, 41, 59, 0.8);
        backdrop-filter: blur(10px);
        border-radius: 1rem;
        border: 1px solid rgba(148, 163, 184, 0.2);
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .back-link {
        display: inline-block;
        color: #a78bfa;
        text-decoration: none;
        font-weight: 500;
        padding: 0.75rem 1.5rem;
        border-radius: 0.75rem;
        background: rgba(79, 70, 229, 0.1);
        border: 1px solid rgba(79, 70, 229, 0.3);
        transition: all 0.2s ease;
    }

    .back-link:hover {
        background: rgba(79, 70, 229, 0.2);
        border-color: rgba(79, 70, 229, 0.5);
        color: #c4b5fd;
        transform: translateY(-1px);
    }

    @media (max-width: 768px) {
        .blog-content {
            padding: 1rem;
            margin: 1rem;
        }
    }
</style>

<script>
    import { marked } from "marked";
    import "../../styles/markdown.css";
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";

    const url =
        "https://raw.githubusercontent.com/temidaradev/nixos/refs/heads/master/README.md";

    const fallbackContent = `\n# NixOS Configuration\n\nA comprehensive NixOS configuration flake featuring Hyprland window manager, development tools, and a complete desktop environment setup.\n\n## Features\n\n- **Hyprland Window Manager**: Modern, dynamic tiling Wayland compositor\n- **Development Tools**: Neovim, VS Code, multiple programming languages\n- **Gaming**: Steam, Wine, Lunar Client support\n- **Virtualization**: Docker and VMware integration\n- **Hardware Support**: AMD GPU, Bluetooth, sensors\n\n## Tech Stack\n\n- **OS**: NixOS (unstable)\n- **Window Manager**: Hyprland\n- **Shell**: Fish/Zsh\n- **Terminal**: Kitty\n- **Editor**: Neovim + VS Code\n- **Languages**: Python, Go, Zig, Haskell, Rust, Lua\n\nThis configuration provides a productive Linux environment with reproducible system management through Nix flakes.\n`;

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
                    "Failed to fetch README from GitHub, using fallback content",
                );
                return marked(fallbackContent);
            }

            const text = await response.text();
            if (!text || text.trim().length < 10) {
                console.warn(
                    "Received empty or invalid content from GitHub, using fallback content",
                );
                return marked(fallbackContent);
            }

            const htmlContent = marked(text);

            const filteredContent = htmlContent
                .replace(/<video[^>]*>.*?<\/video>/gis, "")
                .replace(/<iframe[^>]*>.*?<\/iframe>/gis, "")
                .replace(/<embed[^>]*\/?>/gis, "")
                .replace(/<object[^>]*>.*?<\/object>/gis, "")
                .replace(/<source[^>]*\/?>/gis, "")
                .replace(/<audio[^>]*>.*?<\/audio>/gis, "")
                .replace(/<img[^>]*src=["'][^"']*["'][^>]*>/gis, (match) => {
                    if (match.includes("githubusercontent.com")) {
                        return match;
                    }
                    return "";
                });

            return filteredContent;
        } catch (err) {
            console.warn("Error fetching content:", err);
            return marked(fallbackContent);
        }
    }

    onMount(async () => {
        content = await fetchContent();
        isLoading = false;
    });
</script>

<div class="blog-post">
    <div class="blog-header">
        <div class="tech-badge">
            <i class="fas fa-cogs"></i>
            NixOS Configuration
        </div>
        <h1 class="blog-title">
            <span class="gradient-text">NixOS</span>
        </h1>
        <p class="blog-description">
            A comprehensive NixOS configuration with Hyprland window manager,
            development tools, and reproducible system management
        </p>
    </div>

    <div class="tech-stack">
        <div class="stack-item">
            <i class="fab fa-linux"></i>
            <span>NixOS</span>
        </div>
        <div class="stack-item">
            <i class="fas fa-window-maximize"></i>
            <span>Hyprland</span>
        </div>
        <div class="stack-item">
            <i class="fas fa-code"></i>
            <span>Neovim</span>
        </div>
        <div class="stack-item">
            <i class="fab fa-python"></i>
            <span>Python</span>
        </div>
        <div class="stack-item">
            <i class="fab fa-rust"></i>
            <span>Rust</span>
        </div>
        <div class="stack-item">
            <i class="fas fa-gamepad"></i>
            <span>Steam</span>
        </div>
    </div>

    {#if isLoading}
        <div class="loading" in:fade>
            <div class="loading-spinner"></div>
            <p>Loading NixOS configuration details...</p>
        </div>
    {:else}
        <div class="content" in:fly={{ y: 20, duration: 500 }}>
            {@html content}
        </div>
    {/if}

    <div class="project-links">
        <a
            href="https://github.com/temidaradev/nixos"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link github"
        >
            <i class="fab fa-github"></i>
            View on GitHub
        </a>
        <a
            href="https://github.com/temidaradev/nixos/blob/master/flake.nix"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link code"
        >
            <i class="fas fa-code"></i>
            Flake Configuration
        </a>
    </div>
</div>

<style>
    .blog-post {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
    }

    .blog-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    .tech-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: linear-gradient(135deg, #4f46e5, #7c3aed);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
    }

    .blog-title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
        line-height: 1.1;
    }

    .gradient-text {
        background: linear-gradient(135deg, #4f46e5, #7c3aed);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .blog-description {
        font-size: 1.125rem;
        color: #94a3b8;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
    }

    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin: 3rem 0;
        padding: 2rem;
        background: rgba(30, 41, 59, 0.5);
        border-radius: 1rem;
        border: 1px solid rgba(148, 163, 184, 0.1);
    }

    .stack-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(51, 65, 85, 0.5);
        padding: 0.75rem 1.25rem;
        border-radius: 0.75rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: #e2e8f0;
        border: 1px solid rgba(148, 163, 184, 0.2);
    }

    .stack-item i {
        color: #a78bfa;
    }

    .loading {
        text-align: center;
        padding: 3rem;
        color: #94a3b8;
    }

    .loading-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid rgba(148, 163, 184, 0.2);
        border-top: 3px solid #a78bfa;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .content {
        background: rgba(30, 41, 59, 0.3);
        border-radius: 1rem;
        padding: 2rem;
        border: 1px solid rgba(148, 163, 184, 0.1);
        margin: 2rem 0;
    }

    .content :global(h1) {
        color: #f1f5f9;
        font-size: 2rem;
        margin-bottom: 1.5rem;
        border-bottom: 2px solid #4f46e5;
        padding-bottom: 0.5rem;
    }

    .content :global(h2) {
        color: #e2e8f0;
        font-size: 1.5rem;
        margin: 2rem 0 1rem 0;
        border-left: 4px solid #7c3aed;
        padding-left: 1rem;
    }

    .content :global(h3) {
        color: #cbd5e1;
        font-size: 1.25rem;
        margin: 1.5rem 0 1rem 0;
    }

    .content :global(p) {
        color: #94a3b8;
        line-height: 1.7;
        margin-bottom: 1rem;
    }

    .content :global(code) {
        background: rgba(51, 65, 85, 0.5);
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-family: "JetBrains Mono", monospace;
        font-size: 0.875rem;
        color: #a78bfa;
    }

    .content :global(pre) {
        background: rgba(15, 23, 42, 0.8);
        border: 1px solid rgba(148, 163, 184, 0.2);
        border-radius: 0.5rem;
        padding: 1rem;
        overflow-x: auto;
        margin: 1rem 0;
    }

    .content :global(pre code) {
        background: none;
        padding: 0;
        color: #e2e8f0;
    }

    .content :global(ul),
    .content :global(ol) {
        color: #94a3b8;
        margin: 1rem 0;
        padding-left: 1.5rem;
    }

    .content :global(li) {
        margin-bottom: 0.5rem;
        line-height: 1.6;
    }

    .content :global(a) {
        color: #a78bfa;
        text-decoration: none;
        transition: color 0.2s;
    }

    .content :global(a:hover) {
        color: #c4b5fd;
        text-decoration: underline;
    }

    .project-links {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 3rem;
        flex-wrap: wrap;
    }

    .project-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        border-radius: 0.75rem;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s;
        border: 1px solid rgba(148, 163, 184, 0.2);
    }

    .project-link.github {
        background: linear-gradient(135deg, #1f2937, #374151);
        color: #f1f5f9;
    }

    .project-link.github:hover {
        background: linear-gradient(135deg, #374151, #4b5563);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .project-link.code {
        background: linear-gradient(135deg, #4f46e5, #7c3aed);
        color: white;
    }

    .project-link.code:hover {
        background: linear-gradient(135deg, #7c3aed, #a855f7);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }

    @media (max-width: 768px) {
        .blog-title {
            font-size: 2rem;
        }

        .tech-stack {
            padding: 1rem;
        }

        .stack-item {
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
        }

        .project-links {
            flex-direction: column;
            align-items: center;
        }
    }
</style>

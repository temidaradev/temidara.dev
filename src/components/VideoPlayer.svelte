<script>
    import { onMount } from "svelte";

    export let readmeUrl = "";
    export let title = "Project Demo";

    let videoElement;
    let isLoading = true;
    let hasError = false;
    let videoUrl = "";
    let isVideoLoading = true;

    function handleVideoLoad() {
        isVideoLoading = false;
    }

    function handleVideoError() {
        isVideoLoading = false;
        hasError = true;
    }

    async function extractVideoFromReadme() {
        if (!readmeUrl) {
            isLoading = false;
            return;
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const response = await fetch(readmeUrl, {
                signal: controller.signal,
                cache: "no-cache",
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                console.warn("Failed to fetch README from GitHub");
                isLoading = false;
                return;
            }

            const text = await response.text();

            // Extract video URLs from markdown
            // Look for various video patterns in markdown:
            // - ![video](url)
            // - [video](url)
            // - Direct video URLs (.mp4, .webm, .mov, etc.)
            // - GitHub user-attachments assets (with or without extensions)

            const videoPatterns = [
                // GitHub user-attachments assets (any format)
                /https:\/\/github\.com\/user-attachments\/assets\/[a-f0-9-]+/gi,
                // GitHub user-attachments with file extensions
                /https:\/\/github\.com\/user-attachments\/assets\/[^\s<>")]*\.(?:mp4|webm|mov|avi)/gi,
                // General video URLs with extensions
                /https?:\/\/[^\s<>")]*\.(?:mp4|webm|mov|avi)/gi,
                // Markdown video syntax with extensions
                /!\[.*?\]\((https?:\/\/[^\s)]*\.(?:mp4|webm|mov|avi))\)/gi,
                // Markdown link syntax that might contain videos (look for video-like filenames)
                /\[.*?\.(?:webm|mp4|mov|avi).*?\]\((https?:\/\/[^\s)]+)\)/gi,
                // Markdown link syntax with GitHub user-attachments (any format)
                /\[.*?\]\((https:\/\/github\.com\/user-attachments\/assets\/[a-f0-9-]+)\)/gi,
            ];

            let foundVideoUrl = "";

            for (const pattern of videoPatterns) {
                const matches = text.match(pattern);
                if (matches && matches.length > 0) {
                    if (pattern.source.includes("\\[")) {
                        const urlMatch = matches[0].match(
                            /\((https?:\/\/[^\s)]+)\)/,
                        );
                        if (urlMatch) {
                            foundVideoUrl = urlMatch[1];
                            break;
                        }
                    } else {
                        foundVideoUrl = matches[0];
                        break;
                    }
                }
            }

            if (
                foundVideoUrl &&
                foundVideoUrl.includes("github.com/user-attachments/assets/")
            ) {
                const contextMatch = text.match(
                    /\[([^[\]]*\.(?:webm|mp4|mov|avi)[^[\]]*)\]\(https:\/\/github\.com\/user-attachments\/assets\/[a-f0-9-]+\)/gi,
                );
                if (contextMatch) {
                    console.log("Found video with context:", contextMatch[0]);
                }
                console.log(
                    "Found GitHub user-attachments video URL:",
                    foundVideoUrl,
                );
            }

            if (foundVideoUrl) {
                videoUrl = foundVideoUrl;
                console.log("Found video URL:", videoUrl);
            } else {
                console.log("No video found in README");
            }
        } catch (e) {
            console.error("Error extracting video from README:", e);
        } finally {
            isLoading = false;
        }
    }

    onMount(() => {
        extractVideoFromReadme();
    });
</script>

<div class="video-player-container">
    <h3 class="video-title">{title}</h3>

    <div class="video-wrapper">
        {#if videoUrl}
            <video
                bind:this={videoElement}
                controls
                preload="metadata"
                class="video-element"
                class:hidden={isVideoLoading}
                on:loadeddata={handleVideoLoad}
                on:error={handleVideoError}
            >
                <source src={videoUrl} type="video/mp4" />
                <source src={videoUrl} type="video/webm" />
                <track kind="captions" />
                Your browser does not support the video tag.
            </video>

            {#if isVideoLoading}
                <div class="loading-placeholder">
                    <div class="loading-spinner"></div>
                    <p>Loading video...</p>
                </div>
            {/if}

            {#if hasError}
                <div class="error-placeholder">
                    <div class="error-icon">🎥</div>
                    <p>Video unavailable</p>
                    <span class="error-text">Unable to load video content</span>
                </div>
            {/if}
        {:else if isLoading}
            <div class="loading-placeholder">
                <div class="loading-spinner"></div>
                <p>Searching for video...</p>
            </div>
        {:else}
            <div class="no-video-placeholder">
                <div class="placeholder-icon">🎬</div>
                <p>Demo video coming soon</p>
                <span class="placeholder-text"
                    >No video found in project README</span
                >
            </div>
        {/if}
    </div>
</div>

<style>
    .video-player-container {
        margin-top: 2rem;
        padding: 1.5rem;
        background: rgba(68, 71, 90, 0.4);
        border-radius: 12px;
        border: 1px solid rgba(255, 121, 198, 0.2);
        backdrop-filter: blur(10px);
    }

    .video-title {
        color: #ff79c6;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        text-align: center;
    }

    .video-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 8px;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.3);
    }

    .video-element {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        transition: opacity 0.3s ease;
    }

    .video-element.hidden {
        opacity: 0;
    }

    .loading-placeholder,
    .error-placeholder,
    .no-video-placeholder {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #f8f8f2;
        text-align: center;
        padding: 1rem;
    }

    .loading-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid rgba(255, 121, 198, 0.3);
        border-top: 3px solid #ff79c6;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
    }

    .error-icon,
    .placeholder-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.7;
    }

    .loading-placeholder p,
    .error-placeholder p,
    .no-video-placeholder p {
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: #ff79c6;
    }

    .error-text,
    .placeholder-text {
        font-size: 0.9rem;
        opacity: 0.7;
        color: #bd93f9;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 768px) {
        .video-player-container {
            margin-top: 1.5rem;
            padding: 1rem;
        }

        .video-title {
            font-size: 1.1rem;
        }

        .error-icon,
        .placeholder-icon {
            font-size: 2.5rem;
        }
    }

    .video-element::-webkit-media-controls-panel {
        background-color: rgba(40, 42, 54, 0.8);
    }

    .video-element::-webkit-media-controls-play-button,
    .video-element::-webkit-media-controls-mute-button,
    .video-element::-webkit-media-controls-fullscreen-button {
        filter: invert(1) sepia(1) saturate(5) hue-rotate(240deg);
    }
</style>

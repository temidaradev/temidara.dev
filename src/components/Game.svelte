<script>
</script>

<main class="game-content relative z-10">
    <div class="game-description">
        <p class="mb-4">
            <span class="text-pink-400 font-semibold">The Unspooled Self</span> is
            an immersive narrative game with a powerful social message. Navigate
            through a surreal dreamscape as you uncover fragments of yourself and
            learn what it means to truly understand your identity.
        </p>
        <p class="mb-6">
            This is a very short demo of the game. I was a bit rushed to publish
            it, so you may encounter some bugs or rough edges. Thanks in advance
            for your understanding and patience!
        </p>
    </div>

    <div class="game-embed">
        <div class="iframe-container">
            <iframe
                title="The Unspooled Self Demo"
                frameborder="0"
                src="https://itch.io/embed/3446861?bg_color=000000&amp;fg_color=ffffff&amp;link_color=2a48ff&amp;border_color=bebebe"
                width="552"
                height="167"
                class="shadow-glow"
                ><a href="https://jinchuugames.itch.io/the-unspooled-self-beta"
                    >The Unspooled Self Beta by jinchuugames</a
                ></iframe
            >
        </div>
    </div>

    <div class="features-section">
        <h3 class="features-title">Game Features</h3>
        <ul class="features-list">
            <li>
                <span class="feature-highlight">★</span> Indie horror game with a
                classic story
            </li>
        </ul>
    </div>
</main>

<style>
    .game-content {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem 1rem;
        color: #f8f8f2;
    }

    .game-description {
        background-color: rgba(13, 12, 33, 0.7);
        padding: 1.5rem;
        border-radius: 10px;
        border: 1px solid rgba(189, 147, 249, 0.2);
        box-shadow: 0 0 15px rgba(189, 147, 249, 0.15);
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    .game-embed {
        display: flex;
        justify-content: center;
        margin: 2rem 0;
    }

    .iframe-container {
        position: relative;
    }

    .shadow-glow {
        border-radius: 8px;
        box-shadow:
            0 0 20px rgba(189, 147, 249, 0.4),
            0 0 40px rgba(255, 121, 198, 0.2);
    }

    .features-section {
        background-color: rgba(13, 12, 33, 0.7);
        padding: 1.5rem;
        border-radius: 10px;
        border: 1px solid rgba(255, 121, 198, 0.2);
        box-shadow: 0 0 15px rgba(255, 121, 198, 0.15);
    }

    .features-title {
        font-size: 1.5rem;
        color: #bd93f9;
        margin-bottom: 1rem;
        text-shadow: 0 0 8px rgba(189, 147, 249, 0.5);
        border-bottom: 1px solid rgba(189, 147, 249, 0.3);
        padding-bottom: 0.5rem;
    }

    .features-list {
        list-style-type: none;
        padding: 0;
    }

    .features-list li {
        margin-bottom: 0.75rem;
        padding-left: 1.5rem;
        position: relative;
    }

    .feature-highlight {
        color: #ff79c6;
        position: absolute;
        left: 0;
        text-shadow: 0 0 5px rgba(255, 121, 198, 0.7);
    }

    @media (max-width: 640px) {
        .game-content {
            padding: 1rem 0.5rem;
        }
    }
</style>

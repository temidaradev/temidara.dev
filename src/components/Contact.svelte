<script>
  let name = "";
  let email = "";
  let message = "";
  let isSubmitting = false;
  let submitStatus = { success: false, message: "" };
  let formVisible = true;

  // Function to handle form submission
  async function handleSubmit() {
    if (!name || !email || !message) {
      submitStatus = {
        success: false,
        message: "Prithee, fill out all fields as required by royal decree.",
      };
      return;
    }

    isSubmitting = true;
    submitStatus = { success: false, message: "" };

    // Simulate form submission - in a real implementation, you would use a form service like Formspree
    setTimeout(() => {
      isSubmitting = false;
      submitStatus = {
        success: true,
        message:
          "Thy message hath been received with gratitude! I shall respond with haste in due time.",
      };
      formVisible = false;

      // Reset form after successful submission
      name = "";
      email = "";
      message = "";

      // Show form again after a few seconds
      setTimeout(() => {
        formVisible = true;
        submitStatus = { success: false, message: "" };
      }, 5000);
    }, 1500);
  }
</script>

<section class="contact-section relative py-16">
  <!-- Anime-style background elements -->
  <div class="absolute inset-0 overflow-hidden z-[-1]">
    <!-- Cyberpunk grid background -->
    <div
      class="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.2)_1px,transparent_1px)] bg-[length:30px_30px] opacity-30 pointer-events-none"
    ></div>

    <!-- Glowing circles -->
    <div
      class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-600/20 filter blur-[70px] animate-pulse-slow"
    ></div>
    <div
      class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-600/20 filter blur-[90px] animate-pulse-slow-delay"
    ></div>
  </div>

  <!-- Section header -->
  <div class="relative text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold mb-3">
      <span class="text-violet-400 font-medium">コンタクト</span>
      <span class="text-pink-400 font-medium">フォーム</span>
    </h2>
    <div
      class="w-48 h-1 mx-auto mt-2 bg-gradient-to-r from-transparent via-pink-400 to-transparent"
      style="box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);"
    ></div>
    <p class="text-violet-200 mt-4 mb-2">Forge a Connection with My Self!</p>
    <p class="text-sm text-violet-300/70">
      Prithee, send forth a missive for potential alliances or merely to extend
      thine greetings
    </p>
  </div>

  <!-- Contact form -->
  {#if formVisible}
    <form
      on:submit|preventDefault={handleSubmit}
      class="max-w-md mx-auto bg-slate-900/40 backdrop-blur-lg border border-violet-500/20 rounded-lg p-6 shadow-lg transform transition-all duration-500"
      style="box-shadow: 0 0 25px rgba(139, 92, 246, 0.15);"
    >
      <div class="mb-6 relative group">
        <label for="name" class="block text-sm text-violet-300 mb-2 font-medium"
          >お名前 / Name</label
        >
        <input
          type="text"
          id="name"
          bind:value={name}
          class="w-full px-4 py-2 bg-slate-800/80 border border-violet-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400/50 text-white"
        />
        <div
          class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-violet-400 group-focus-within:w-full transition-all duration-300"
        ></div>
      </div>

      <div class="mb-6 relative group">
        <label
          for="email"
          class="block text-sm text-violet-300 mb-2 font-medium"
          >メール / Email</label
        >
        <input
          type="email"
          id="email"
          bind:value={email}
          class="w-full px-4 py-2 bg-slate-800/80 border border-violet-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400/50 text-white"
        />
        <div
          class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-violet-400 group-focus-within:w-full transition-all duration-300"
        ></div>
      </div>

      <div class="mb-6 relative group">
        <label
          for="message"
          class="block text-sm text-violet-300 mb-2 font-medium"
          >メッセージ / Message</label
        >
        <textarea
          id="message"
          bind:value={message}
          rows="5"
          class="w-full px-4 py-2 bg-slate-800/80 border border-violet-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400/50 text-white resize-none"
        ></textarea>
        <div
          class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-violet-400 group-focus-within:w-full transition-all duration-300"
        ></div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        class="w-full px-6 py-3 bg-gradient-to-r from-violet-600/80 to-pink-600/80 hover:from-violet-500/90 hover:to-pink-500/90 rounded-md text-white font-medium relative overflow-hidden transition-all duration-300 transform hover:scale-105"
      >
        <span class="relative z-10 font-medium">
          {#if isSubmitting}
            送信中... / Dispatching Missive...
          {:else}
            送信 / Dispatch Thy Missive
          {/if}
        </span>
        <span
          class="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-pink-400/20 transform translate-y-full group-hover:translate-y-0 transition-transform"
        ></span>
      </button>

      {#if submitStatus.message}
        <p
          class={`mt-4 text-center ${submitStatus.success ? "text-green-400" : "text-red-400"}`}
        >
          {submitStatus.message}
        </p>
      {/if}
    </form>
  {:else}
    <!-- Thank you message after submission -->
    <div
      class="max-w-md mx-auto bg-slate-900/40 backdrop-blur-lg border border-green-500/20 rounded-lg p-8 text-center shadow-lg animate-fade-in"
      style="box-shadow: 0 0 25px rgba(74, 222, 128, 0.15);"
    >
      <div class="mb-6 text-5xl">
        <i class="fa-solid fa-check-circle text-green-400"></i>
      </div>
      <h3 class="text-xl text-green-400 mb-2">ありがとうございました！</h3>
      <p class="text-violet-200">
        {submitStatus.message}
      </p>
    </div>
  {/if}

  <!-- Social media links -->
  <div class="flex justify-center mt-10 space-x-6">
    <a
      href="https://x.com/temidaradev"
      target="_blank"
      class="text-pink-400 hover:text-pink-300 transition-colors duration-300"
      aria-label="Twitter"
    >
      <i class="fa-brands fa-x-twitter text-2xl"></i>
    </a>
    <a
      href="https://github.com/temidaradev"
      target="_blank"
      class="text-pink-400 hover:text-pink-300 transition-colors duration-300"
      aria-label="GitHub"
    >
      <i class="fa-brands fa-github text-2xl"></i>
    </a>
    <!-- Add more social links as needed -->
  </div>
</section>

<style>
  @keyframes pulse-slow {
    0%,
    100% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.4;
    }
  }

  @keyframes pulse-slow-delay {
    0%,
    100% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-pulse-slow {
    animation: pulse-slow 8s infinite;
  }

  .animate-pulse-slow-delay {
    animation: pulse-slow 10s infinite;
    animation-delay: 2s;
  }

  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }

  .contact-section {
    isolation: isolate;
  }
</style>

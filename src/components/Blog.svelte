<script>
    let tabs = [
        {
            name: "School Life",
            icon: "fa-solid fa-school",
            description:
                "My experiences and thoughts about school life, learning journey, and academic adventures",
            link: "/blog/school",
            bgClass: "from-pink-400/10 to-purple-400/10",
        },
        {
            name: "Game Dev",
            icon: "fa-solid fa-gamepad",
            description:
                "Exploring game development, sharing insights, and documenting my progress",
            link: "/game",
            bgClass: "from-purple-400/10 to-pink-400/10",
        },
        {
            name: "Tech Blog",
            icon: "fa-solid fa-code",
            description:
                "Programming tutorials, technical insights, and software development experiences",
            link: "/blog/tech",
            bgClass: "from-pink-400/10 to-purple-400/10",
            // posts moved to tech blog page
        },
    ];
</script>

<div class="w-full min-h-screen p-8">
    <div class="max-w-4xl mx-auto">
        <div class="relative text-center mb-16">
            <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"
            ></div>
            <h1 class="text-4xl md:text-5xl relative">
                <span class="text-pink-400 anime-text-glow font-medium">My</span
                >
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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each tabs as tab}
                <div>
                    <a
                        href={tab.link}
                        class="group relative overflow-hidden rounded-lg bg-slate-800/50 backdrop-blur-sm border-2 border-pink-400/30 hover:border-pink-400 transition-all duration-300 block"
                    >
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-pink-400/5 to-purple-400/5"
                        ></div>
                        <div
                            class="absolute inset-0 bg-gradient-to-r {tab.bgClass} opacity-0 group-hover:opacity-100 transition-all duration-500"
                        ></div>

                        <div
                            class="absolute top-0 right-0 w-1 h-1 bg-pink-400 rounded-full group-hover:animate-ping"
                        ></div>
                        <div
                            class="absolute bottom-0 left-0 w-1 h-1 bg-purple-400 rounded-full group-hover:animate-ping"
                        ></div>

                        <div class="p-6 relative z-10">
                            <div class="relative">
                                <div
                                    class="absolute inset-0 text-3xl text-pink-400 blur-sm group-hover:blur-md transition-all duration-300"
                                >
                                    <i class={tab.icon}></i>
                                </div>
                                <div
                                    class="relative text-3xl text-pink-400 group-hover:text-pink-300 transition-colors duration-300"
                                >
                                    <i class={tab.icon}></i>
                                </div>
                            </div>

                            <h2
                                class="text-2xl mb-3 text-pink-400 group-hover:text-pink-300 transition-colors duration-300 font-bold font-medium"
                            >
                                {tab.name}
                            </h2>

                            <p
                                class="text-purple-200/70 group-hover:text-purple-100 text-sm leading-relaxed transition-colors duration-300"
                            >
                                {tab.description}
                            </p>

                            <div
                                class="mt-4 text-sm text-pink-400/70 group-hover:text-pink-300 transition-colors duration-300 flex items-center gap-2"
                            >
                                <span class="font-medium">Read More</span>
                                <i class="fa-solid fa-arrow-right text-xs"></i>
                            </div>
                        </div>

                        <div
                            class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-400/30 group-hover:border-pink-400 transition-colors duration-300"
                        ></div>
                        <div
                            class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-400/30 group-hover:border-pink-400 transition-colors duration-300"
                        ></div>
                    </a>

                    {#if tab.posts}
                        <div class="mt-4 space-y-4">
                            {#each tab.posts as post}
                                <a
                                    href={post.link}
                                    class="block p-4 rounded-lg bg-slate-700/60 border border-pink-400/10 hover:border-pink-400/40 transition-all duration-200"
                                >
                                    <div class="flex flex-col gap-1">
                                        <span
                                            class="text-pink-300 text-base font-semibold"
                                            >{post.title}</span
                                        >
                                        <span class="text-xs text-purple-200/60"
                                            >{post.date}</span
                                        >
                                        <span class="text-purple-100/80 text-sm"
                                            >{post.summary}</span
                                        >
                                    </div>
                                </a>
                            {/each}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>

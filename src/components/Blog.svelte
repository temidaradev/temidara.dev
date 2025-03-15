<script>
  let tabs = [
    {
      name: "School",
    },
    {
      name: "Game",
    },
  ];
</script>

<blog class="sticky z-[10] top-0 duration-200 px-6 py-6">
  {#each tabs as tab}
    <a href={tab.link} class="duration-200 hover:text-violet-400">
      <p>{tab.name}</p>
    </a>
  {/each}
</blog>

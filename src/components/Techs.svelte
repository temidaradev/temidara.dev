<script>
  export let yoes;
</script>

<a
  href={yoes.href}
  target="_blank"
  class="px-1 py-1 rounded-md border border-solid border-white hover:border-violet-700 duration-200 flex items-center gap-2"
>
  <p class="text-xl">{yoes.name} <span class="text-sm">{yoes.yoe}</span></p>
</a>

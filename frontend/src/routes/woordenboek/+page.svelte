<script>
  export let data;
</script>

<div class="mb-10">
  <div class="flex flex-col gap-2 items-center mt-4">
    <h2 class="text-3xl font-bold text-center">Woordenboek</h2>
    <div class="h-1 w-1/4 top-0 bg-gradient-to-r from-red-600 to-red-700" />
  </div>
  {#each data.woordenboek.items as woord}
    <div class="flex flex-col">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="pl-4">
          <p class="m-4 text-3xl font-bold underline">{woord.woord}</p>
        </div>
        <div class="mt-6 flex flex-col gap-2">
          <p class="m-4 text-2xl font-bold">{woord.beschrijving}</p>
          <p class="m-2 text-lg italic">{woord.vbzin}</p>
        </div>
      </div>
      <div
        class="h-1 w-11/12 top-0 bg-gradient-to-r from-red-600 to-red-700 self-center rounded-lg"
      />
    </div>
  {/each}
</div>

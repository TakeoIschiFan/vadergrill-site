<script>
  export let data;
</script>

<div class="maxwidth mx-auto min-h-screen">
  {#each data.woordenboek.items as woord}
    <div class="flex flex-col">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="pl-4">
          <p class="m-4 text-3xl font-bold underline">{woord.woord}</p>
        </div>
        <div class="mt-6">
          <p class="m-4 text-2xl font-bold">{woord.beschrijving}</p>
        </div>
      </div>
      <div
        class="h-1 w-11/12 top-0 bg-gradient-to-r from-red-600 to-red-700 self-center rounded-lg"
      />
    </div>
  {/each}
</div>

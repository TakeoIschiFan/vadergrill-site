<script>
  import PraesidiumCard from "$lib/components/praesidiumCard.svelte";

  export let data;
</script>

<h1 class="text-3xl text-white font-bold mt-10 text-center" id="mainname">
  Praesidium
</h1>
<!-- Grid use for better layout-->
<div class="relative top-12 mx-2 mb-20">
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ml-4 mr-4">
    {#each data.bestuur.items as lid}
      <PraesidiumCard
        functie={lid.bijnaam}
        functie2={lid.functie}
        naam={lid.naam}
      />
    {/each}
  </div>
</div>

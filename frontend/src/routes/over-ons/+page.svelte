<script>
  import PraesidiumCard from "$lib/components/praesidiumCard.svelte";

  export let data;
</script>

<div class="flex flex-col gap-2 items-center mt-4">
  <h2 class="text-3xl font-bold text-center">
    Praesidium
  </h2>
  <div class="h-1 w-1/4 top-0 bg-gradient-to-r from-red-600 to-red-700" />
  </div>
  {#each data.bestuur.items as lid}
  <p>{lid.naam}</p>
    
  {/each}
<!-- Grid use for better layout-->
<div class="relative top-12 mx-2 mb-20">
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ml-4 mr-4">
      <div class="relative z-10 bg-black rounded-lg right-0.5 praesidiumkaart">
        <div class="grid grid-cols-2 gap-1">
          <img
            src="/testfoto.jpg"
            alt=""
            class="relative z-10 inset-0 w-full h-full object-cover rounded-t-lg rounded-bl-lg bg-red-100"
            loading="lazy"
          />
          <div class="ml-5 mt-5">
            <h1 class="relative w-full flex text-2xl font-semibold text-white">
              je mama
            </h1>
            <h3 class="relative w-full flex text-m font-light text-white">
              je mama
            </h3>
            <h2 class="relative w-full flex text-xl font-light text-white">
              je mama
            </h2>
          </div>
        </div>
      </div>
  </div>
</div>

<style>
  .praesidiumkaart:hover {
    transform: scale(1.05);
    transition: 400ms ease-in-out;
  }
</style>

<script>
  import PraesidiumCard from "$lib/components/praesidiumCard.svelte";
  import { each } from "svelte/internal";

  export let data;
</script>

<div class="flex flex-col gap-2 items-center mt-4">
  <h2 class="text-3xl font-bold text-center">Praesidium</h2>
  <div class="h-1 w-1/4 top-0 bg-gradient-to-r from-red-600 to-red-700" />
</div>
<!-- Grid use for better layout-->
<div class="relative top-12 mx-2 mb-20">
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ml-4 mr-4">
    {#each data.bestuur.items as lid}
    <p>{lid.foto}</p>
      <div class="relative z-10 bg-black rounded-lg right-0.5 praesidiumkaart">
        <div class="grid grid-cols-2 gap-1">
          <!--
          {#if data.bestuurfotos[lid.nummer].slice(-3) == "jpg"}
          <img
            src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg"
            alt=""
            draggable="false"
            class="absolute box-border inset-0 p-0 border-none m-auto block  w-0 h-0 min-w-full max-w-full min-h-full max-h-full shadow-lg md:rounded-t-lg object-cover"
          />
        {:else}
          <img
            src="/testfoto.jpg"
            alt="bakcground"
            draggable="false"
            class="absolute box-border inset-0 p-0 border-none m-auto block  w-0 h-0 min-w-full max-w-full min-h-full max-h-full shadow-lg md:rounded-t-lg object-cover"
          />
        {/if} -->
          <div class="ml-5 mt-5">
            <h1 class="relative w-full flex text-2xl font-semibold text-white">
              {lid.bijnaam}
            </h1>
            <h3 class="relative w-full flex text-m font-light text-white">
              {lid.functie}
            </h3>
            <h2 class="relative w-full flex text-xl font-light text-white">
              {lid.naam}
            </h2>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .praesidiumkaart:hover {
    transform: scale(1.05);
    transition: 400ms ease-in-out;
  }
</style>

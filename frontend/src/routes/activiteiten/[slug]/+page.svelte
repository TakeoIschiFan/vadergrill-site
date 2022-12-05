<script>
  import { dataset_dev } from 'svelte/internal';


  /** @type {import('./$types').PageData} */
  export let data;
</script>

<!--Backwards arrow-->
<div class="mx-4">
  <a href="/activiteiten">
    <svg
      version="1.1"
      id="arrow"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 384.864 384.864"
      style="enable-background:new 0 0 384.864 384.864;"
      xml:space="preserve"
      width="70px"
      height="80px"
    >
      <g>
        <path
          id="Vintage_Luxury_Arrow_Left"
          d="M3.546,201.005c0.132,0.132,83.575,84.128,83.575,84.128
            c2.442,2.442,5.654,3.585,8.842,3.501c0.096,0,0.18,0.06,0.277,0.06h276.697c10.587,0,15.88-13.342,8.481-20.776l-75.093-75.731
            l74.215-74.853c7.988-7.447,4.415-21.161-10.166-21.137H96.348c-3.344-0.217-6.749,0.842-9.311,3.417l-83.49,84.2
            C-1.182,188.566-1.182,196.265,3.546,201.005z M100.63,120.354l242.856-0.072l-62.678,63.207c-2.394,2.406-3.549,5.558-3.525,8.71
            c-0.036,3.152,1.131,6.304,3.525,8.71l63.195,63.725h-243.06l-71.689-72.302L100.63,120.354z"
          fill="currentcolor"
        />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </g>
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
      <g />
    </svg></a
  >
</div>

<h1 class="text-3xl font-bold underline text-center">
  {data.activiteit.titel}
</h1>

<!--Beschrijving div-->
<div class="m-4 divbox rounded-2xl">
<h2 class="my-4 text-2xl font-bold">Beschrijving</h2>
<p class="mb-4">{data.activiteit.beschrijving}</p>
</div>

<div class="m-4 divbox rounded-2xl">
  <h2 class="my-4 text-2xl font-bold">Tickets</h2>
  {#if data.user?.lid === true}
  <p class="mb-5">
  Er zijn nog {data.activiteit.max_aantal_tickets - data.activiteit.tickets.length} van de {data.activiteit.max_aantal_tickets} tickets beschikbaar.
</p>
<a
      href="/login"
      class="py-2 px-4 m-5 relative top-2 bg-red-600 rounded hover:bg-opacity-70 font-bold">
      Koop een ticket</a>
  {:else if data.user}
    Je bent nog geen volwaardig lid. Om tickets te kunnen kopen, moet je lidgeld betaald zijn. Je kan dit in orde brengen door iemand van het praesidium aan te spreken.
  {:else}
  <p class="mb-4">Je bent niet ingelogd! Klik <a href="/login">hier</a> om in te loggen.</p>
  {/if}
</div>
  

<style>
  #arrow {
    color: white;
  }

  #arrow:hover {
    color: rgb(220, 38, 38);
    transition: 400ms;
  }

  .divbox {
    background-color: rgb(13, 17, 23);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
</style>

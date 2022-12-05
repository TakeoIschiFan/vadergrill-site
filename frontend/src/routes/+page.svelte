<script>
  export let data;

  export let maanden = [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "December",
  ];
</script>

<header class="mb-20">
  <!--Main headerbox with content and background image-->
  <div id="headerbox">
    <img
      src="vadergrill.svg"
      id="headerlogo"
      height="170px"
      width="170px"
      alt=""
    />
    <!--Header text underneath the logo-->
    <div class="text-center mb-20">
      <h1 class="text-3xl font-bold headertext">VADER GRILL</h1>
      <p class="headertext font-semibold">
        De Studentenvereniging voor mensen die houden van BBQ!
      </p>
      <p class="headertext font-semibold">Est. 2022</p>
    </div>
  </div>
  <!--Creating the 'linten' underneath the picture-->
  <div id="lint">
    <div class="bg-black -z-10 lint-zwart w-full" />
    <div class="bg-red-600 -z-20 lint-rood w-full" />
  </div>
</header>

<!-- Using a grid layout for the home page -->
<div class="maxwidth">
  <div class="gap-1 grid grid-cols-1 lg:grid-cols-2 relative">
    <section class="bg-red-900 m-4 rounded-3xl text-center">
      <a href="/over-ons" class="text-3xl font-bold underline m-4">Over Ons</a>
      <div class="p-2"></div>
      <p>
        Wij zijn een Studentenvereniging die zich inzet voor mensen die houden
        van bbq. <br /> Opgericht in het jaar 2022 en nog steeds levend!
      </p>
    </section>
    <section class="bg-black m-4 rounded-3xl text-center">
      <a href="/activiteiten" class="text-3xl font-bold underline">Activiteiten</a>
      <div class="p-2"></div>
      {#each data.activiteiten.items as act}
        <div class="grid m-1 grid-cols-2">
          <p>{act.titel}</p>
          <p>
            {act.start.slice(8, 10)}
            {maanden[act.start.slice(5, 7) - 1]}
            {act.start.slice(0, 4)}
          </p>
        </div>
      {/each}
    </section>
  </div>
</div>

<style>
  section {
    align-items: center;
    width: 95%;
    height: 100%;
    padding: 25px;
  }
</style>

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

  export function isTodayorFuture(date) {
    const today = new Date();
    let actdate = new Date(date);
    return actdate >= today;
  }

  import imgUrl from '../assets/background.jpg'
  import vg from "../assets/vadergrill.svg"
</script>

<header class="mb-20">
  <!--Main headerbox with content and background image-->
  <div id="headerbox" style="background-image: url({imgUrl});">
    <img
      src={vg}
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
<div class="mainpage">
  <div class="gap-1 grid grid-cols-1 lg:grid-cols-2 relative">
    <section class="bg-red-900 m-4 rounded-3xl text-center">
      <a href="/over-ons" class="text-3xl font-bold underline m-4">Over Ons</a>
      <div class="p-2" />
      <p>
        Wij zijn een Studentenvereniging die zich inzet voor mensen die houden
        van bbq. <br /> Opgericht in het jaar 2022 en nog steeds levend!
      </p>
      <h1 class="text-3xl font-bold underline m-4">Ons Verhaal</h1>
      <p>
        Het ontstaan van onze studentenvereniging is een mooi verhaal. Het begon
        allemaal toen we samen studeerden in de bibliotheek op de sterre. We
        hadden het over allemaal leuke studentenkringen in Gent en dat er
        momenteel toch iets ontbreekte, namelijk een kring die zich inzet voor
        mensen die houden van BBQ. Dus moesten we daar iets aan doen en een paar
        weken later werd Vader Grill officieel opgericht.
      </p>
    </section>
    <section class="bg-black m-4 rounded-3xl text-center">
      <a href="/activiteiten" class="text-3xl font-bold underline"
        >Activiteiten</a
      >
      <div class="p-2" />
      {#each data.activiteiten.items as act}
        {#if isTodayorFuture(act.start.slice(0, 10))}
          <div class="grid m-1 grid-cols-2">
            <p>{act.titel}</p>
            <p>
              {act.start.slice(8, 10)}
              {maanden[act.start.slice(5, 7) - 1]}
              {act.start.slice(0, 4)}
            </p>
          </div>
        {/if}
      {/each}
    </section>
  </div>
</div>

<style>
  section {
    align-items: center;
    width: 95%;
    height: fit-content;
    padding: 25px;
  }

  #headerbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    clip-path: polygon(50% 0%, 100% 0, 100% 73%, 50% 100%, 0 73%, 0 0);
    
    background-attachment: fixed;
    background-position: center;
    padding-bottom: 3.5em;
}

#headerlogo {
    margin: 2em 0 0;
}
</style>

<script>
  import PraesidiumCard from "$lib/components/praesidiumCard.svelte";

</script>
<h1 class="text-3xl text-white font-bold mt-10 text-center" id="mainname">Praesidium</h1>
<!-- Grid use for better layout-->
<div class="relative top-12">
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ml-4 mr-4">
    <PraesidiumCard functie="Grill Master" functie2="Praeses" naam="Tom Burgelman"  />
    <PraesidiumCard functie="Grill Leerling" functie2="Vicepraeses" naam="Anton Leagre"  />
    <PraesidiumCard functie="Leverancier" functie2="Quaestor" naam="Phileas Massun"  />
    <PraesidiumCard functie="Slager" functie2="Schachtentemmer" naam="Fangio Decaluwe"  />
    <PraesidiumCard functie="Amadeus" functie2="Cantor" naam="Ferre Despierre"  />
    <PraesidiumCard functie="Lookboter" functie2="Cultuur" naam="Sibylle Bosschaert"  />
    <PraesidiumCard functie="Mayonaise" functie2="Socials" naam="Fedra Moeykens"  />
    <PraesidiumCard functie="Balletjes" functie2="Feest" naam="Kobe Degeetere"  />
    <PraesidiumCard functie="Entrecote" functie2="Sport" naam="Yari De Backer"  />
    <PraesidiumCard functie="Entrecote" functie2="Sport" naam="Mattheo Vereertbrugghen"  />
  </div>
</div>

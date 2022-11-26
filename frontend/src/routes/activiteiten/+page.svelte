<script>

export let data;

</script>

<h2>De volgende activiteiten zijn:</h2>
<ul>
    {#each data.activiteiten.items as act}
    <li>
        <a href={"/activiteiten/" + act.slug}>{act.titel}</a> 
        <p> </p>
    </li>
{/each}
</ul>
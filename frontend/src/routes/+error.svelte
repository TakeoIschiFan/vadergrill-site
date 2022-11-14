<script>
  import {error} from "@sveltejs/kit";
  export let message = error;

  import { src_url_equal, svg_element } from "svelte/internal";
  import "../app.css";
</script>

<div id="error">
  <h2>Oopsies</h2>
  <p>{message}</p>
  <p>Head back <a href="/" class="underline">Home</a></p>
</div>

<style>
  #error {
    text-align: center;
    margin-bottom: 60px;
  }
</style>

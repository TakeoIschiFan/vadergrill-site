<script context="module">
  export function load({ error }) {
    return {
      props: { message: error.message },
    };
  }
</script>

<script>
  export let message;
</script>

<div id="error">
  <h2>Oopsies</h2>
  <p>{message}</p>
  <p>head back home</p>
</div>

<style>
  #error {
    text-align: center;
    margin-bottom: 60px;
  }
</style>

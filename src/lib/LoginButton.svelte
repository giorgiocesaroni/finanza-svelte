<script>
  export let authentication;
</script>

<button on:click>
  {authentication ? "Logout" : "Login"}
</button>

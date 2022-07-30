<script>
  import { googleLogin, logout } from "../GoogleAuth";
  import { authStore, expensesStore } from "../stores";
  import SafeButton from "./components/SafeButton.svelte";

  let authentication;
  authStore.subscribe(value => {
    authentication = value;
  });

  async function handleLogin() {
    if (authentication) return; // Logout
    await googleLogin();
  }

  async function handleLogout() {
    await logout();
    authStore.set(null);
    expensesStore.set(null);
  }
</script>

<div class="authentication module">
  <h1>Authentication</h1>
  {#if authentication}
    <p>Logged in as {authentication.email}</p>
    <SafeButton callback={handleLogout}>Logout</SafeButton>
  {:else}
    <button on:click={handleLogin}>Login</button>
  {/if}
</div>

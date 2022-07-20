<script>
  import LoginButton from "./LoginButton.svelte";
  import { googleLogin, logout } from "../GoogleAuth";
  import { authStore, expensesStore } from "../stores";

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
    expensesStore.set(null);
  }
</script>

<div class="authentication module">
  <h1>Authentication</h1>
  {#if authentication}
    <p>Logged in as {authentication.email}</p>
  {/if}
  <LoginButton
    {authentication}
    on:click={authentication ? handleLogout : handleLogin}
  />
</div>

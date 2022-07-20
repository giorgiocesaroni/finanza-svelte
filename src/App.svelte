<script>
  import "./Firebase";
  import { onAuthChange } from "./GoogleAuth";
  import Authentication from "./lib/Authentication.svelte";
  import Editor from "./lib/Editor.svelte";
  import { default as ExpensesTable } from "./lib/ExpensesTable.svelte";
  import { default as PortfoliosTable } from "./lib/PortfoliosTable.svelte";
  import { authStore } from "./stores";

  let authentication;
  authStore.subscribe(auth => {
    authentication = auth;
  });

  onAuthChange(authStore.set);
</script>

<main>
  {#if authentication}
    <Editor />
    <PortfoliosTable />
    <ExpensesTable />
  {:else}
    <h1>Welcome to Finanza</h1>
  {/if}
  <Authentication />
</main>

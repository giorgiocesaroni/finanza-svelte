<script>
  import Editor from "./lib/Editor.svelte";
  import Expenses from "./lib/ExpensesTable.svelte";
  import Authentication from "./lib/Authentication.svelte";
  import "./Firebase";
  import { authStore } from "./stores";
  import Portfolios from "./lib/PortfoliosTable.svelte";

  let authentication;
  authStore.subscribe(auth => (authentication = auth));
</script>

<main>
  {#if authentication}
    <h1>Finanza</h1>
    <Editor />
    <Portfolios title="Portfolios" />
    <Expenses />
  {:else}
    <h1>Welcome to Finanza</h1>
  {/if}
  <Authentication />
</main>

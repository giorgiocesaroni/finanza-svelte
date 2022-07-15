<script>
  import Editor from "./lib/Editor.svelte";
  import Table from "./lib/ExpensesTable.svelte";
  import Authentication from "./lib/Authentication.svelte";
  import "./Firebase";
  import { authStore } from "./stores";
  import PortfoliosTable from "./lib/PortfoliosTable.svelte";

  let authentication;
  authStore.subscribe(auth => (authentication = auth));
</script>

<main>
  {#if authentication}
    <h1>Finanza</h1>
    <Editor />
    <PortfoliosTable title="Portfolios" />
    <Table />
  {:else}
    <h1>Welcome to Finanza</h1>
  {/if}
  <Authentication />
</main>

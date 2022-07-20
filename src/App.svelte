<script>
  import "./Firebase";
  import { onAuthChange } from "./GoogleAuth";
  import Authentication from "./lib/Authentication.svelte";
  import Accordion from "./lib/components/Accordion.svelte";
  import ResizablePanel from "./lib/components/ResizablePanel.svelte";
  import Editor from "./lib/Editor.svelte";
  import { default as ExpensesTable } from "./lib/ExpensesTable.svelte";
  import { default as PortfoliosTable } from "./lib/PortfoliosTable.svelte";
  import { authStore, selectedPortfolioStore } from "./stores";

  let authentication;
  authStore.subscribe(auth => {
    authentication = auth;
  });

  let selectedPortfolio;
  selectedPortfolioStore.subscribe(value => (selectedPortfolio = value));

  onAuthChange(authStore.set);

  let open = false;
</script>

<main class="flow">
  {#if authentication}
    <Editor />
    <PortfoliosTable />
    {#if selectedPortfolio}
      <ExpensesTable portfolio={selectedPortfolio} />
    {/if}
  {:else}
    <h1>Welcome to Finanza</h1>
  {/if}
  <Authentication />
</main>

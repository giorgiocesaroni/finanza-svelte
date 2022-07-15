<script>
  import {
    authStore,
    selectedExpenseStore,
    selectedPortfolioStore,
  } from "../stores";
  import { getPortfolios } from "../Firestore";
  export let title;

  let portfolios = {};
  authStore.subscribe(async auth => {
    if (!auth) return;
    const res = await getPortfolios(auth.user.uid);
    portfolios = res;
    selectedPortfolioStore.set({
      ...portfolios[Object.keys(portfolios)[0]],
      id: Object.keys(portfolios)[0],
    });
  });

  let selectedPortfolio;
  selectedPortfolioStore.subscribe(value => {
    selectedExpenseStore.set(null);
    selectedPortfolio = value;
  });

  function handleSelect(id) {
    selectedPortfolioStore.set({ ...portfolios[id], id });
  }
</script>

<div class="table module">
  <h1>{title}</h1>
  <table>
    {#each Object.keys(portfolios) as key}
      <tr
        class={selectedPortfolio.id === key ? "selected" : ""}
        on:click={() => handleSelect(key)}
      >
        <td>{portfolios[key].name}</td>
      </tr>
    {/each}
  </table>
</div>

<style>
</style>

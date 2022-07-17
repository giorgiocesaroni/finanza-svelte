<script>
  import {
    addPortfolio,
    deletePortfolio,
    subscribeToCollection,
  } from "../Firestore";
  import {
    authStore,
    selectedExpenseStore,
    selectedPortfolioStore,
  } from "../stores";
  import SafeButton from "./components/SafeButton.svelte";
  export let title;

  let portfolios;
  let authorization, unsubscribe;
  authStore.subscribe(auth => {
    if (!auth) return;
    authorization = auth;

    if (unsubscribe) unsubscribe();

    console.log(auth.user.uid);
    unsubscribe = subscribeToCollection(auth.user.uid, "portfolios", value => {
      portfolios = value;
    });
  });

  let selectedPortfolio;
  selectedPortfolioStore.subscribe(value => {
    selectedExpenseStore.set(null);
    selectedPortfolio = value;
  });

  function handleSelect(id) {
    if (id === selectedPortfolio?.id) return selectedPortfolioStore.set(null);
    selectedPortfolioStore.set({ ...portfolios[id], id });
  }

  let textValue = "";
  function handleChange(event) {
    const value = event.target.value;
    textValue = value;
  }

  async function handleCreatePortfolio() {
    addPortfolio(authorization.user.uid, {
      name: textValue,
    });

    textValue = "";
  }

  function handleDeletePortfolio() {
    deletePortfolio(authorization.user.uid, selectedPortfolio.id);
    selectedExpenseStore.set(null);
    selectedPortfolioStore.set(null);
  }
</script>

<div class="table module">
  <h1>{title}</h1>
  {#if portfolios}
    <table>
      {#each Object.keys(portfolios) as key}
        <tr
          class={selectedPortfolio?.id === key ? "selected" : ""}
          on:click={() => handleSelect(key)}
        >
          <td>{portfolios[key].name}</td>
        </tr>
      {/each}
    </table>
  {/if}
  <form>
    <input on:input={handleChange} value={textValue} type="text" />
    <button type="submit" on:click={handleCreatePortfolio} disabled={!textValue}
      >Add</button
    >
  </form>
  <SafeButton callback={handleDeletePortfolio} disabled={!selectedPortfolio}
    >Delete portfolio</SafeButton
  >
</div>

<style>
</style>

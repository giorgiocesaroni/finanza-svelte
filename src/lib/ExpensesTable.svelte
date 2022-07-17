<script>
  import {
    expensesStore,
    authStore,
    selectedExpenseStore,
    selectedPortfolioStore,
  } from "../stores";
  import { subscribeExpenses } from "../Firestore";
  import supportedCategories from "./utilities/mockSupportedCategories";

  let auth;
  authStore.subscribe(value => (auth = value));

  let selectedPortfolio, unsubscribe;
  selectedPortfolioStore.subscribe(value => {
    if (unsubscribe) unsubscribe();
    expensesStore.set(null);
    selectedPortfolio = value;

    if (!value) return;
    unsubscribe = subscribeExpenses(
      auth.user.uid,
      selectedPortfolio.id,
      expensesStore.set
    );
  });

  let expenses = {};
  expensesStore.subscribe(value => {
    expenses = value ?? {};
  });

  let selectedExpense;
  selectedExpenseStore.subscribe(value => (selectedExpense = value));

  function selectExpense(id) {
    if (selectedExpense?.id === id) return selectedExpenseStore.set(null);
    selectedExpenseStore.set(expenses[id]);
  }
</script>

{#if selectedPortfolio}
  <div class="table module">
    <h1>{selectedPortfolio?.name} Expenses</h1>
    {#if expenses}
      <table cellspacing={0} class="expenses">
        {#each Object.keys(expenses) as id}
          <tr
            class={"expense" + (selectedExpense?.id === id ? " selected" : "")}
            on:click={() => selectExpense(id)}
          >
            <td>{supportedCategories[expenses[id].category] ?? "❓"}</td>

            <td class="price">
              {new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "EUR",
              }).format(expenses[id].price)}
            </td>

            <td>
              {new Date(expenses[id].date).toLocaleString("it-IT", {
                dateStyle: "short",
              })}
            </td>

            <td>{expenses[id].notes ?? ""}</td>
          </tr>
        {/each}
      </table>
    {/if}
    {#if !Object.keys(expenses).length}
      <p>No entries found</p>
    {/if}
  </div>
{/if}

<style>
  table {
    display: grid;
  }
  
  tr {
    display: grid;
    grid-template-columns: auto repeat(3, 1fr);
    gap: 1.5rem;
    padding-block: .5rem;
  }

  /* tr:nth-child(odd) {
    background: rgb(245, 245, 245);
  } */
</style>

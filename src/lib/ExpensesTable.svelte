<script>
  import {
    expensesStore,
    authStore,
    selectedExpenseStore,
    selectedPortfolioStore,
  } from "../stores";
  import { subscribeExpenses } from "../Firestore";

  let auth;
  authStore.subscribe(value => (auth = value));

  let selectedPortfolio, unsubscribe;
  selectedPortfolioStore.subscribe(value => {
    if (!value) return;
    console.log(value);

    if (unsubscribe) unsubscribe();
    expensesStore.set(null);

    selectedPortfolio = value;
    unsubscribe = subscribeExpenses(
      auth.user.uid,
      selectedPortfolio.id,
      expensesStore.set
    );
  });

  let expenses = {};
  expensesStore.subscribe(value => {
    expenses = value ?? {};
    console.log(!Object.keys(expenses).length);
  });

  let selectedExpense;
  selectedExpenseStore.subscribe(value => (selectedExpense = value));

  function selectExpense(id) {
    if (selectedExpense?.id === id) return selectedExpenseStore.set(null);
    selectedExpenseStore.set(expenses[id]);
  }
</script>

<div class="table module">
  <h1>{selectedPortfolio?.name}</h1>
  {#if expenses}
    <table cellspacing={0} class="expenses">
      {#each Object.keys(expenses) as id}
        <tr
          class={"expense" + (selectedExpense?.id === id ? " selected" : "")}
          on:click={() => selectExpense(id)}
        >
          <td>{expenses[id].category}</td>
          <td>
            {new Intl.NumberFormat("it-IT", {
              style: "currency",
              currency: "EUR",
            }).format(expenses[id].price)}
          </td>
          <td
            >{new Date(expenses[id].date).toLocaleString("it-IT", {
              dateStyle: "short",
            })}</td
          >
          <td>{expenses[id].notes}</td>
        </tr>
      {/each}
    </table>
  {/if}
  {#if !Object.keys(expenses).length}
    <p>No entries found</p>
  {/if}
</div>

<style>
  .expenses {
    width: 100%;
  }
</style>

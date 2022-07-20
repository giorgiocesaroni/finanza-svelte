<script>
  import {
    expensesStore,
    authStore,
    selectedExpenseStore,
    selectedPortfolioStore,
  } from "../stores";
  import { fade } from "svelte/transition";
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
      auth.uid,
      selectedPortfolio.id,
      expensesStore.set
    );
  });

  let expenses = null;
  expensesStore.subscribe(value => {
    expenses = value;
  });

  let selectedExpense;
  selectedExpenseStore.subscribe(value => (selectedExpense = value));

  function selectExpense(id) {
    if (selectedExpense?.id === id) return selectedExpenseStore.set(null);
    selectedExpenseStore.set(expenses[id]);
  }
</script>

{#if selectedPortfolio && expenses}
  <div transition:fade class="table module">
    <h1>{selectedPortfolio?.name} Expenses</h1>
    {#if expenses}
      <div class="expenses table">
        <div class="table-head">
          <span>Category</span>
          <span>Price</span>
          <span>Date</span>
          <span>Notes</span>
        </div>
        {#each Object.keys(expenses) as id}
          <div
            class={"expense" + (selectedExpense?.id === id ? " selected" : "")}
            on:click={() => selectExpense(id)}
          >
            <span class="category">
              {supportedCategories[expenses[id].category] ?? "❓"}
            </span>

            <span class="price">
              {new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "EUR",
              }).format(expenses[id].price)}
            </span>

            <span class="date">
              {new Date(expenses[id].date).toLocaleString("it-IT", {
                dateStyle: "short",
              })}
            </span>

            <span class="notes">{expenses[id].notes ?? ""}</span>
          </div>
        {/each}
      </div>
    {/if}
    {#if !expenses}
      <p>No entries found</p>
    {/if}
  </div>
{/if}

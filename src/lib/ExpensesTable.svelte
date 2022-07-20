<script>
  import {
    expensesStore,
    authStore,
    selectedExpenseStore,
    selectedPortfolioStore,
  } from "../stores";
  import { subscribeExpenses } from "../Firestore";
  import supportedCategories from "./utilities/mockSupportedCategories";
  import Accordion from "./components/Accordion.svelte";
  import { onDestroy } from "svelte";
  import ResizablePanel from "./components/ResizablePanel.svelte";
  export let portfolio;

  let auth;
  authStore.subscribe(value => (auth = value));

  let expenses;
  expensesStore.subscribe(value => {
    expenses = value;
  });

  let unsubscribe;

  $: {
    unsubscribe = subscribeExpenses(auth.uid, portfolio.id, expensesStore.set);
  }

  onDestroy(() => unsubscribe());

  let selectedExpense;
  selectedExpenseStore.subscribe(value => (selectedExpense = value));

  function selectExpense(id) {
    if (selectedExpense?.id === id) return selectedExpenseStore.set(null);
    selectedExpenseStore.set(expenses[id]);
  }
</script>

{#if expenses}
  <Accordion>
    <ResizablePanel>
      <div class="table module">
        <h1>{portfolio.name} Expenses</h1>
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
                class={"expense" +
                  (selectedExpense?.id === id ? " selected" : "")}
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
    </ResizablePanel>
  </Accordion>
{/if}

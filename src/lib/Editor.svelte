<script>
  import { addExpense, deleteExpense, updateExpense } from "../Firestore";
  import {
    authStore,
    selectedExpenseStore,
    selectedPortfolioStore,
  } from "../stores";
  import SafeButton from "./components/SafeButton.svelte";

  let auth;
  authStore.subscribe(value => (auth = value));

  let editingExpense = {};
  selectedExpenseStore.subscribe(value => {
    editingExpense = value;
  });

  let selectedPortfolio;
  selectedPortfolioStore.subscribe(value => (selectedPortfolio = value));

  function handleChange(property, value) {
    selectedExpenseStore.update(state => ({ ...state, [property]: value }));
  }

  function resetExpense() {
    selectedExpenseStore.set(null);
  }

  function handleDelete() {
    deleteExpense(auth.user.uid, selectedPortfolio.id, editingExpense.id);
    resetExpense();
  }

  function handleClear() {
    resetExpense();
  }

  function handleSubmit() {
    if (editingExpense.id) {
      updateExpense(
        auth.user.uid,
        selectedPortfolio.id,
        editingExpense.id,
        editingExpense
      );
    } else {
      let date = editingExpense.date ?? new Date().getTime();
      editingExpense = { ...editingExpense, date };
      addExpense(auth.user.uid, selectedPortfolio.id, editingExpense);
    }
    resetExpense();
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") handleSubmit();
  }
</script>

<div class="editor module">
  <h1>Editor</h1>
  <form>
    <input
      on:input={e => handleChange("category", e.target.value)}
      on:keydown={handleKeyDown}
      value={editingExpense?.category ?? ""}
      placeholder="Category"
      class="category"
    />
    <input
      on:input={e => handleChange("price", e.target.value)}
      on:keydown={handleKeyDown}
      value={editingExpense?.price ?? ""}
      placeholder="Price"
      class="price"
    />
    <input
      on:input={e => handleChange("date", e.target.value)}
      on:keydown={handleKeyDown}
      value={editingExpense?.date ?? ""}
      placeholder="Date"
      class="date"
    />
    <input
      on:input={e => handleChange("notes", e.target.value)}
      on:keydown={handleKeyDown}
      value={editingExpense?.notes ?? ""}
      placeholder="Notes"
      class="notes"
    />
  </form>

  <div class="actions">
    <button
      on:click={handleClear}
      disabled={!editingExpense}
      class="clear-button">Clear</button
    >
    <SafeButton callback={handleDelete} disabled={!editingExpense}>
      Delete
    </SafeButton>
  </div>
</div>

<style>
  .active {
    background-color: red;
    color: white;
  }

  .selected {
    color: white;
    background: blue;
  }

  form {
    margin-bottom: 1rem;
  }

  form input {
    color: inherit;
    background: inherit;
    width: 100%;
    border: none;
  }

  form input::placeholder {
    color: inherit;
    opacity: 0.75;
  }
</style>

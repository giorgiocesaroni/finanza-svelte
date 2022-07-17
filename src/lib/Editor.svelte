<script>
  import { blurOnEnter } from "../lib/utilities/inputDirectives";
  import { addExpense, deleteExpense, updateExpense } from "../Firestore";
  import {
    authStore,
    selectedExpenseStore,
    selectedPortfolioStore,
  } from "../stores";
  import SafeButton from "./components/SafeButton.svelte";
  import RadioSwitch from "./components/RadioSwitch.svelte";
  import supportedCategories from "./utilities/mockSupportedCategories";

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
    if (editingExpense?.id) {
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
  <form>
    <div style="width: 100%">
      <input
        use:blurOnEnter
        on:input={e => handleChange("date", e.target.value)}
        on:keydown={handleKeyDown}
        value={editingExpense?.date ?? ""}
        placeholder="Date"
        class="date"
      />
      <input
        use:blurOnEnter
        on:input={e => handleChange("notes", e.target.value)}
        on:keydown={handleKeyDown}
        value={editingExpense?.notes ?? ""}
        placeholder="Notes"
        class="notes"
      />
      <input
        use:blurOnEnter
        on:input={e => handleChange("price", e.target.value)}
        on:keydown={handleKeyDown}
        value={editingExpense?.price ?? ""}
        placeholder="Price"
        class="price"
      />
    </div>
    <RadioSwitch
      onChange={value => handleChange("category", value)}
      value={editingExpense?.category}
      options={supportedCategories}
    />
  </form>

  <div class="actions">
    <button
      on:click={handleClear}
      disabled={!editingExpense}
      class="clear-button"
    >
      Clear
    </button>

    <button
      on:click={handleSubmit}
      disabled={!editingExpense}
      class="submit-button"
    >
      Submit
    </button>

    <SafeButton callback={handleDelete} disabled={!editingExpense}>
      Delete
    </SafeButton>
  </div>
</div>

<style>
  form {
    margin-bottom: 1rem;
  }

  form input {
    width: 100%;
    border: none;
  }

  form input::placeholder {
    color: inherit;
    opacity: 0.75;
  }

  .price {
    text-align: right;
    font-size: 1.5rem;
  }
</style>

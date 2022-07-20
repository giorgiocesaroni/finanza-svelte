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
    deleteExpense(auth.uid, selectedPortfolio.id, editingExpense.id);
    resetExpense();
  }

  function handleClear() {
    resetExpense();
  }

  function handleSubmit() {
    if (editingExpense?.id) {
      updateExpense(
        auth.uid,
        selectedPortfolio.id,
        editingExpense.id,
        editingExpense
      );
    } else {
      let date = editingExpense.date ?? new Date().getTime();
      editingExpense = { ...editingExpense, date };
      addExpense(auth.uid, selectedPortfolio.id, editingExpense);
    }
    resetExpense();
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") handleSubmit();
  }
</script>

<div class="editor">
  <form>
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
  </form>

  <RadioSwitch
    class="categories"
    onChange={value => handleChange("category", value)}
    value={editingExpense?.category}
    options={supportedCategories}
  />

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
      disabled={!editingExpense || !selectedPortfolio}
      class="submit-button"
    >
      Submit
    </button>

    <SafeButton callback={handleDelete} disabled={!editingExpense?.id}>
      Delete
    </SafeButton>
  </div>
</div>

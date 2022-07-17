<script>
  export let onChange;
  export let value;
  export let options;

  function handleRadioChange(event) {
    console.log(event.target.value);
    if (onChange) onChange(event.target.value);
  }
</script>

<fieldset class="radio-switch" on:input={handleRadioChange}>
  {#each Object.keys(options) as option}
    <div class={"option" + (value === option ? " selected" : "")}>
      <label for={option}>
        {options[option]}
      </label>
      <input
        checked={value === option}
        type="radio"
        id={option}
        value={option}
      />
    </div>
  {/each}
</fieldset>

<style>
  fieldset {
    padding: 0;
    margin: 0;
    border: none;
  }

  input {
    display: none;
  }

  label {
    padding: 0.75rem;
  }

  .option {
    display: grid;
  }

  .radio-switch {
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    background-color: rgb(245, 245, 245);
  }

  .selected {
    background-color: rgb(235, 235, 235) !important;
  }
</style>

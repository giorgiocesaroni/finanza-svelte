<script>
  export let onChange;
  export let value;
  export let options;

  function handleRadioChange(event) {
    console.log(event.target.value);
    if (onChange) onChange(event.target.value);
  }
</script>

<fieldset
  class={"radio-switch" + ($$props.class ? ` ${$$props.class}` : "")}
  on:input={handleRadioChange}
>
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

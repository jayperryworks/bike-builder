<script>
  import Urlize from 'urlize'

  let urlize = Urlize.urlize
  let selectedOption

  // Props
  export let part

  function findSelectedOption(options) {
    return options.find(option => option.selected == true)
  }
</script>

<form action="">
  <label for="part-options">{part.name}:</label>
  {#if (part.options.length > 0)}
    <select 
      bind:value={selectedOption} 
      on:change="{() => answer = ''}" 
      name="part-options" 
      id="part-options"
    >
        {#each part.options as option}
          <option 
            value="{option.id}"
            selected="{option.selected}"
          >
            {option.brand} {option.model}
          </option>
        {/each}
    </select>
  {:else}
    <button>+ Add some options for this part</button>
  {/if}
</form>
{#if (part.options.length > 0)}
  <dl>
    <div>
      <dt>Weight:</dt>
      <dd>{findSelectedOption(part.options).weight}g</dd>
    </div>
    <div>
      <dt>Price:</dt>
      <dd>${findSelectedOption(findSelectedOption(part.options).buy).price}</dd>
    </div>
  </dl>
  <button>Edit</button>
{/if}
<script>
  import { parts } from '../stores.js'

  // Props
  export let part

  let partIndex = $parts.findIndex(p => p.name == part.name)

  let selectedOption = $parts[partIndex].selectedOption

  function findSelectedOption() {
    return part.options.find(option => option.id == selectedOption)
  }

  function setSelectedOption() {
    if (selectedOption) {
      console.log('hello')
    }
  }
</script>

<form action="">
  <label for="part-options">{part.name}:</label>
  {#if (part.options.length > 0)}
    <select 
      bind:value={selectedOption} 
      name="part-options" 
      id="part-options"
    >
        {#each part.options as option}
          <option 
            value="{option}"
            selected="{option.id == selectedOption}"
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
<p>Selected: {selectedOption}</p>
  <dl>
    <div>
      <dt>Weight:</dt>
      <dd>{findSelectedOption().weight}g</dd>
    </div>
    <div>
      <dt>Price:</dt>
      <dd>${findSelectedOption(findSelectedOption().buy).price}</dd>
    </div>
  </dl>
  <button>Edit</button>
{/if}
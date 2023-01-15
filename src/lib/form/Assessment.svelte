<script>
    import { Button, Modal } from 'flowbite-svelte'
    let defaultModal = false;

    export let data;
</script>

<!---------------------------------------------------------------------------------------->

<Button on:click={() => defaultModal = true}>Default modal</Button>


<Modal title="Add Assessment" bind:open={defaultModal} autoclose>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    Text 1
  </p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    Text
  </p>
  <svelte:fragment slot='footer'>
    <Button on:click={() => alert('Handle "success"')}>Add</Button>
    <Button color="alternative">Delete</Button>
  </svelte:fragment>
</Modal>


<!---------------------------------------------------------------------------------------->
<style>
</style>
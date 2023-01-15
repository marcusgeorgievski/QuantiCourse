<script>
    import '../../app.postcss'
    import {TableBodyCell, TableBodyRow, Button, Dropdown, DropdownItem, Chevron} from 'flowbite-svelte';
    let statuses = ['complete', 'incomplete', 'in-progress']

    export let assessment;
    let open = false

    const handleNewStatus = (status) => {

        assessment.status = status
        open = false
    }

    // Status button colour
    const statusColour = (status) => {
        console.log(status == 'incomplete')
        let colour

        if (status == 'incomplete') {
            colour = 'bg-red-700'
        }
        else if (status == 'complete') {
            colour = 'bg-green-700'
        }
        else {
            colour = 'bg-purple-700'
        }

        console.log(colour)
        return colour
    }
</script>
<!---------------------------------------------------------------------------------------->

<TableBodyRow>
    <TableBodyCell class="pr-2 pl-2 border-r-[1px] text-center">
        <Button color="red" class="pl-4 pr-2 pb-1 pt-1 w-full max-w-[150px] hover:bg-[#202124] {statusColour(assessment.status)} bg-green"><Chevron>{assessment.status}</Chevron></Button>
            <Dropdown bind:open={open}>
            {#each statuses as st}
                <DropdownItem on:click={() => handleNewStatus(st)}>{st}</DropdownItem>
            {/each}
            </Dropdown>
    </TableBodyCell>
    {#if assessment.course} <!-- To display course code -->
        <TableBodyCell class="border-r-[1px]">{assessment.course}</TableBodyCell>
    {/if}
    <TableBodyCell class="border-r-[1px]">{assessment.name}</TableBodyCell>
    <TableBodyCell class="border-r-[1px]">{assessment.dueDate}</TableBodyCell>
    <TableBodyCell class="border-r-[1px]">{assessment.weight} %</TableBodyCell>
    <TableBodyCell class="border-r-[1px]">{assessment.mark} %</TableBodyCell>
    <TableBodyCell class="pt-0 pb-0 text-center">
        <a href="/tables" class="font-medium text-blue-600 hover:underline dark:text-blue-500">
            <Button class="bg-gray-200 my-0 px-2 pt-1 pb-1 rounded-full" color="alternative" pill={true}><iconify-icon class="text-gray-500 text-base" icon="mdi:lead-pencil"></iconify-icon>
</Button>
        </a>
    </TableBodyCell>
</TableBodyRow>

<!---------------------------------------------------------------------------------------->
<style>
</style>
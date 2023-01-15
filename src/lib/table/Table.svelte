<script>
    import { Table, TableBody, TableHead, TableHeadCell, Button } from 'flowbite-svelte';
    import Row from './Row.svelte';

    // export let all; // all courses
    // let cols1 = ['status', 'name', 'due', 'weight', 'mark']
    // let cols2 = ['status', 'course', 'name', 'due', 'weight', 'mark']
    // let cols = all ? cols2 : cols1;

    export let course
    export let all = false

    let cols1 = ['status', 'name', 'due', 'weight', 'mark']
    let cols2 = ['status', 'course', 'name', 'due', 'weight', 'mark']
    let cols = all ? cols2 : cols1;
</script>
<!---------------------------------------------------------------------------------------->

<Table striped={true} class="mb-28"> <!-- Margin for dropdowns -->
    <!-- Headers -->
  <TableHead class="bg-slate-200">
    {#each cols as col}
        <TableHeadCell>{col}</TableHeadCell>
    {/each}
    <!-- Edit col -->
    <TableHeadCell><span class="sr-only">Edit</span></TableHeadCell>
  </TableHead>

  <!-- TABLE BODY -->
  <TableBody class="divide-y">
  {#each course.assessments as assessment}
  <Row {assessment}/>
  {/each}
  </TableBody>
</Table>

<!---------------------------------------------------------------------------------------->

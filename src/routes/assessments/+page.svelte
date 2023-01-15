<script>
    import { Heading } from "flowbite-svelte";
    import Table from "../../lib/table/Table.svelte";

    export let data
    console.log('DATA : ',data)
</script>
<!---------------------------------------------------------------------------------------->

<!-- <Table/> -->
<Heading class="text-center">All Assessments</Heading>
<br>
<Table course={data} all={true}/>

<!---------------------------------------------------------------------------------------->
<style>
</style>
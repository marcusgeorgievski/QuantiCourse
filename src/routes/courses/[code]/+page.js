import { error } from '@sveltejs/kit';
import { userData } from '/src/Store'

export function load({ params }) {
  let courseCodeParam = params.code // course code

  let data
  const unsub = userData.subscribe(elem => data = elem) // get user data

  // Get single course data from sto
  let course = data.courses.find(course => course.code.replace(/\s/g, "") === courseCodeParam) 

  // Error if param is not valid course code / in array -> +error.svelte rendered
  if (course === undefined) throw error(404, '...yet')

  return course;
}
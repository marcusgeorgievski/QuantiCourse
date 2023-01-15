import { error } from '@sveltejs/kit';
import { userData } from '/src/Store'

export function load() {

    let data
    const unsub = userData.subscribe(elem => data = elem) // get user data
    data = data.courses

    // Combine all assessments
    let allAssessments = []

    // Create allAssessments
    data.forEach(course => {
        let ass = course.assessments.map(e => {
            let combinedAss = {...e, course: course.code}
            return combinedAss
        })
        allAssessments = [...allAssessments, ...ass]
    });
    // console.log('ALL: ', allAssessments);

    return {
        assessments: allAssessments
    };
}


// go into each course
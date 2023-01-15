import { writable } from "svelte/store";

// Course theme colours
const themes = {
	green: "#009e54",
	blue: "#397bef",
	red: "#ea4335",
	yellow: "#fabc05",
};

// Course data for test user
const userData = writable({
    name: 'Marcus Georgievski',
	courses: [
		// course arr
		{
			// course 1
			code: "OOP 245",
			name: "Object Oriented Programming",
			instructor: "Ahmed Shamas",
			classNumber: "K2241",
			theme: themes.green,
			assessments: [
				{
					name: "Workshop 1.1",
					type: "Workshop",
					dueDate: "Friday, Jan 19",
					weight: 6,
					notes: null,
					mark: null,
					status: "incomplete",
				},
				{
					name: "Workshop 1.2",
					type: "Workshop",
					dueDate: "Friday, Jan 19",
					weight: 6,
					notes: null,
					mark: null,
					status: "incomplete",
				}
			],
		},

		{
			// course 2
			code: "WEB 234",
			name: "Web Development",
			instructor: "Marcus Georgievski",
			classNumber: "A2317",
			theme: themes.blue,
			assessments: [
				{
					name: "Assignment 1",
					type: "A",
					dueDate: "Jan 19, 2023",
					weight: 6,
					notes: null,
					mark: 95,
					status: "complete",
				},
			],
		},

		{
			// course 3
			code: "DBS 222",
			name: "Database Design",
			instructor: "Nassim Navas",
			classNumber: "B1017",
			theme: themes.red,
			assessments: [
				{
					name: "A1",
					type: "A",
					dueDate: "Jan 19, 2023",
					weight: 6,
					notes: null,
					mark: 95,
					status: "complete",
				},
				{
					name: "A2",
					type: "A",
					dueDate: "Jan 19, 2023",
					weight: 6,
					notes: null,
					mark: 95,
					status: "complete",
				},
			],
		},
		{
			// course 3
			code: "111000",
			name: "Test",
			instructor: "First Last",
			classNumber: "12345",
			theme: themes.red,
			assessments: [
				{
					name: "A1",
					type: "A",
					dueDate: "Jan 19, 2023",
					weight: 6,
					notes: null,
					mark: 95,
					status: "incomplete",
				},
				{
					name: "A2",
					type: "A",
					dueDate: "Jan 26, 2023",
					weight: 6,
					notes: null,
					mark: 95,
					status: "complete",
				},
			],
		},
	],
});

export { userData };

// eslint-disable-next-line no-unused-vars
const me = {
	courses: [
		// course arr
		{
			// course 1
			code: "OOP 244",
			name: "Object Oriented Programming",
			instructor: "Mohammed Shamas",
			classNumber: "K2241",
			assessments: [
				{
					name: "W1",
					type: "A",
					dueDate: "Jan 19, 2023",
					weight: 6,
					notes: null,
					mark: 95,
					status: "complete",
				},
				{
					name: "W1.2",
					type: "A",
					dueDate: "Jan 19, 2023",
					weight: 6,
					notes: null,
					mark: 95,
					status: "complete",
				},
			],
		},
	],
};

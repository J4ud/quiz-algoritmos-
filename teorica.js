const studentGrades = [100, 50, 65, 70, 85, 96, 45];
const A = [];
const B = [];
const C = [];
const D = [];
const F = [];
const computeGrades = (studentGrades) => {
	studentGrades.forEach((student) => {
		if (student > 90) return A.push(student);
		else if (student > 80 && student < 90) return B.push(student);
	});
};

const result = computeGrades(studentGrades);
console.log(result);

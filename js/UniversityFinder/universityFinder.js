//Students Array
var students = [
    {
        rollNo: 1,
        collegeName: "ABC College",
        studentName: "John Doe",
        city: "New York",
        mathMarks: 55,
        englishMarks: 70,
        scienceMarks: 75,
        computerMarks: 80
    },
    {
        rollNo: 2,
        collegeName: "ABC College",
        studentName: "Jane Smith",
        city: "New York",
        mathMarks: 95,
        englishMarks: 90,
        scienceMarks: 92,
        computerMarks: 88
    },
    {
        rollNo: 3,
        collegeName: "DEF College",
        studentName: "Alice Johnson",
        city: "London",
        mathMarks: 50,
        englishMarks: 55,
        scienceMarks: 58,
        computerMarks: 62
    },
    {
        rollNo: 4,
        collegeName: "DEF College",
        studentName: "Bob Williams",
        city: "London",
        mathMarks: 85,
        englishMarks: 80,
        scienceMarks: 85,
        computerMarks: 90
    },
    {
        rollNo: 5,
        collegeName: "DEF College",
        studentName: "Eva Brown",
        city: "London",
        mathMarks: 90,
        englishMarks: 92,
        scienceMarks: 88,
        computerMarks: 85
    },
    {
        rollNo: 6,
        collegeName: "GHI College",
        studentName: "Michael Davis",
        city: "Berlin",
        mathMarks: 78,
        englishMarks: 80,
        scienceMarks: 76,
        computerMarks: 82
    },
    {
        rollNo: 7,
        collegeName: "GHI College",
        studentName: "Sarah Lee",
        city: "Berlin",
        mathMarks: 92,
        englishMarks: 95,
        scienceMarks: 90,
        computerMarks: 88
    },
    {
        rollNo: 8,
        collegeName: "JKL College",
        studentName: "David Miller",
        city: "Florida",
        mathMarks: 85,
        englishMarks: 88,
        scienceMarks: 82,
        computerMarks: 78
    },
    {
        rollNo: 9,
        collegeName: "JKL College",
        studentName: "Olivia Wilson",
        city: "Paris",
        mathMarks: 80,
        englishMarks: 85,
        scienceMarks: 80,
        computerMarks: 85
    },
    {
        rollNo: 10,
        collegeName: "JKL College",
        studentName: "Thomas Anderson",
        city: "Texas",
        mathMarks: 92,
        englishMarks: 95,
        scienceMarks: 92,
        computerMarks: 90
    },
    // Add more student objects as needed
    // Total: 20 student objects
];

//University Array

// Create an array of university objects
var universities = [
    {
        id: 1,
        universityName: "ABC University",
        state: "New York",
        criteria: {
            percentage: 80,
            mathMarks: 70,
            englishMarks: 75,
            scienceMarks: 75,
            computerMarks: 70
        }
    },
    {
        id: 2,
        universityName: "DEF University",
        state: "California",
        criteria: {
            percentage: 85,
            mathMarks: 80,
            englishMarks: 75,
            scienceMarks: 85,
            computerMarks: 75
        }
    },
    {
        id: 3,
        universityName: "GHI University",
        state: "Texas",
        criteria: {
            percentage: 75,
            mathMarks: 70,
            englishMarks: 70,
            scienceMarks: 75,
            computerMarks: 65
        }
    },
    {
        id: 4,
        universityName: "JKL University",
        state: "Florida",
        criteria: {
            percentage: 90,
            mathMarks: 80,
            englishMarks: 85,
            scienceMarks: 90,
            computerMarks: 80
        }
    },
    {
        id: 5,
        universityName: "MNO University",
        state: "Paris",
        criteria: {
            percentage: 85,
            mathMarks: 75,
            englishMarks: 80,
            scienceMarks: 80,
            computerMarks: 75
        }
    }
];

function eligibleForUniversities(studentList) {

    m = studentList.map(s => {
        let universityList = universities.filter(u => {
            return (s.mathMarks >= u.criteria.mathMarks) &&
                (s.englishMarks >= u.criteria.englishMarks) &&
                (s.scienceMarks >= u.criteria.scienceMarks) &&
                (s.computerMarks >= u.criteria.computerMarks)
        }).map(un => { return un.universityName })
        return { Name: s.studentName, universities: universityList }
    });
    return m;
}
console.log(eligibleForUniversities(students));
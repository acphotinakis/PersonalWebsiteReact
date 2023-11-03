import React from "react";
import courses from '../../data/courses';
import './Courses.css';
import { DataGrid } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const columns = [
    { field: 'id', headerName: 'ID', width: 70, disableSelectionOnClick: true },
    {
        field: 'courseAbbr', headerName: 'Course', width: 130,
        valueGetter: (params) => courses[params.row.id].course_abbr,
    },
    {
        field: 'courseName', headerName: 'Course Name', width: 200,
        valueGetter: (params) => courses[params.row.id].course_name,
    },
    {
        field: 'term', headerName: 'Term', width: 130,
        valueGetter: (params) => courses[params.row.id].term,
    },
];

const Courses = () => {
    return (
        <div className="courses">
            {courses.map((course, index) => (
                <Card key={index}>
                    <CardHeader title={course.course_abbreviation} subheader={course.term} />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary">
                            {course.course_name}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Courses;


// import React from "react";
// import courses from '../../data/courses';
// import Card from 'react-bootstrap/Card';
// import './Courses.css'
// import { DataGrid } from '@mui/x-data-grid';


// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'courseAbbr', headerName: 'Course ', width: 130 },
//     { field: 'courseName', headerName: 'Course Name', width: 130 },
// ]


// const Courses = () => {


//     return (
//         <div className="courses">
//             <div className="course-list">
//                 {courses.map((course, index) => (
//                     <Card className='course-card' sx={{ maxWidth: 345 }} key={index}>
//                         <Card.Body className="course-body">
//                             <Card.Text >
//                                 {course.course_abbr}
//                             </Card.Text>
//                             <Card.Text >
//                                 {course.course_name}
//                             </Card.Text>
//                             <Card.Text >
//                                 {course.term}
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 ))};
//             </div>
//         </div>
//     );
// };


// export default Courses;
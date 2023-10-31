import React from "react";
import courses from '../../data/courses';
import Card from 'react-bootstrap/Card';
import './Courses.css';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70, disableSelectionOnClick: true },
    {
        field: 'courseAbbr', headerName: 'Course', width: 130,
        valueGetter: (params) =>
            courses[params.row.id].course_abbr,
    },
    {
        field: 'courseName', headerName: 'Course Name', width: 200,
        valueGetter: (params) =>
            courses[params.row.id].course_name,
    },
    {
        field: 'term', headerName: 'Term', width: 130,
        valueGetter: (params) =>
            courses[params.row.id].term,
    },
];

const Courses = () => {
    return (
        <div className="courses">
            <div>
                <DataGrid className="table"
                    rows={courses.map((course, index) => ({ ...course, id: index }))}
                    columns={columns}
                    getRowId={(row) => row.id}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>
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
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CourseCard.css'

const CourseCard = ({ course_abbr, course_name, term }) => {
    return (

        <Card className='course-card' sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {course_abbr}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {course_name}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                    {term}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Course Link</Button>
            </CardActions>
        </Card>

    );
};

export default CourseCard;


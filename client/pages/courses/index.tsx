import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../../components/layout.tsx';

import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const Courses: NextPage = ({courses}) => {
    return (
      <div>
        <main>
          <h1>
            Welcome to <a href="https://nextjs.org">Course.js!</a>
          </h1>

          <p>
            Get started by editing{' '}
            <code>pages/index.tsx</code>
          </p>
        </main>

        {courses.map((course) => (
          <Card sx={{maxWidth: "25vw"}} style={{backgroundColor: "cyan"}}>
            <CardMedia>
            </CardMedia>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {simpleArrayToString(course.code)}
              </Typography>
              <Typography variant="h6" component="div">
                {course.name}
              </Typography>
              <Typography>
                {objectArrayToString(course.faculty.professors)}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {course.semester}
              </Typography>
              <Typography variant="body2">
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View Course -></Button>
            </CardActions>
          </Card>
        ))} 
        <p>something</p>

        <Button variant="contained">Hello World</Button>
    </div>
  )
}

const simpleArrayToString = (simpleArray) => {
  let simpleList = simpleArray[0];
  for (let element of simpleArray.slice(1)) {
    simpleList += " " + element;
  }
  return simpleList;
}

const objectArrayToString = (objectArray) => {
  let objectList = objectArray[0].name;
  for (let object of objectArray.slice(1)) {
    objectList += ", " + object.name;
  }
  return objectList;
}

const getStaticProps = async (context) => {
  const response = await fetch(`https://recourseatashoka.herokuapp.com/api/course?compound_score=0.01`);
  const json_response = await response.json();
  
  const courses = json_response.data;

  return {
    props: {
      courses,
    }
  }
}

export {getStaticProps};

export default Courses;

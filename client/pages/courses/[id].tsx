import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Layout from '../../components/layout.tsx';

import * as React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Course: NextPage = ({course}) => {
    const router = useRouter();
    const { id } = router.query;
    return (
      <Layout>
        <main>
          <h1>
            Welcome to <a href="https://nextjs.org">Course.js!</a>
          </h1>

          <p>
            Get started by editing{' '}
            <code>pages/index.tsx</code>
          </p>
          <span>{id}</span>
        </main>



        <Button variant="contained">Hello World</Button>
    </Layout>
  )
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

const getStaticPaths = async () => {
  const response = await fetch('https://recourseatashoka.herokuapp.com/api/course?compound_score=0.01');
  const json_response = await response.json();

  const courses = json_response.data;
  const paths = courses.map( (course) => ({
    params: { id: course._id },
  }));

  return { 
    paths, 
    fallback: false 
  }
}

export {getStaticProps};
export {getStaticPaths};

export default Course;

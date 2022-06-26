import type { NextPage } from 'next';

import Layout from '../components/layout.tsx';

const Home: NextPage = ({courses}) => {
    return (
        <main>
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p>
            Get started by editing {' '}
            <code>pages/index.tsx</code>
          </p>

        </main>
  )
}

export default Home;

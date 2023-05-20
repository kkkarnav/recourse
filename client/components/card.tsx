import type { NextPage } from 'next';

const Card: NextPage = ({courses}) => {
    return (
      <Layout>
        <main>
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p>
            Get started by editing {' '}
            <code>pages/index.tsx</code>
          </p>

        </main>
    </Layout>
  )
}

export default Card;

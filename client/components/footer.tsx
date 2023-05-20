import Link from 'next/link';
import Image from 'next/image';

import * as React from 'react';

const Footer = ({ children }) => {
    return (
        <footer className="footer">
            <a
                href="https://localhost:4004/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className="logo">
                    <Image src="/vercel.svg" alt="Recourse logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    );
};

export default Footer;

import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function SubLayout({ children }) {
    return (
        <div>
            <h1>
                <Link href='/'>Home 으로</Link>
            </h1>
        </div>
    );
}

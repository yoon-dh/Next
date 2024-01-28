import Head from 'next/head';
import Link from 'next/link';

export async function getServerSideProps() {
    return {
        props: { time: new Date().toISOString() },
    };
}

export default function Home({ time }) {
    return (
        <>
            <h1 className={styles.title}>{time}</h1>
            <h1>
                <Link href='/csr'>CSR 로</Link>
            </h1>
            <h1>
                <Link href='/ssg'>SSG 로</Link>
            </h1>
            <h1>
                <Link href='/isr'>ISR 로</Link>
            </h1>
        </>
    );
}

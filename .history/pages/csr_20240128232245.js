import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';
import styles from '../styles/Home.module.css';

export default function CSR() {
    const [time, setTime] = useState();
    useEffect(() => {
        setTime(new Date().toISOString());
    });
    return (
        <>
            <h1 className={styles.title}>{time}</h1>
        </>
    );
}

CSR.getLayout = function getLayout(page) {
    return (
        <Layout>
            <SubLayout></SubLayout>
        </Layout>
    );
};

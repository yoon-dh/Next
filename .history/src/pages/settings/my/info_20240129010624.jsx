import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function MyInfo() {
    const router = useRouter;
    const [clicked, setClicked] = useState(false);
    const { status = 'initial' } = router.query;
    return (
        <>
            <h1 className='title'>My Info</h1>
            <h1 className='title'>Clicked</h1>
            <h1 className='title'>Clicked</h1>
        </>
    );
}

MyInfo.getLayout = function getLayout(page) {
    return (
        <Layout>
            <SubLayout>{page}</SubLayout>
        </Layout>
    );
};

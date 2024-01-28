import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function CartDateSlug() {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <>
            <h1 className='title'>CartDateSlug {JSON.stringify(slug)}</h1>
            <Link href='/cart/2022/06/05'>2022.06.05</Link>
        </>
    );
}

CartDateSlug.getLayout = function getLayout(page) {
    return (
        <Layout>
            <SubLayout>{page}</SubLayout>
        </Layout>
    );
};

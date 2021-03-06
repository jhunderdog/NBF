import React from 'react';
import { useRouter } from 'next/router';
import wrapper from '../../store/configureStore';
import axios from 'axios';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { END } from 'redux-saga';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import AppLayout from '../../components/AppLayout';
import { useSelector } from 'react-redux';
import PostCard from '../../components/PostCard';
import Head from "next/head";

const Post = () => {
    const router = useRouter(); 
    const { id } = router.query;
    const { singlePost } = useSelector((state) => state.post);

    // if (router.isFallback) {
    //     return <div>로딩중...</div>
    // }
    return (
        <AppLayout>
            <Head>
                <title>
                    {singlePost.User.nickname}
                    님의 글
                </title>
                <meta name="description" content={singlePost.content}/>
                <meta property="og:title" content={`${singlePost.User.nickname}님의 게시글`}/>
                <meta name="og:description" content={singlePost.content}/>
                <meta name="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'http://localhost:3060/favicon.ico'}/>
                <meta name="og:url" content={`https://nodebird.com/post/${id}`}/>

            </Head>
        <PostCard post={singlePost}/>
        </AppLayout>
    )
};
// export async function getStaticPaths() {
//     return {
//         paths: [
//             {params: {id: '1'}},
//             {params: {id: '2'}},
//         ],
//         fallback: false,
//     }
// }
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    console.log(context);
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_POST_REQUEST,
        data: context.params.id,
    })
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
})
export default Post;
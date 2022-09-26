import { createUser } from '@/redux/slices/user.slice';
import { Layout } from '@/styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HomeTitle } from './styled-components';
export default function Home() {
    const dispatch = useDispatch();
    
    const dispatchAction = ()=> {
             dispatch(createUser({name:'jhon Doe', id:'1'}));
       
    }

    return (
    <Layout>
        <button onClick={dispatchAction}>dispatchAction</button>
        <HomeTitle> Hola Home</HomeTitle>
    </Layout>
  )
}

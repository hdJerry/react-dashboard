import React, {
    useState
} from 'react';
import {
    useDispatch
} from 'react-redux'
import { 
    InputOutline, 
    LoginContainer, 
    LoginForm, 
    FormGroup, 
    ButtonOutline,
} from './login.styles';

import {
    LoginUser
} from '../../store/userRducer/actions';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom';


const Login = ({token}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sending, setSending] = useState(0);

    const dispatch = useDispatch();

    const submitForm = () => {

        setSending(1);
        setTimeout(() => {
    
            dispatch(LoginUser({
                email: email,
                token: 'asdkhskdhaskjdkahskdhaksgduwawq7777777sadausdasgdjahgsh'
            }))
            
        }, 3000);


    }

    if(token){
        return <Redirect to="/dashboard" />
    }

    return (
        <LoginContainer>
            <LoginForm>
                <FormGroup>
                    <label>
                        Email
                    </label>
                   <InputOutline type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>

                <FormGroup>
                        <label>
                            Password
                        </label>
                    <InputOutline type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>

                <FormGroup>
                    <ButtonOutline onClick={() => submitForm()} disabled={!email || !password}>
                       {
                           sending 
                           ?
                           <CircularProgress size={30} />
                           :
                           'Submit' 
                       }
                    </ButtonOutline>
                </FormGroup>

            </LoginForm>
        </LoginContainer>
    )
};


export default Login;
import moment from 'moment';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { auth, db } from '../../firebase';

function MessageSingle({ user, msg }) {
    const [ userLoggedIn ] = useAuthState(auth);

    const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;

    return (
        <Container>
            <TypeOfMessage>
                {msg.message}
                <Timestamp>
                    {msg.timestamp ? moment(msg.timestamp).format('LT') : '...'}
                </Timestamp>
            </TypeOfMessage>
        </Container>
    )
}

export default MessageSingle

const Container = styled.div``;

const MessageElement = styled.p`
    width: fit-content;
    padding: 15px;
    border-radius: 8px;
    margin: 10px;
    min-width: 60px;
    padding-bottom: 26px;
    position: relative;
    text-align: right;
`;
const Timestamp = styled.span`
    color: gray;
    padding: 10px;
    font-size: 9px;
    position: absolute;
    text-align: right;
    bottom: 0;
    right: 0;
`;

const Sender = styled(MessageElement)`
    margin-left: auto;
    background-color: #dcf8c6;
`;
const Receiver = styled(MessageElement)`
    text-align: right;
    background-color: whitesmoke;

`;
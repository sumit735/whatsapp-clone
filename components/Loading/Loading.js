import { Circle } from 'better-react-spinkit'

const Loading = () => {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh'}}>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/whatsapp-eefc6.appspot.com/o/chat.svg?alt=media&token=dbfa9310-0aeb-4a9f-9782-77b3bac0034b" alt="" height={200} style={{ marginBottom: 10 }} />
                <Circle size={60} color="#6C63FF" />
            </div>
        </center>
    );
}

export default Loading;
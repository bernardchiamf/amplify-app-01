import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
const Premium = ()=>{
    return (
        <Authenticator>
            {
                ({signOut}) => (
                    <div>
                        <h1>Hello , welcome my website</h1>
                        <h2>You are authenticated ! this is premium content page!!</h2>
                        <button onClick={signOut}>Sign Out</button>
                    </div>
                )
            }
        </Authenticator>
    );
};

export default Premium;
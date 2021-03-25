import { useReducer } from 'react';
import SetupsListItem from './SetupsListItem';

const SetupsList = props => {
    if(props.items.length === 0) {
        return(
            <div className='self-center mx-auto'>
                <p>No setups found</p>
            </div>
        );
    }
    return ( 
        <ul>
            {props.items.map(setup => {
                return <SetupsListItem key={setup.id} id={setup.id} title={setup.title} likes={setup.likes} username = {setup.username} languagesList = {setup.languagesList} />
            })}
        </ul>
     );
}
 
export default SetupsList;
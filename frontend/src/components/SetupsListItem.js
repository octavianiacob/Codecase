const SetupsListItem = props => {
    return ( 
        <li className='bg-teal-300'>
            <h1>{props.title}</h1>
            <h2>@{props.username}</h2>
            <p>Likes = {props.likes}</p>
            <p>ID = {props.id}</p>
            <ul>
                <li>{props.languagesList.map(item => {
                    return item + ', '
                })}</li>
            </ul>
        </li>
     );
}
 
export default SetupsListItem;
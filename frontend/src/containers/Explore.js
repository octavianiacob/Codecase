import SetupList from '../components/SetupsList';

const Explore = () => {

    const SETUPS = [
        {id: 's1', title: 'MERN Setup', likes: 21, username: 'Octavzz', languagesList:['JavaScript', 'TypeScript', 'Python'], toolsList:['VSCode', 'Chrome']}
    ];

    return (
		<div>
			<h1>Explore page</h1>
            <SetupList items = {SETUPS} />
		</div>
	);
}
 
export default Explore;
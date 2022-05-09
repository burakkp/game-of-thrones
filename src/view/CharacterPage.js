import { useContext } from "react";
import Table from "../Components/Table/Table";
import Pagination from "../Components/Pagination/Pagination";
import { GOTContext } from "../Contexts/Context";

const CharacterPage = () => {
    const {characters} = useContext(GOTContext);
    
    const columns = [
        { accessor: 'name', label: 'Name' },
        { accessor: 'gender', label: 'Gender' },
        { accessor: 'age', label: 'Age' },
        { accessor: 'culture', label: 'Culture' },
        { accessor: 'born', label: 'Born' },
        { accessor: 'died', label: 'Died' },
        { accessor: 'father', label: 'Father', format: 'url' },
        { accessor: 'mother', label: 'Mother', format: 'url' },
        { accessor: 'spouse', label: 'Spouse', format: 'url' },
        { accessor: 'titles', label: 'Titles' },
        { accessor: 'aliases', label: 'Aliases' },
      ]
    
      const rows = characters;

    return (
        <div>
            <Table rows={rows} columns={columns} />
            <Pagination />
        </div>
    )
}

export default CharacterPage;
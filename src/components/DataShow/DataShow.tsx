import { addToDb } from "../../shared/fakedb";

interface iData {
    name: string;
    id: string;
    index: number;
    email: string;
}

const DataShow = (props : object) => {
    const {name, id, email ,index} = props as iData;
    const ClickHandler = (id:string) => {
        addToDb(id);
    }
    return (
        <div style={{backgroundColor:'lightGray',padding:'1rem',marginBottom:'1rem'}}>
            <h3>{name}</h3>
            <h3>{id}</h3>
            <h3>{email}</h3>
            <h3>{index}</h3>
            <button onClick={() => ClickHandler(id)}>Click Me</button>
        </div>
    );
};

export default DataShow;
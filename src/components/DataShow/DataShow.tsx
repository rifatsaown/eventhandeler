interface iData {
    name: string;
    id: string;
    index: number;
    email: string;
}

const DataShow = (props : object) => {
    const {name, id, email ,index} = props as iData;
    const ClickHandler = (id?:string, index?:number) =>{
        console.log('clicked',id,index);
    }
    return (
        <div style={{backgroundColor:'lightGray',padding:'1rem',marginBottom:'1rem'}}>
            <h3>{name}</h3>
            <h3>{id}</h3>
            <h3>{email}</h3>
            <h3>{index}</h3>
            <button onClick={() => ClickHandler(id,index)}>Click Me</button>
        </div>
    );
};

export default DataShow;
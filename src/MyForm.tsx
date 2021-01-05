import React, {useState} from 'react';

interface MyFormProps {
    onSubmit : (form:{name:string; description:string})=> void;
};

interface MyObj {
    name : string;
    description : string;
}

const MyForm=({onSubmit}:MyFormProps)=>{
    const [form,setForm] = useState<MyObj>({
        name:'',
        description :''
    });

    const {name,description} = form;

    const onChange=(e:any)=> {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit=(e:any)=>{
        e.preventDefault();
        onSubmit(form);
        setForm({
            name:'',
            description:''
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange}/>
            <button type="submit">등록</button>
        </form>
    )
}

export default MyForm;
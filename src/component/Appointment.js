import React,{useState} from "react";

const Appointment = ()=>{

    let[val , setval] = useState({
        name:"",
        lastname:"",
        phone:"",
        date:"",
        massege:"",
    });
    let[predata , setpredata] = useState([]);
    const inputVal = (e) =>{
        let{value , name} = e.target;
        // console.log(value , name);
        setval({...val , [name]:value});
    }
    const formsubmit = (e) =>{
        e.preventDefault();
        const allData = {...val , id:new Date().getTime().toString()};
        setpredata([...predata , allData]);
        setval({
            name:"",
            lastname:"",
            phone:"",
            date:"",
            massege:"",
        })
    }
 return(
    <div className="container mt-5">
    <div className="row conatctForm">
        <div className="col-12">
        <form action="" onSubmit={formsubmit}>
        <div className="form-group">
         
            <input type="text" className="form-control" value={val.name} name="name" onChange={inputVal} placeholder="Name" autoComplete="off" required />
        </div>
        <div className="form-group">
           
            <input type="text" className="form-control" value={val.lastname} name="lastname" onChange={inputVal} placeholder="Last Name" autoComplete="off" required />
        </div>
        <div className="form-group">
          
            <input type="number" className="form-control" value={val.phone} name="phone" onChange={inputVal} placeholder="Phone" autoComplete="off" required />
        </div>
        <div className="form-group">
           
            <input type="date" className="form-control" value={val.date} name="date" onChange={inputVal} placeholder="Appointment Date" autoComplete="off" required />
        </div>
        <div className="form-group">
         
            <textarea value={val.massege} name="massege" onChange={inputVal} placeholder="Your Msg ..." autoComplete="off" required></textarea>
        </div>
       <div className="form-group">
        <button type="submit" className="formBtn">Submit</button>
      </div>
    </form>
        </div>
    </div>
    {
        predata.map((eachval)=>{
            return(
                <>
                <div className="formDetail" key={eachval.id}>
                   
                    <p>Name: { eachval.name}</p>
                    <p>LastName: { eachval.lastname}</p>
                    <p>Phone: { eachval.phone}</p>
                    <p>Appointment Date: { eachval.date}</p>
                    <p>Massege: { eachval.massege}</p>
                </div>
                </>
            )
        })
    }
</div>
 )
};

export default Appointment;
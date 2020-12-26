
fetch('http://localhost:4001/user?name=Alaa',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})

fetch('http://localhost:4001/user/Alaa',{
    method:'POST',

    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"message":"hello ",name:'Alaa'}),
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})
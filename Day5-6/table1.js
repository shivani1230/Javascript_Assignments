let employee =[{
    name:'Shivani',
    age:24,
    city:'Pune',
    salary:24000,
},
{
    name:'Reyansh',
    age:19,
    city:'Hyderabad',
    salary:28000,
},
{
    name:'Swamini',
    age:23,
    city:'Mumbai',
    salary:20000,
},
{
    name:'Gaurav',
    age:30,
    city:'Agra',
    salary:30000,
}
];

function display(employee){
    let tabledata="";
    let srno=1;
        employee.forEach(function(emp,index){
    let newrow = `<tr>
    <td>${srno}</td>
    <td>${emp.name}</td>
    <td>${emp.age}</td>
    <td>${emp.city}</td>
    <td>${emp.salary}</td>
    <td><button onclick='deletemp(${index})'>Delete</button></td>
    </tr>`;

        tabledata+=newrow;
        srno++;
        });
        document.getElementsByClassName('tdata')[0].innerHTML=tabledata;
    }

    function add(e){
    
        e.preventDefault();
        let emp={};

        let name=document.getElementById("name").value;
        let age=document.getElementById("age").value;
        let city=document.getElementById("city").value;
        let salary=document.getElementById("salary").value;
        
        emp.name=name;
        emp.age=Number(age);
        emp.city=city;
        emp.salary=Number(salary);

        employee.push(emp);
        display(employee);
            
       return false;
        }
        display(employee);
        
        function search(){
            let svalue=document.getElementById("search").value;
            
           let newdata = employee.filter(function(employee){
               if(employee.name.indexOf(svalue)!= -1){

                return employee.name.indexOf(svalue) != -1;
               }
               else if(employee.city.indexOf(svalue)!=-1){

                return employee.city.indexOf(svalue) != -1;
               };
                
               });
            display(newdata);
            }
        function deletemp(index){
            employee.splice(index,1);
            display(employee);
        }
window.onload=function(){
let buses=[];

    if(localStorage.getItem("buses")==null){
        let stringbuses = JSON.stringify(buses);

        console.log(stringbuses);
        localStorage.setItem("buses",buses);
    }
};
function display(buss=undefined){
    let rebuses;
    let sample='';
    if(buss==undefined){

        rebuses=JSON.parse(localStorage.getItem("buses"));
    }
    else{
        rebuses=buss;
    }
        rebuses.forEach(function(buse,index){
    let newrow = `<tr>
    <td>${index+1}</td>
    <td>${buse.bname}</td>
    <td>${buse.sname}</td>
    <td>${buse.dest}</td>
    <td>${buse.bno}</td>
    <td>${buse.cpcty}</td>
    <td><button onclick="delete_ele(${index})" class="del">Delete</button></td>
    </tr>`;

        sample+=(newrow);
    
        });
        console.log(typeof(rebuses));
        document.getElementsById('tdata').innerHTML=sample;
    }

function insert(e){
    e.preventDefault();
    let bus={};

        let b_name=document.getElementById("bname").value;
        let s_name=document.getElementById("sname").value;
        let de_st=document.getElementById("dest").value;
        let b_no=document.getElementById("no").value;
        let cp_cty=document.getElementById("cpcty").value;

        bus.bname=b_name;
        bus.sname=s_name;
        bus.dest=de_st;
        bus.bno=Number(b_no);
        bus.cpcty=Number(cp_cty);

        let rate=JSON.parse(localStorage.getItem("buses"));
        rate.push(bus);

        startbus=JSON.stringify(rate);
        localStorage.setItem("buses",startbus);

        let rate1=JSON.parse(localStorage.getItem("buses"));
        display(rate1);

        return false;
    }
display();

function search(){
    let ser=document.getElementById("searching").value;

    let arr=JSON.parse(localStorage.getItem("buses"));

    let bus_arr=arr.filter(function(element){
        if(element.sname.indexOf(ser)!= -1){
            return element.sname.indexOf(ser) != -1;
        };
    })
    display(bus_arr);
}

function delete_ele(index){
    let rte=JSON.parse(localStorage.getItem("buses"));
    rte.splice(index,1);
    display(rte);
    localStorage.setItem("buses",JSON.stringify(rte));
}
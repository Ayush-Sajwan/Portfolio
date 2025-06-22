const axios=require("axios");

async function Request(lowerlimit ,upperlimit){

    let result=await axios.get("https://jsonmock.hackerrank.com/api/medical_records?page=1");

    let pages=result.data.total_pages;    

    total=0;

    for(i=1;i<=pages;i++){


        let res=await axios.get(`https://jsonmock.hackerrank.com/api/medical_records?page=${i}`);

        let data=res.data.data;

        for(j=0;j<data.length;j++){

            let val=data[j].vitals.bloodPressureDiastole;

            if(val>=lowerlimit && val<=upperlimit){
                total+=1;
            }
        }


        
    }

    return total;
}
Request(120,160)
.then((data)=>{
    console.log(data);
});

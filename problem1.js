let day;

for(let m=1; m<=12; m++){
  if(m==2){
    day = 28;
  }else if(m==4 || m==5 || m==6 || m==9){
    day = 30;
  }else{
    day = 31;
  }
  for(let d=1; d<=day; d++){
    console.log(d + " " + m);
  }
}
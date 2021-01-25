

const equal=()=>{
    const evals=document.getElementById("eval").value;
    const ans=document.getElementById("ans");
    const answer=eval(evals)
    ans.value=answer;
    document.getElementById("eval").value="";
}


const one=()=>{
    const eval=document.getElementById("eval");
    eval.value+=1;
}

const two=()=>{
    const eval=document.getElementById("eval");
    eval.value+=2;
}

const three=()=>{
    const eval=document.getElementById("eval");
    eval.value+=3;
}

const four=()=>{
    const eval=document.getElementById("eval");
    eval.value+=4;
}

const five=()=>{
    const eval=document.getElementById("eval");
    eval.value+=5;
}

const six=()=>{
    const eval=document.getElementById("eval");
    eval.value+=6;
}

const seven=()=>{
    const eval=document.getElementById("eval");
    eval.value+=7;
}

const eight=()=>{
    const eval=document.getElementById("eval");
    eval.value+=8;
}

const nine=()=>{
    const eval=document.getElementById("eval");
    eval.value+=9;
}

const plus=()=>{
    const eval=document.getElementById("eval");
    eval.value+="+";
}





const minus=()=>{
    const eval=document.getElementById("eval");
    eval.value+="-";
}


const star=()=>{
    const eval=document.getElementById("eval");
    eval.value+="*";
}


const zero=()=>{
    const eval=document.getElementById("eval");
    eval.value+=0;
}


const decimal=()=>{
    const eval=document.getElementById("eval");
    eval.value+=".";
}

const division=()=>{
    const eval=document.getElementById("eval");
    eval.value+="/";
}
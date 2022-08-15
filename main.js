

let row = 5;

for (let i = 1; i<=row; i++){
    for (let j = 1; j<=row; j++){
        if(j==1 || j==row){
         document.write("x");   
        } else {
            document.write(" &nbsp;")
        }
    }

    document.write("<br/>")
}
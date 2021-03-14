let myArr = [], mp4Arr = [], pngArr = [], jpgArr = [], jpegArr = [];
let myReg1 = /mp4$/i;
let myReg2 = /png$/i;
let myReg3 = /jpg$/i;
let myReg4 = /jpeg$/i;


function FileDetails () {

    // GET THE FILE INPUT.
    let fi = document.getElementById('file');
    let files = fi.files;
    // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
    if (files.length > 0) {

        // THE TOTAL FILE COUNT.
        document.getElementById('fp').innerHTML =
            'Total Files: <b>' + files.length + '</b></br >';

        // RUN A LOOP TO CHECK EACH SELECTED FILE.
        for (let i = 0; i <= files.length - 1; i++) {

            var fname = files[i].name;      // THE NAME OF THE FILE.
            var fsize = files[i].size;      // THE SIZE OF THE FILE.
            myArr.push(fname);
            
            //Display content in a table
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');

            var text1 = document.createTextNode(i + 1+"");
            var text2 = document.createTextNode(fname);
            var text3 = document.createTextNode(fsize+' bytes');

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            document.getElementById("myTab").appendChild(tr);

        }


        for (let j = 0; j < myArr.length; j++) {
            if (myReg1.test(myArr[j])) {
                mp4Arr.push(myArr[j]);
            } else if (myReg2.test(myArr[j])) {
                pngArr.push(myArr[j]);
            } else if (myReg3.test(myArr[j])) {
                jpgArr.push(myArr[j])
            } else if (myReg4.test(myArr[j])) {
                jpegArr.push(myArr[j])
            }
        }
        //Display content in a table
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        var text1 = document.createTextNode(mp4Arr.length+"");
        var text2 = document.createTextNode(pngArr.length+"");
        var text3 = document.createTextNode(jpgArr.length+"");
        var text4 = document.createTextNode(jpegArr.length+"");

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        document.getElementById("myTab1").appendChild(tr);
    }
    else {
        alert('Please select a file.')
    }
}


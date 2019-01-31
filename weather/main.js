const fs = require('fs')

if(process.argv.length != 3) {
    console.log("Should send file for parse")
} else {
    let xml = fs.readFileSync("./" + process.argv[2], "utf8")
    xml = xml.split('\r\n')
    let stack = []
    let state = 0
    for(let line of xml) {
        if(line.indexOf('<?') >= 0) {
            continue;
        }
        line = line.trim()
        /*
        for all line 
        1: <  | collect attribute
        2: >  | collect data
        0: </ or /> | next , ready to start new tag 
        */
        if(state == 0 && line.indexOf('<') >= 0) {
            
            state = 1;
            let i = line.indexOf('<')
            do {
                i++
            } while(line[i] != '>' || line[i] != '/>' || line[i] != ' ')

            // set open tag
            stack.push(line.substring(line.indexOf('<')+1,i))

            // part collect attribute
            let endTag = 0
            let closeOne = line.indexOf('>')
            let closeTwo = line.indexOf('/>')
            if( closeOne >= 0) 
                endTag = closeOne
            if( closeTwo >= 0) 
                endTag = closeTwo
            if(endTag == 0) {
                // cant find any tag close
                // <TAG ...
                //      .... > or />

            } else {
                let somePart = ""
                if(closeOne >= 0) {
                    // <TAG ...>
                    somePart = line.substring(i+1,closeOne)
                    // finish collect attribute
                    state = 2
                } else {
                    // <TAG .../>
                    somePart = line.substring(i+1,closeTwo)
                    // finish collect attribute and start new tag
                    state = 0
                }
                somePart = somePart.trim()
                let {name,value} = getNameAndValue(somePart)
                
            
            }


        }

    }
}

getNameAndValue = (str) => {
    let state = 0
    let name = []
    let value = []
    let stateIndex = 0
    for(let i=0;i<str.length;i++) {
        if(str[i] == " ") {
            continue
        } else if(state == 0) {
            state = 1
            stateIndex = 0
        }
        if (str[i] == '=') {
            name.push(str.substring(stateIndex, i))
            state = 1
            stateIndex = i + 2
            let nextEnd = str.indexOf('"',stateIndex)
            value.push(str.substring(i+2,nextEnd))
            i = nextEnd + 1
            state = 0
        }
    }
    return { name , value}
}
function dolorWrodtosign(){
    let p = document.getElementsByTagName("p")
    for(const element in p){
        let temp = p[element]
        temp = temp.textContent
        if(temp.toUpperCase().indexOf("DOLOR") != -1)
            temp = temp.slice(0, temp.toUpperCase().indexOf("DOLOR")) + "$" + temp.slice(temp.toUpperCase().indexOf("DOLOR")+5, temp.length)
        p[element].textContent = temp
        console.log(temp)
        console.log(p[element].textContent)
    }
}

dolorWrodtosign()
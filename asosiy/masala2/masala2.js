let count = 0
let limit = 1000

function limitSet(){
    if(count >= 1000){
        alert("Today's limit reacher can't send message any more")
        force = false
    }
    else{
        limit--
        count++
        console.log("Sent messages today: ", count)
        console.log("You can send ", limit, "messages today.")
        console.log("You have sent", Math.floor(100*count/1000), "% messages")
    }
}
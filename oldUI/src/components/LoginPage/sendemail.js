const testmessage = "This is a test message"
const testemail = "dsfds@dsfg.de"
const clientnametest = "name"


function sendProposal(values) {
    console.log("start sending proposal...");
    setSendProp(true)

    const data = new FormData()
    data.append("Clientname", clientnametest || "");
    data.append("Sender", testemail || "");
    data.append("Message", testmessage || "");

    axios.post(API.email.proposal, data, {

        headers: {
            "Authorization": `Bearer ${accessToken}`,
            'Accept' : 'application/json',
        },
        withCredentials: true,
    })
        .then(res => {


        })
        .finally(() => {                
            setSendProp(false)
        })

    success()
}
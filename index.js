function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fill_form() {
    var buttons = document.getElementsByClassName('button is-info is-small');
    console.log(buttons);
    while(buttons.length != 0){
        for(const button of buttons){
            button.click();
            await sleep(2000);
    
            for (let i = 0; i <= 10; i++) {
                let n = 'option_1_1_' + String(i);
                console.log(n);
                let radio = document.getElementsByName(n);
                console.log(radio);
                if (radio.length != 0) {
                    let ans = Math.round(Math.random());
                    radio[ans].click();
                }
            }
    
            for (let i = 0; i <= 10; i++) {
                let n = 'option_2_1_' + String(i);
                console.log(n);
                let radio = document.getElementsByName(n);
                console.log(radio);
                if (radio.length != 0) {
                    let ans = Math.round(Math.random());
                    radio[ans].click();
                }
            }
    
            while (!document.querySelector('button[data-v-7fe871a7]')) {
                await sleep(100);
            }
            let send_button = document.querySelector('button[data-v-7fe871a7]');
            console.log(send_button);
            send_button.click();
            await sleep(5000);
        }
        buttons = document.getElementsByClassName('button is-info is-small');
        console.log(buttons);
    }
}

fill_form();

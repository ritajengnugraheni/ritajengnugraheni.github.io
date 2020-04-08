
const cobaMain = () => {
    if (count != 0) {
        document.getElementById('cobain').innerHTML =
            `<h1 style="color:  white; margin-top: 50px;" >Hallo !</h1>`
        setTimeout(function () {
            document.getElementById('Skill').style.opacity = '1'
        }, 1)
        count = 0
    }
}

const geserCoba = () => {
    document.getElementById("cobain").innerHTML = ` <h1 id="intro" style="color:  white ;margin-top: 50px;"> Bertanggung Jawab</h1> `
    setTimeout(function () {
        document.getElementById('intro').style.opacity = '1'
    }, 1)
    count = 1
}
const geserCoba2 = () => {
    document.getElementById("cobain").innerHTML = `<h1 id="intro" style="color:  white ;margin-top: 50px;">Adobe XD</h1> `
    setTimeout(function () {
        document.getElementById('intro').style.opacity = '1'
    }, 1)
    count = 1
}
const keteranganNomor=()=>{
    alert('ini nomor tidak dapat dihubungi')
  }
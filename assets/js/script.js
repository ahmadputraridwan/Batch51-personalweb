// // data colection
function getData(){
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const phone = document.getElementById('phone').value
  const subject = document.getElementById('subject').value
  const message = document.getElementById('message').value
  
  if(name == ''){
    return alert('isi nama anda')
  } else if (email == ''){
    return alert('isi email anda')
  } else if (phone == ''){
    return alert('isi nomor telpon anda')
  } else if(subject == ''){
    return alert('pilih subjek pesan')
  } else if(message == ''){
    return alert('tulis isi pesan')
  }
  
  const emailReceiver = 'aditiasaputra180897@gmail.com'
  let a = document.createElement('a')
  a.href = `mailto:${emailReceiver}?subject=${subject}&body= Nama :${name}, No telpon : ${phone}, message : ${message}`
  a.click()

  let data = {
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message
  }
  console.log(data)

}
  // datavalidation
// function getData() {
//   // data collection
//   const name = document.getElementById('name').value
//   const email = document.getElementById('email').value
//   const phone = document.getElementById('phone').value
//   const subject = document.getElementById('subject').value
//   const message = document.getElementById('message').value

//   // data validation
//   if(name == ''){
//     return alert('Nama harus di isi')
//   }
//    else if(email == '') {
//     return alert('Email harus di isi') 
//   } else if(phone == '') {
//     return alert('Nomor telpon harus di isi') 
//   } else if(subject == '') {
//     return alert('subject harus di isi') 
//   } else if(message == '') {
//     return alert('Message harus di isi') 
//   }

//   // execute to email
//   const emailReceiver = 'aditiasaputra180897@gmail.com'
//   let a = document.createElement('a')
//   a.href = `mailto:${emailReceiver}?subject=${subject}&body= Halo nama saya ${name} , bisakah anda menghubungi saya ${phone} untuk membahas project ${message}`
//   a.click()

//   let data = {
//     name,
//     email,
//     phone,
//     subject,
//     message
//   }

//   console.log(data)
// }
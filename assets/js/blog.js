function getData(){
  const tittle = document.getElementById('input-tittle').value
  const start = document.getElementById('input-start-date').value
  const end = document.getElementById('input-end-date').value
  const descriptiom = document.getElementById('input-description').value
  const tecnologi = document.getElementById('checkbox').value
  const image = document.getElementById('file-upload').value


  if(tittle == ''){
    return alert('tittle tidak boleh kosong')
  } else if (start == ''){
    return alert(' start date tidak boleh kosong')
  } else if (end == ''){
    return alert('end date tidak boleh kosong')
  } else if(descriptiom == ''){
    return alert('description tidak boleh kosong')
  } else if(tecnologi == ''){
    return alert('pilih salah satu')
  } 
}
//je recupere mes elements importants
const searchwrapper = document.querySelector(".search-input");
const inputbox = searchwrapper.querySelector("input");
const suggbox = searchwrapper.querySelector(".autocom-box");


  //Si l'utilisateur presse sur le bouton
  inputbox.onkeyup = (e)=>{
    let userData = e.target.value; //l'utilisateur entre des données
    let emptyArray = [];
    if(userData){
        emptyArray = suggestion.filter((data)=>{
              return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
          });
  
              emptyArray = emptyArray.map((data)=>{
                  return data = '<li>'+ data +'</li>';
              
        });
        console.log(emptyArray);
    }else{

    }
    showsuggestion(emptyArray);
    searchwrapper.classList.add("active");
  }

  function showsuggestion(list){
      let listData;
      if(!list.length){
            userValue = inputbox.value;
            listData ='<li>' + userValue + '</li>';

      }else{
          listData = list.join('');
      }
      suggbox.innerHTML = listData;
  }
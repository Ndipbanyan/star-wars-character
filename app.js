


//create an array of images matching the API object index of characters
let imagesArray=[
    "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg?region=0%2C0%2C1536%2C864&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_042e8d4f.jpeg?region=338%2C0%2C942%2C531&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=0%2C0%2C1560%2C878&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg?region=0%2C0%2C1560%2C878&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=768",
    "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768"

]

class Stars{

    constructor(name, gender,height, birth_year){

        this.name = name;
        this.gender = gender;
        this.height = height;
        this.birth_year = birth_year;
    }

    
}

fetch('https://swapi.dev/api/people')
.then((res) => { return res.json() })
.then(({results}) => {

    
        //console.log(wrapper);
  
    let btn;
     for(let i=0; i<results.length; i++){
        let star =new Stars(results[i].name, results[i].gender, results[i].height, results[i].birth_year);
        let wrapper=document.querySelector("#list")
         let btn = document.createElement("button");   // Create a <button> element
            btn.textContent = star.name;                   // Insert text
            wrapper.append(btn);               // Append <button> to <div id="list">

           
            let image = document.createElement('img');

                image.src = imagesArray[i];
                // image.alt = `This is ${star.name}`;
            let imageDiv=document.getElementsByClassName('starImage');
                imageDiv.append(image);

            let gend=document.createElement('p');
                gend.textContent=star.gender;
            let p1=document.getElementsByClassName('details');
                p1.append(gend);


           
            
   
         }
    
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
          });
        




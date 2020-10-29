import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  numberOfClicks ;
  pokemonData:any=[];
  constructor() { }

  async ngOnInit() {
    await this.fnFetchPokemonData();
    await this.fnFetchOnePokemonData(1);
  }

  counterFn(counter: number) {
    this.numberOfClicks = counter;
  }

  async fnFetchPokemonData(){
    let url = 'https://pokeapi.co/api/v2/pokemon';
    let response = await fetch(url);

    let resPokemon = await response.json();
    console.log(resPokemon.results);
  }

  async fnFetchOnePokemonData(id){
    if(id < 4){
      let pokemonDetails ={};
      let url = 'https://pokeapi.co/api/v2/pokemon/'+id;
      let resPokemon = await fetch(url);
      let response = await resPokemon.json();
      console.log("response ==> "+JSON.stringify(response));
      let Dis =[];
      let discription = {};
      let abilities=[];
      for(let ability of response.abilities){
        abilities.push(ability['ability'].name);
      }
      
      discription['abilities']=abilities;
      discription['height'] = response.height;
      Dis.push(discription)
      let pokemonMoves = [];
      for(let move of response.moves){
        pokemonMoves.push(move['move'].name);
      }


      pokemonDetails["name"] = response.name;
      pokemonDetails['image'] = response.sprites.front_shiny
      pokemonDetails['discription']= Dis;
      pokemonDetails['moves'] = pokemonMoves;
      this.pokemonData.push(pokemonDetails);
      this.fnFetchOnePokemonData(++id);
    }
    else{
      console.log("do nothing")
    }
    

  }

 
}

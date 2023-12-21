import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor() {}
  
  title = 'trabalho-proz';
  url: string = "https://pokeapi.co/api/v2/pokemon/mewtwo/";
  pokemonImage: string = "";
  pokemonName: string = "";
  pokemonHeight: number = 0;
  pokemonWeight: number = 0;
  pokemonAbilities: Array<string> = [];
  
  getApi(): void {
    fetch(this.url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro na requisição da api!!!!");
        }
        return response.json();
      })
      .then(data => {
        console.warn("DEBUG - Resultado: ", data);

        this.pokemonImage = data.sprites.front_default;
        this.pokemonName = data.name;
        this.pokemonHeight = data.height / 10;
        this.pokemonWeight = data.weight / 10;
        this.pokemonAbilities[0] = data.abilities[0].ability.name;
        this.pokemonAbilities[1] = data.abilities[1].ability.name;

        this.showPokemonImage();
        this.showPokemonName();
        this.showPokemonHeight();
        this.showPokemonWeight();
        this.showPokemonAbilities();
      })
      .catch(error => {console.error("Erro: ", error)});  
    }

    showPokemonImage() {
      const image = document.getElementById("image") as HTMLDivElement;
      image.innerHTML = `<img src="${this.pokemonImage}" alt="Foto do Pokemon">`;
    }

    showPokemonName() {
      const name = document.getElementById("name") as HTMLDivElement;
      name.innerHTML += `<p>Name: ${this.pokemonName}</p>`;
    }

    showPokemonHeight() {
      const height = document.getElementById("height") as HTMLDivElement;
      height.innerHTML += `<p>Height: ${this.pokemonHeight}m</p>`;
    }

    showPokemonWeight() {
      const weight = document.getElementById("weight") as HTMLDivElement;
      weight.innerHTML += `<p>Weight: ${this.pokemonWeight}Kg</p>`;
    }

    showPokemonAbilities() {
      const abilities = document.getElementById("abilities") as HTMLDivElement;
      abilities.innerHTML += `<p>First ability: ${this.pokemonAbilities[0]}</p>`;
      abilities.innerHTML += `<p>Second ability: ${this.pokemonAbilities[1]}</p>`;
    }
    
  
  ngOnInit(): void {
    this.getApi();
  }

  
}

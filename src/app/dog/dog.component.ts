import { DogService } from './../dog.service';
import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.newDog();
  }
  newDog(){
    this.dogService.getRandomDog().subscribe(
      {
        next: dog => this.dog = dog
      }
    );
  }

  dog: Dog = {} as Dog;

  serve: DogService = {} as DogService;

  getName(): string []{
    return this.dog.message.split("/")[4].split('-');
  }


}

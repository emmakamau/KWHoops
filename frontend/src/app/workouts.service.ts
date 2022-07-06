import { Injectable } from '@angular/core';
import { Category, Workout } from './Workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {


 private workoutdata:Workout[]=[
  {
  video:"https://www.youtube.com/embed/teqk-UDPCrc",
  category:Category.Endurance
  },
  {
    video:"https://www.youtube.com/embed/LUz0LeY7Df",
    category:Category.Strength
  },
  {
    video:"https://www.youtube.com/embed/Zix5EP74jTs",
    category:Category.Balance
  }
]


  constructor() { }

 getWorkout(){
 return this.workoutdata
}
}

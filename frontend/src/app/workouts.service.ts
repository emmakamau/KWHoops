import { Injectable } from '@angular/core';
import { Category, Workout } from './Workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {


 private workoutdata:Workout[]=[
  {
  video:"https://www.youtube.com/embed/teqk-UDPCrc",
  category:Category.Endurance,
  },
  {
    video:"https://www.youtube.com/embed/1eB4SsaVjq8",
    category:Category.Strength
  },
  {
    video:"https://www.youtube.com/embed/BW_L2Njcwgc",
    category:Category.Strength
  },
  {
    video:"https://www.youtube.com/embed/Zix5EP74jTs",
    category:Category.Balance
  },
  {
    video:"https://www.youtube.com/embed/6sG5zHIF1is",
    category:Category.Flexibility,
  }
]



  constructor() { }

 getWorkout(){
 return this.workoutdata
}
}

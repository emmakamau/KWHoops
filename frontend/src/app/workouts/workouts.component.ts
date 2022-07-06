import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Category, Workout } from '../Workout';
import { WorkoutsService } from '../workouts.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  constructor(private workoutservice:WorkoutsService) { }

  workouts:Workout[]=[]
  video="https://www.youtube.com/embed/teqk-UDPCrc"
  filter="All"
  ngOnInit(): void {
    this.workouts= this.workoutservice.getWorkout()
    console.log(this.workouts);
    
  }

  onEndurance(){
    this.workouts= this.workoutservice.getWorkout().filter(v=> v.category===Category.Endurance)
  }
  onStrength(){
    this.workouts=this.workoutservice.getWorkout().filter(v=> v.category===Category.Strength)
  }
  onBalance(){
    this.workouts=this.workoutservice.getWorkout().filter(v=> v.category===Category.Balance)
    console.log(this.workouts);
  }

  Testing(){

    this.workouts= this.workoutservice.getWorkout()
  }


}

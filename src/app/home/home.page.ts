import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonLabel,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    IonBadge,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonChip,
    IonContent,
    IonHeader,
    IonLabel,
    IonSearchbar,
    IonTitle,
    IonToolbar,
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  students = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3
    },
    {
      id: 2,
      name: 'Maria Santos',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3
    },
    {
      id: 3,
      name: 'Carlos Reyes',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3
    },
    {
      id: 4,
      name: 'Angela Garcia',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3
    },
    {
      id: 5,
      name: 'Mark Villanueva',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3
    },
    {
      id: 6,
      name: 'Sofia Mendoza',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3
    },
    {
      id: 7,
      name: 'Daniel Bautista',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3
    },
    {
      id: 8,
      name: 'Beatrice Navarro',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3
    }
  ];

  searchText = '';

  selectedStudent: any = null;

  get filteredStudents() {
    return this.students.filter(student =>
      student.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
  }

  toggleStudent(student: any) {
    this.selectedStudent = this.selectedStudent?.id === student.id ? null : student;
  }

  clearSearch() {
    this.searchText = '';
  }

}
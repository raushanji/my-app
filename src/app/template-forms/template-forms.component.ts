import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { FormService } from '../form.service';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor(private formService: FormService) { }

  ngOnInit() {
  }
  
  salutations=['Mr.','Mrs.'];
  person1 = new Person(this.salutations[0],'ABCD','email@email.com',45678,'SOME ADDRESS');

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    //console.log(this.person1);
    this.formService.submitData(this.person1)
    .subscribe(
      data => console.log('!Success', data),
      error => console.error('Error!',error)
    )
  }
}

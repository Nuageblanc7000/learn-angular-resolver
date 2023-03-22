import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Fan } from '../interface/Fan.interface';
import { FanService } from '../Services/fan.service';
import { dateLimit } from '../Validators/dateLimitValidator';

@Component({
  selector: 'app-create-fan',
  templateUrl: './create-fan.component.html',
  styleUrls: ['./create-fan.component.scss'],
})
export class CreateFanComponent {
  fan!: Fan;
  form!: FormGroup;
  id: string = this._ac.snapshot.params['id'];

  // le constructor qui permet d'injecter
  constructor(
    private _fb: FormBuilder,
    private _serviceFan: FanService,
    private _ac: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formInit();
  }
  //création du form edit et add
  formInit() {
    this.fan = {
      id: '',
      name: '',
      birth_day: undefined,
      series: [],
    };
    if (this.id) {
      this.fan = this._ac.snapshot.data['fan'];
    }
    this.form = this._fb.group({
      name: [this.fan.name, [Validators.required]],
      birth_day: [this.fan.birth_day, [Validators.required, dateLimit()]],
      series: this._fb.array(
        this.fan.series.map((s) =>
          this._fb.group({
            name_serie: [
              s.name_serie,
              [Validators.required, Validators.min(1)],
            ],
          })
        )
      ),
    });
  }
  //getter
  getSeries(): FormArray {
    return this.form.get('series') as FormArray;
  }
  //supprimer
  deleteSerie(index: number) {
    this.getSeries().removeAt(index);
  }
  //ajouter
  addSerie() {
    this.getSeries().push(
      this._fb.group({
        name_serie: [null, [Validators.required]],
      })
    );
  }
  //getter d'erreur
  get nameError() {
    return this.form.get('name');
  }
  get birthDayError() {
    return this.form.get('birth_day');
  }

  //envoi des données grace au service
  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      if (this.id) {
        this._serviceFan.updateFan({ ...this.form.value, id: this.fan.id });
      } else {
        this._serviceFan.createFan(this.form.value);
      }
    }
  }
}

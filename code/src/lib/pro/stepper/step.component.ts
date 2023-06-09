import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  Input,
  ViewChild,
  TemplateRef,
  ElementRef,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'mdb-step',
  exportAs: 'mdbStep',
  template: '<ng-template><ng-content></ng-content></ng-template>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdbStepComponent implements OnChanges {
  @ViewChild(TemplateRef, { static: true }) content: TemplateRef<any>;

  @Input()
  get editable(): boolean {
    return this._editable;
  }
  set editable(value: BooleanInput) {
    this._editable = coerceBooleanProperty(value);
  }
  private _editable = true;

  @Input() name: string;
  @Input() label: string;
  @Input() stepForm: UntypedFormGroup;

  _onChanges: Subject<void> = new Subject();

  constructor(public el: ElementRef) {}

  get isDone() {
    return this._isDone;
  }
  set isDone(value: boolean) {
    this._isDone = value;
  }
  private _isDone: boolean;

  get isWrong() {
    return this._isWrong;
  }
  set isWrong(value: boolean) {
    this._isWrong = value;
  }
  private _isWrong: boolean;

  get isActive() {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }
  private _isActive = false;

  private _removeClasses() {
    this.isActive = false;
    this.isDone = false;
    this.isWrong = false;
  }

  reset() {
    if (this.stepForm) {
      this.stepForm.reset();
    }
    this._removeClasses();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.name && !changes.name.isFirstChange()) {
      this._onChanges.next();
    }

    if (changes.label && !changes.label.isFirstChange()) {
      this._onChanges.next();
    }

    if (changes.editable && !changes.editable.isFirstChange()) {
      this._onChanges.next();
    }

    if (changes.stepForm && !changes.stepForm.isFirstChange()) {
      this._onChanges.next();
    }
  }
}

import { AbstractControl } from "@angular/forms";

export class customValidators {

    static includesSpace(control: AbstractControl) {

        let errorObj = { includeSpace: true }

        if (control.value.indexOf(' ') !== -1) {
            return errorObj
        } else {
            return null
        }

    }

    static hasUrl(control: AbstractControl) {

        let errorsObj = { includeUrl: true }

        if (control.value.includes('.com') !== -1) {
            return errorsObj
        } else {
            return null
        }

    }


}
